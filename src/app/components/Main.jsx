"use client";

import Image from "next/image";
import Links from "@/app/components/Links";
import Headline from "@/app/components/Headline";
import { useEffect } from "react";
import React, { useCallback, useState } from "react";
import { useCounter } from "@/app/hooks/useCounter";
import { useInputArray } from "@/app/hooks/useInputArray";
import { useBgLightBlue } from "@/app/hooks/useBgLightBlue";
import Header from "@/app/components/Header";

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Docs →",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app1",
    title: "Learn →",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app2",
    title: "Docs →",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app3",
    title: "Docs →",
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
];

export function Main(props) {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleCange, handleAdd } = useInputArray();
  useBgLightBlue();

  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-between">
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
      </main>

      <Headline page={props.page} handleReduce={handleReduce}>
        <code>{items.length}</code>
      </Headline>

      <Links items={items} />
    </div>
  );
}
