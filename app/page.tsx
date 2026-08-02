import type { Metadata } from "next";
import { PortfolioPage } from "./portfolio-page";

export const metadata: Metadata = {
  title: "Kevin Santana | Desenvolvedor Full Stack Júnior",
  description:
    "Portfólio profissional de Kevin Santana: projetos, experiência, formação e competências em desenvolvimento full stack.",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      en: "/en",
      es: "/es",
    },
  },
};

export default function Home() {
  return <PortfolioPage language="pt" />;
}
