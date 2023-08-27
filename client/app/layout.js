import './globals.css'

export const metadata = {
  title: 'FundME',
  description: 'Get support for your Projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
