"use client";

import { Main } from "@/app/components/Main";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

import { useCounter } from "@/app/hooks/useCounter";
import { useInputArray } from "@/app/hooks/useInputArray";
import { useBgLightBlue } from "@/app/hooks/useBgLightBlue";

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleCange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Main page="about" />
      <Footer />
    </main>
  );
}
