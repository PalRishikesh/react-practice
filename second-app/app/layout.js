import './globals.css'
import Header from '@/Components/Header'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}

      <body>
        {/* <Header/> */}
        {children}
        </body>
    </html>
  )
}
