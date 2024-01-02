"use client";

import Image from "next/image";
import { Main } from "@/app/components/Main";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [cout, setCount] = useState(1);

  const handleClick = (e) => {
    setCount((count) => count + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick} className="bg-blue-700 hover:bg-blue-600 text-white rounded px-4 py-2">
        ボタン
      </button>
      <Main page="index" />
      <Footer />
    </main>
  );
}
