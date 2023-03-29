"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function DarkLightMode() {
  const { systemTheme, theme, setTheme } = useTheme();

  // This state is just for dark light theme conflict between server and client
  const [mounted, setMounted] = useState<boolean>(false);
  //set theme mode from client to avoid server-client theme conflict
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="  m-auto   cursor-pointer ">
      {mounted && theme === "dark" && (
        <button
          type="button"
          onClick={() => setTheme("light")}
          className= "  mt-4 text-emerald-600/100 bg-teal-50 drop-shadow-md	 hover:bg-emerald-600/100 hover:text-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-900 backdrop-blur-lg dark:border-gray-900 dark:hover:text-gray-100  dark:hover:bg-gray-700  mr-2 mb-2"
        >
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            ></path>
          </svg>
        Light it Up
        </button>
      )}
      {mounted && theme === "light" && (
        <button
          onClick={() => setTheme("dark")}
          type="button"
          className= "mt-4 text-emerald-600/100 bg-white drop-shadow-md	 hover:bg-emerald-600/100 hover:text-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-900 backdrop-blur-lg dark:border-gray-900  dark:hover:bg-gray-700 mr-2 mb-2"
        >
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            ></path>
          </svg>
        Go Dark
        </button>
      )}
    </div>
  );
}
