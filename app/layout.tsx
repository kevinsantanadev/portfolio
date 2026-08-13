import type { Metadata, Viewport } from "next";
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
  title: "Kevin Santana | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Kevin Santana, Desenvolvedor Full Stack com experiência em desenvolvimento web, back-end e banco de dados.",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      en: "/en",
      es: "/es",
    },
  },
  openGraph: {
    title: "Kevin Santana | Desenvolvedor Full Stack",
    description:
      "Projetos, experiências e estudos de Kevin Santana em desenvolvimento de software.",
    url: "/",
    siteName: "Kevin Santana Dev",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Santana | Desenvolvedor Full Stack",
    description: "Projetos full stack, experiências e estudos em desenvolvimento de software.",
  },
  authors: [{ name: "Kevin Santana", url: "https://kevinsantanadev.com.br" }],
  creator: "Kevin Santana",
  keywords: ["Kevin Santana", "Desenvolvedor Full Stack", "Next.js", "TypeScript", "PostgreSQL", "Portfólio"],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070914" },
    { media: "(prefers-color-scheme: light)", color: "#eef4fb" },
  ],
};

const themeScript = `(function(){try{var saved=localStorage.getItem('kevin-portfolio-theme');var theme=saved==='light'||saved==='dark'?saved:(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch(e){document.documentElement.dataset.theme='dark'}})();`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kevin Santana dos Reis",
  url: "https://kevinsantanadev.com.br",
  jobTitle: "Desenvolvedor Full Stack",
  sameAs: [
    "https://github.com/kevinsantanadev",
    "https://www.linkedin.com/in/kevinsantanadosreis/",
  ],
  knowsAbout: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "APIs REST", "Acessibilidade Web"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
