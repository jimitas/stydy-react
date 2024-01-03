"use client";

import { Main } from "@/app/components/Main";
import Footer from "@/app/components/Footer";

export default function Home(props) {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <Main page="index"/>
      <Footer />
    </main>
  );
}
