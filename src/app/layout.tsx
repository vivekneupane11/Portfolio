import ThemeProviders from '@/ThemeProviders'
import Header from './components/Header'
import './globals.css'
import {Roboto} from '@next/font/google'
export const metadata = {
  title: 'Vivek Neupane',
  description: 'Vivek Neupane(Chief Technology Officer) of Medicos International. I am a software engineer and creator.',
}

const roboto = Roboto({
  subsets:['latin'],
  weight:['400','700']
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className='dark:bg-darkSecondary'>
     <ThemeProviders>
<main className=''>
  <h1>Left SideBar</h1>
{children}

</main>
     </ThemeProviders>
        </body>
    </html>
  )
}
