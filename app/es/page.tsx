import type { Metadata } from "next";
import { PortfolioPage } from "../portfolio-page";

export const metadata: Metadata = {
  title: "Kevin Santana | Desarrollador Full Stack Júnior",
  description:
    "Portafolio profesional de Kevin Santana: proyectos, experiencia, formación y habilidades de desarrollo full stack.",
  alternates: {
    canonical: "/es",
    languages: {
      "pt-BR": "/",
      en: "/en",
      es: "/es",
    },
  },
};

export default function SpanishPortfolio() {
  return <PortfolioPage language="es" />;
}
