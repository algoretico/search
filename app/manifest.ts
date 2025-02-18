import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Algoretico - AI Search Engine",
    short_name: "Algoretico Search",
    description: "Motore di ricerca potenziato dall'intelligenza artificiale che ti consente di trovare informazioni online sfruttando modelli avanzati come GPT-4, Claude e Grok.",
    start_url: "/",
    display: "standalone",
    categories: ["ricerca", "ai", "motore di ricerca"],
    theme_color: "#171717",
    background_color: "#171717",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    screenshots: [
      {
        src: "/opengraph-image.png",
        type: "image/png",
        sizes: "1200x630",
      }
    ]
  }
}