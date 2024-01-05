import { Client } from "@/components/client";
import { kv } from "@vercel/kv";
import Link from "next/link";

export default async function Home() {
  const views = await kv.get<number>("views");

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-8">
      <span>Count {views}</span>

      <Client />

      <Link href="https://github.com/luismeyer/kv-redis-starter">Github</Link>
    </main>
  );
}
