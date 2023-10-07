import './globals.css'

export const metadata = {
  title: 'HOC Nextjs',
  description: 'Ejemplo de HOC - High Order Component en NEXTJ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
