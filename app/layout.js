import './globals.css'


export const metadata = {
  title: 'KilDoom',
  description: 'Russian developer',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>{children}</body>
      </html>
  )
}