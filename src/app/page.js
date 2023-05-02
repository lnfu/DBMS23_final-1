// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

async function getData() {
  // standings 每一頁顯示 50 筆資料（從大到小排序）
  const res = await fetch('http://localhost:3000/api/standings/0');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return <main>{JSON.stringify(data)}</main>;
}
