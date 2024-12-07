'use client'
import Link from "next/link"
import { useState } from 'react';
import { useRouter } from "next/navigation";


function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Diklik {count} kali
    </button>
  );
}

export default function Home() {
  const router = useRouter()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <strong>Hello WorlD</strong>
        <Link href="/dashboard">Dashboard</Link>
        <button type="button" onClick={() => router.push('/dashboard/test')}>Testing</button>
        <MyButton />
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
