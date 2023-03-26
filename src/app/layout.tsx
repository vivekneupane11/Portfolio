import './globals.css'

export const metadata = {
  title: 'Vivek Neupane',
  description: 'Vivek Neupane(Chief Technology Officer) of Medicos International. I am a software engineer and creator.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
