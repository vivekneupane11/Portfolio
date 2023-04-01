"use client";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"

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
export default function ButtonLinks() {
  let pathname = usePathname() || "/";

  return (
    <section className="flex flex-col pl-4 justify-center items-center w-full">
      {Object.entries(headerLinks).map(([path, { name }],index) => {
        let isActive = pathname === path;
        console.log(isActive,pathname);
        
        return (
          <motion.div  initial={{ opacity: 0, x:-100*(index+1)  }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay:0.2, duration: 0.7*(index+1) }}
          >
 <Link
            href={path}
            key={path}
            type="button"
            className={clsx(

              "  justify-between  	capitalize w-[270px] px-4 py-3  mt-2  shadow-lg  shadow-emerald-600/30 	 hover:bg-emerald-600/100 hover:text-gray-100  focus:outline-none  font-medium rounded-md    text-center inline-flex items-center  dark:bg-gray-900 backdrop-blur-lg dark:border-gray-700  dark:hover:bg-gray-700  mb-1 text-lg",
              {
                "bg-emerald-600": isActive,
                "text-gray-100": isActive,
                "bg-teal-50":!isActive,
                "text-emerald-600 ":!isActive
              },
            )}
          >
      {
        path === '/about'&&      <svg               className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
      </svg>
      }
       {
        path === '/contact'&&   <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path>
      </svg>
      }
      
         {
          path === '/' &&      <svg               className="w-6 h-6"
          fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path>
         </svg>
        
      }
            {name}
            <svg
              className="w-6 h-6"
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </Link>
          </motion.div>
         
        );
      })}
    </section>
  );
}
