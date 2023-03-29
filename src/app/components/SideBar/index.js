import React from "react";
import Heading from './components/Heading'
import ButtonLinks from "./components/ButtonLinks";

export default function SideBar() {
  return (
  <aside className="h-[80vh] w-1/3 my-6 sticky top-16 border-r-[0.01px] border-gray-200 dark:border-gray-800 flex flex-col justify-between items-center ">
<Heading/>

<ButtonLinks/>

    </aside>
  
  );
}
