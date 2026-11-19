import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

const title = `${profile.name} | Software Developer`;
const description =
  "Software Developer specializing in Machine Learning, Full-Stack Development, and Open Source.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description:
    "Software Developer specializing in Machine Learning, Full-Stack Development, and Open Source. Experience with React, Next.js, Python, and ML/NLP systems.",
  keywords: ["Software Developer", "Machine Learning Engineer", "Full Stack Developer", "React", "Next.js", "Python"],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
