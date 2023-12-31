"use client";

import Image from "next/image";
import { Main } from "@/app/components/Main";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Top</h1>
      <Main page="index"/>
      <Footer />
    </main>
  );
}
