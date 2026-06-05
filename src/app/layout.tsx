import type { Metadata } from "next";
import { Montserrat, Roboto_Slab } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AIAgentBubble } from "@/components/AIAgentBubble";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "PT ERA BYTE SOLUTION (R'abyte)",
  description: "Teknologi Daya Guna - Solusi Inovatif & Modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${robotoSlab.variable} ${montserrat.className} font-sans`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <AIAgentBubble />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}