"use client";

import { useTheme } from "next-themes";
import { Button } from "./button";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  // resolvedTheme is the theme actually shown ("light" | "dark"), even when the
  // setting is "system". Checking `theme` made the first click a no-op for
  // visitors whose OS was in light mode.
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle dark mode"
      className="h-10 w-10 rounded-full p-2 transition-all duration-300 hover:bg-transparent focus:ring-0 focus:ring-offset-0"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <FaSun className="absolute h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <FaMoon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
