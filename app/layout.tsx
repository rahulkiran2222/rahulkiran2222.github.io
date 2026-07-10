import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk" 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains-mono" 
});

export const metadata: Metadata = {
  title: "Rahul Kiran | Research Lab",
  description: "AI Research in Foundation Models, AI Safety, and Responsible AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <div className="relative min-h-screen">
          {/* Subtle Background Glow */}
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_50%_0%,_#1e293b_0%,_#020617_100%)]" />
          {children}
        </div>
      </body>
    </html>
  );
}
