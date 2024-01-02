"use client";

import Image from "next/image";
import { Main } from "@/app/components/Main";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  const handleCange = useCallback((e) => {
    if (e.target.value.length > 5) {
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が既に存在します。");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightBlue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
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
      <Main page="index" />
      <Footer />
    </main>
  );
}
