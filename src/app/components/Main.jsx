"use client";

import Image from "next/image";
import Links from "@/app/components/Links";
import Headline from "@/app/components/Headline";
import { useEffect } from "react";

import { useCounter } from "@/app/hooks/useCounter";
import { useInputArray } from "@/app/hooks/useInputArray";
import { useBgLightBlue } from "@/app/hooks/useBgLightBlue";
import Header from "@/app/components/Header";

export function Main(props) {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleCange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick} className="bg-blue-700 hover:bg-blue-600 text-white rounded px-4 py-2">
          ボタン
        </button>
        <button onClick={handleDisplay} className="bg-red-700 hover:bg-red-600 text-white rounded px-4 py-2">
          {isShow ? "非表示" : "表示"}
        </button>

        <input type="text" name="" id="" value={text} onChange={handleCange} />
        <button onClick={handleAdd} className="bg-green-700 hover:bg-green-600 text-white rounded px-4 py-2">
          追加
        </button>
        <ul>
          {array.map((item) => {
            return (
              <li type="disc" key={item}>
                {item}
              </li>
            );
          })}
        </ul>

        <Headline page={props.page}>code={<code>pages/{props.page}.js</code>}</Headline>
        
        <Links />
      </main>
    </div>
  );
}
