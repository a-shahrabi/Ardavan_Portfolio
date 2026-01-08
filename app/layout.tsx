import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Ardavan Shahrabi | Software Developer",
  description: "Software Developer specializing in Machine Learning, Full-Stack Development, and Open Source. Experience with React, Next.js, Python, and ML/NLP systems.",
  keywords: ["Software Developer", "Machine Learning Engineer", "Full Stack Developer", "React", "Next.js", "Python"],
  authors: [{ name: "Ardavan Shahrabi" }],
  openGraph: {
    title: "Ardavan Shahrabi | Software Developer",
    description: "Software Developer specializing in Machine Learning, Full-Stack Development, and Open Source.",
    url: "https://ardavan-portfolio.vercel.app",
    siteName: "Ardavan Shahrabi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardavan Shahrabi | Software Developer",
    description: "Software Developer specializing in Machine Learning, Full-Stack Development, and Open Source.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
