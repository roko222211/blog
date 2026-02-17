import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "Blog | Tehnologija & Financije",
    template: "%s | Blog"
  },
  description: "Blog o tehnologiji, investiranju i razvoju softvera. Dubinske analize, tutoriali i projekti.",
  keywords: ["tehnologija", "financije", "web development", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://yourdomain.com",
    title: "Blog | Tehnologija & Financije",
    description: "Blog o tehnologiji, investiranju i razvoju softvera.",
    siteName: "Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Tehnologija & Financije",
    description: "Blog o tehnologiji, investiranju i razvoju softvera.",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased selection:bg-primary/10">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="relative flex min-h-screen flex-col">
            <NavBar />
            <main className="flex-1 w-full" id="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
