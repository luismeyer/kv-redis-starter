import { Client } from "@/components/client";
import { Count } from "@/components/count";

import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-8">
      <div>
        <span>Count </span>

        <Suspense>
          <Count />
        </Suspense>
      </div>

      <Client />

      <Link href="https://github.com/luismeyer/kv-redis-starter">Github</Link>
    </main>
  );
}
