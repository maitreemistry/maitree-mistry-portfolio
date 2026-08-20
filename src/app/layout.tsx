import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Maitree Mistry | Software Engineer | AI/ML',
  description: 'Portfolio of Maitree Mistry, a Computer Engineering student and Software Engineer with experience in backend development, AI/ML, cloud technologies, and full-stack development.',
  openGraph: {
    title: 'Maitree Mistry | Software Engineer | AI/ML',
    description: 'Portfolio of Maitree Mistry, a Computer Engineering student and Software Engineer with experience in backend development, AI/ML, cloud technologies, and full-stack development.',
    url: 'https://maitree-mistry-portfolio.vercel.app/',
    siteName: 'Maitree Mistry Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
