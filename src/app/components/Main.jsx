"use client";

import Image from "next/image";
import Links from "@/app/components/Links";
import Headline from "@/app/components/Headline";

export function Main(props) {
  console.log("main", props);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Headline page={props.page}>code={<code>pages/{props.page}.js</code>}</Headline>
      <Links />
    </main>
  );
}
