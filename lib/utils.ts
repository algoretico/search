// /lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Globe, Book, YoutubeIcon, Pen, Mountain } from 'lucide-react'
import { Brain, Code, XLogo } from '@phosphor-icons/react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type SearchGroupId = 'web' | 'academic'  | 'youtube' | 'x' | 'analysis' | 'fun' | 'extreme' ;

export const searchGroups = [
  {
    id: 'web' as const,
    name: 'Web',
    description: 'Cerca qualcosa su internet',
    icon: Globe,
  },
  {
    id: 'x' as const,
    name: 'X',
    description: 'Cerca post e contenuti su X',
    icon: XLogo,
  },
//  {
//    id: 'analysis' as const,
//    name: 'Analysis',
//    description: 'Codice, borsa e valuta',
//    icon: Code,
//  },
  {
    id: 'fun' as const,
    name: 'Divertimento',
    description: 'Chatta con l\'AI',
    icon: Pen,
  },
  {
    id: 'academic' as const,
    name: 'Accademico',
    description: 'Cerca articoli accademici',
    icon: Book,
  },
  {
    id: 'youtube' as const,
    name: 'YouTube',
    description: 'Cerca video su YouTube in tempo reale',
    icon: YoutubeIcon,
  },
  {
    id: 'extreme' as const,
    name: 'Estremo',
    description: 'Ricerca approfondita con più fonti e analisi avanzata',
    icon: Mountain,
  },
] as const;

export type SearchGroup = typeof searchGroups[number];
