import './globals.css'

export const metadata = {
  title: 'Atharva Classes | Coaching Institute Jaipur',
  description: 'Atharva Classes, Indira Gandhi Nagar Sector-8, Jaipur. Focused coaching for CBSE & RBSE students with personalised doubt clearing and mock tests.',
  keywords: 'atharva classes, coaching in jaipur, best coaching in jaipur, cbse coaching, rbse coaching',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
