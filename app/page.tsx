import Image from "next/image";
import { api } from "./api";
import Link from "next/link";

export default async function Home() {
  const data = await api.hello.get();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Praktium Next.ts Pages Router
          </h1>
          <div className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <p>Nama : {data.nama}</p>
            <p>NIM : {data.nim}</p>
          </div>
        </div>
        <Link
          href="/about"
          className=" flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          About Me
        </Link>
      </main>
    </div>
  );
}
