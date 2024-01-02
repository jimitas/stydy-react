import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <div>Index</div>
      </Link>
      <Link href="/about">
        <div>About</div>
      </Link>
    </header>
  );
};

export default Header;
