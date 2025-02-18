import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from 'geist/font/sans';
import 'katex/dist/katex.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Metadata, Viewport } from "next";
import { Instrument_Serif, Syne } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from "sonner";
import "./globals.css";
import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL("https://search.algoretico.it"),
  title: "Algoretico AI Search Engine",
  description: "Motore di ricerca potenziato dall'intelligenza artificiale che ti consente di trovare informazioni online sfruttando modelli avanzati come GPT-4, Claude e Grok.",
  openGraph: {
    url: "https://search.algoretico.it",
    siteName: "Algoretico AI Search Engine",
  },
  keywords: [
    "Algoretico",
    "algoretico",
    "algoretico.app",
    "algoretico ai",
    "algoretico ai app",
    "algoretico",
    "MiniPerplx",
    "Algoretico AI",
    "motore di ricerca AI",
    "algoretico",
    "motore di ricerca",
    "AI",
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' }
  ],
}

const syne = Syne({ 
  subsets: ['latin'], 
  variable: '--font-syne',
   preload: true,
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${syne.variable} font-sans antialiased`}>
        <NuqsAdapter>
          <Providers>
            <Toaster position="top-center" richColors />
            {children}
          </Providers>
        </NuqsAdapter>
        <Analytics />
      </body>
    </html>
  );
}
