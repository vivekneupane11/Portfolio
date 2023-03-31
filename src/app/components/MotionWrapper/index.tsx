"use client"

import {AnimatePresence, motion} from 'framer-motion'
import { usePathname } from 'next/navigation';
export default function MotionWrapper({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const pathname = usePathname();

    return (
        <motion.div className='sm:max-w-[95%] md:max-w-[95%] xl:max-w-[60%]' 
      initial="initial"
      key={pathname}
      animate="animate"
      exit="exit"

      variants={{
        initial: {
          opacity: 0,
          y:-100,
        },
        animate: {
          opacity: 1,
          y:0
        },
        exit: {
          opacity: 1,
          y:-100
        },
        
      
      }}
      
      transition={{
        duration:1.2
      }}
 
   >{children}</motion.div>
  )
}
