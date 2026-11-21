import type { StaticImageData } from "next/image";
import hero from "../../public/fotos/hero.jpeg";
import larissaPremio from "../../public/fotos/larissa-premio.jpeg";
import foto1 from "../../public/fotos/foto1.jpeg";
import foto2 from "../../public/fotos/foto2.jpeg";
import foto3 from "../../public/fotos/foto3.jpeg";
import foto4 from "../../public/fotos/foto4.jpeg";
import foto5 from "../../public/fotos/foto5.jpeg";
import foto6 from "../../public/fotos/foto6.jpeg";
import foto7 from "../../public/fotos/foto7.jpeg";
import foto8 from "../../public/fotos/foto8.jpeg";
import foto9 from "../../public/fotos/foto9.jpeg";
import foto10 from "../../public/fotos/foto10.jpeg";
import foto11 from "../../public/fotos/foto11.jpeg";
import foto12 from "../../public/fotos/foto12.jpeg";

export type Photo = { src: StaticImageData; alt: string; caption: string };

/** Fotos reais com alt otimizado para SEO local. Fonte única para todas as páginas. */
export const PHOTOS = {
  hero: { src: hero, alt: "Noivas com penteado preso e acessório, produção de penteado e maquiagem a domicílio em São Paulo por Larissa Mendes", caption: "Noivas" },
  larissaPremio: { src: larissaPremio, alt: "Hairstylist Larissa Mendes segurando o troféu do Beleza Experience 2024 do Grupo O Boticário, categoria Melhor Penteado pelo voto popular", caption: "Beleza Experience 2024" },
  foto1: { src: foto1, alt: "Penteado preso texturizado com mechas onduladas soltas para madrinha de casamento em São Paulo", caption: "Preso texturizado" },
  foto2: { src: foto2, alt: "Rabo de cavalo alto polido feito a domicílio em suíte de hotel em São Paulo", caption: "Rabo alto polido" },
  foto3: { src: foto3, alt: "Convidada com penteado solto e vestido bordado, produção social a domicílio em São Paulo", caption: "Produção social" },
  foto4: { src: foto4, alt: "Rabo de cavalo alto com ondas modeladas para festa, penteado a domicílio em SP", caption: "Rabo alto com ondas" },
  foto5: { src: foto5, alt: "Penteado preso para cabelo cacheado com volume natural, atendimento a domicílio em São Paulo", caption: "Preso cacheado" },
  foto6: { src: foto6, alt: "Coque alto com volume e mechas onduladas para madrinhas e mães, penteado a domicílio em São Paulo", caption: "Coque alto com volume" },
  foto7: { src: foto7, alt: "Coque baixo com ondas frontais para madrinha, produção a domicílio em São Paulo", caption: "Coque baixo com ondas" },
  foto8: { src: foto8, alt: "Rabo baixo com ondas marcadas, penteado feito a domicílio em São Paulo", caption: "Rabo baixo ondulado" },
  foto9: { src: foto9, alt: "Formanda com ondas soltas e risca lateral, penteado social a domicílio em São Paulo", caption: "Ondas soltas" },
  foto10: { src: foto10, alt: "Coque torcido lateral com mechas iluminadas, penteado para casamento em São Paulo", caption: "Coque torcido" },
  foto11: { src: foto11, alt: "Coque baixo polido e elegante para convidada de casamento, penteado a domicílio em SP", caption: "Coque polido" },
  foto12: { src: foto12, alt: "Noiva com coque baixo polido durante o making of no hotel em São Paulo", caption: "Making of da noiva" },
} satisfies Record<string, Photo>;
