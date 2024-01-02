"use client";

import { Main } from "@/app/components/Main";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";



export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Main page="index" />
      <Footer />
    </main>
  );
}
