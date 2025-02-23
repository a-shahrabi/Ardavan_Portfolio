"use client";

import { useTheme } from "next-themes";
import { Button } from "./button";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            className="rounded-full p-2 h-10 w-10 hover:bg-transparent focus:ring-0 focus:ring-offset-0 transition-all duration-300"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <FaSun className="absolute h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <FaMoon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
}
