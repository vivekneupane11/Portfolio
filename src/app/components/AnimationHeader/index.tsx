"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimationHeader({ title }: { title: string }) {
  return (
  <AnimatePresence key={title}  mode="wait">
      <motion.div
    key={title}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{opacity: 0, scale: 0}}
      transition={{delay:0.2, duration: 0.5 }}
    >
      <h1 className="font-normal text-4xl my-8 ">{title}</h1>
    </motion.div>
  </AnimatePresence>
  );
}
