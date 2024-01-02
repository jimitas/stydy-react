"use client";

import Image from "next/image";
import Links from "@/app/components/Links";
import Headline from "@/app/components/Headline";
import { useEffect } from "react";

export function Main(props) {

  // useEffect(() => {
  //   console.log("マウント時");
  //   document.body.style.backgroundColor = "lightBlue";

  //   return () => {
  //     console.log("アンマウント時");
  //     document.body.style.backgroundColor = "";
  //   };
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <Headline page={props.page}>code={<code>pages/{props.page}.js</code>}</Headline>
      <Links />
    </main>
  );
}
