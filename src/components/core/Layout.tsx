import { useState } from "react";

import Navbar from "../layout/Navbar";
import { useEffect } from "react";

const Layout = ({ navbg, children }) => {
  const [isSticky, setIsSticky] = useState(false);

  // Add an event listener to handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={isSticky ? "sticky" : ""}>
        <Navbar navbg={navbg} />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
