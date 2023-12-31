import Image from "next/image";
import Footer from "@/app/components/Footer";
import Links from "@/app/components/Links";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Top</h1>
      <Links/>
      <Footer />
    </main>
  );
}
