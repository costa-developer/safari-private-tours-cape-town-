'use client'
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [sticky, setSticky] = useState(false);
  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group flex h-10 w-10 items-center cursor-pointer justify-center"
    >
      <span>
        <Icon icon="line-md:moon-filled-to-sunny-filled-loop-transition" width="35" height="35" className={`hidden dark:block ${sticky ? "text-secondary" : ""}`} />
        <Icon icon="f7:moon-fill" width="35" height="35" className={`block dark:hidden ${sticky ? "text-secondary" : "text-white"}`} />
      </span>
    </button>
  );
};

export default ThemeToggler;
