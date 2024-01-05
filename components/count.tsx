import { kv } from "@vercel/kv";

export async function Count() {
  const views = await kv.get<number>("views");

  return <span>{views}</span>;
}
