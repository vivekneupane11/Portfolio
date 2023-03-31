"use client";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {motion} from 'framer-motion'
const headerLinks = {
  "/": {
    name: "Projects",
  },
  "/about": {
    name: "about",
  },

  "/contact": {
    name: "contact",
  },
};
export default function FloatingButton() {
  let pathname = usePathname() || "/";

  return (
   
    <section className="flex sm:flex md:flex xl:hidden shadow-xl   gap-8 fixed bottom-6 z-10 flex-row pl-4 justify-center items-center w-full">
  
      {Object.entries(headerLinks).map(([path, { name }],i) => {
        let isActive = pathname === path;
        console.log(isActive,pathname);
        
        return (
          <motion.div  initial={{ opacity: 0, x:200 *(i+1)  }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay:0.2, duration: 0.7*(i+1) }}
          >
          <Link
            href={path}
            key={path}
            type="button"
            className={clsx(

              "  justify-center 	capitalize  px-9 py-3  mt-1  shadow-6xl 	 hover:bg-emerald-600/100 hover:text-gray-100  focus:outline-none  font-medium rounded-full    text-center inline-flex items-center  dark:bg-gray-900  dark:border-gray-700  dark:hover:bg-gray-700  mb-1 text-lg backdrop-blur-xl",
              {
                "bg-emerald-600": isActive,
                "text-gray-100": isActive,
                "bg-teal-50":!isActive,
                "text-emerald-600 ":!isActive
              },
            )}
          >
     
            {name}
       
          </Link>
          </motion.div>

        );
      })}
    </section>
  );
}
