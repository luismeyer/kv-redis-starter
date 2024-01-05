"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

export async function increase() {
  await kv.incr("views");

  revalidatePath("/");
}
