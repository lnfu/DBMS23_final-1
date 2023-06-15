import { Browser, chromium, FullConfig } from '@playwright/test';
import path from 'path';
import { config } from 'dotenv';
config({ path: '.env.local' });

async function globalSetup(config: FullConfig): Promise<void> {
  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch({
    headless: config.projects[0].use.headless,
  });
  if (!baseURL) throw new Error(`Base URL wasn't set, cannot start testing`);
  await setupContext(browser, baseURL, 'e2e', process.env.GITHUB_USER, process.env.GITHUB_PASS);
}

async function setupContext(
  browser: Browser,
  baseURL: string,
  name: string,
  user: string,
  password: string,
): Promise<void> {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.setViewportSize({ width: 1440, height: 960 });
  page.goto(baseURL);
  await page.waitForNavigation();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('text=Sign in with GitHub').click();
  await page.waitForNavigation({ waitUntil: 'networkidle' });
  await page.getByLabel('Username or email address').fill(user);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForNavigation({ waitUntil: 'networkidle' });
  await page.context().storageState({ path: getStorageStatePath(name) });
  await page.close();
}
export function getStorageStatePath(name: string): string {
  return path.join(__dirname, `temp/${name}.context.json`);
}
export default globalSetup;
