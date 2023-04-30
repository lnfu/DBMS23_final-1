# 資料庫系統概論 期末專案

## 匯入資料到 MySQL server

- 安裝好 MySQL server 在本機
- 至 [Open Powerlifting](http://old.openpowerlifting.org/data.html) 下載 [openpowerlifting.zip](http://old.openpowerlifting.org/static/openpowerlifting.zip) 檔案，並解壓縮到 ```/data/seeds``` 資料夾。
- 透過以下命令執行腳本 ```data_preprocessing.py```（可能需要話五到十分鐘左右的時間），執行前記得把 ```user_name``` 和 ```user_password``` 這兩個變數改成 MySQL server 的使用者名稱和密碼。


```
python -m venv venv venv/Scripts/active
python -m pip install --upgrade pip
pip install pandas mysql-connector-python
python data_preprocessing.py
```

```
python3 -m venv venv venv/Scripts/active
python3 -m pip install --upgrade pip
pip install pandas mysql-connector-python
python3 data_preprocessing.py
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.js`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
