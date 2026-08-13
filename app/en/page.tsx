import type { Metadata } from "next";
import { PortfolioPage } from "../portfolio-page";

export const metadata: Metadata = {
  title: "Kevin Santana | Full Stack Developer",
  description:
    "Kevin Santana's professional portfolio: projects, experience, education, and full stack development skills.",
  alternates: {
    canonical: "/en",
    languages: {
      "pt-BR": "/",
      en: "/en",
      es: "/es",
    },
  },
};

export default function EnglishPortfolio() {
  return <PortfolioPage language="en" />;
}
