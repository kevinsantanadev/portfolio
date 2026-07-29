import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kevinsantanadev.com.br"),
  title: "Kevin Santana | Desenvolvedor de Software Júnior",
  description:
    "Portfólio profissional de Kevin Santana, desenvolvedor de software júnior com experiência em desenvolvimento web, back-end e banco de dados.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kevin Santana | Desenvolvedor de Software Júnior",
    description:
      "Projetos, experiências e estudos de Kevin Santana em desenvolvimento de software.",
    url: "/",
    siteName: "Kevin Santana Dev",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
