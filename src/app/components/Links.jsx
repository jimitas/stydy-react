import React from "react";

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

const Links = () => {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {ITEMS.map((item) => {
        return (
          <div
            key={item.href}
            href={item.href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>{item.title}</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Links;
