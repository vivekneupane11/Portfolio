import ThemeProviders from "@/ThemeProviders";
import SideBar from "./components/SideBar";
import "./globals.css";
import { Roboto } from "@next/font/google";
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
          <main className=" relative flex direction-row mt-12 gap-12 ">
            <SideBar />
            {children}
          </main>
        </ThemeProviders>
      </body>
    </html>
  );
}
