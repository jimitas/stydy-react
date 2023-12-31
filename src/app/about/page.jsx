import Footer from "@/app/components/Footer";
import Headline from "@/app/components/Headline";
import Links from "@/app/components/Links";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>about.js</div>
      <Headline page="about"/>
      <Links/>
      <Footer/>
    </main>

  );
}
