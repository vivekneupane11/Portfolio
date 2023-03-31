import ThemeProviders from "@/ThemeProviders";
import SideBar from "./components/SideBar";
import "./globals.css";
import { Roboto } from "@next/font/google";
import FloatingButton from "./components/SideBar/components/FloatingButton";
import Heading from "./components/SideBar/components/Heading";
import MotionWrapper from './components/MotionWrapper'
export const metadata = {
  title: "Vivek Neupane",
  description:
    "Vivek Neupane(Chief Technology Officer) of Medicos International. I am a software engineer and creator.",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('here');
  
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-teal-50 dark:bg-black max-w-[1980px] m-auto">
        <ThemeProviders>
          <main className=" relative flex flex-col mb-20 justify-center items-center xl:justify-start xl:items-start  xl:flex-row mt-12 gap-12 ">
            <section className="flex  xl:hidden">
              <Heading/>
            </section>
            <FloatingButton/>
            <SideBar />
            <MotionWrapper>
            {children}

            </MotionWrapper>
          </main>
        </ThemeProviders>
      </body>
    </html>
  );
}
