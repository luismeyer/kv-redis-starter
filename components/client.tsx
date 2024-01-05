"use client";

import { increase } from "@/app/increase";

export function Client() {
  function handleClick() {
    void increase();
  }

  return (
    <button onClick={handleClick} className="p-2 bg-white rounded">
      Increase
    </button>
  );
}
