import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layouts/Header";
import { Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Muhammad Yousuf | Next.js Developer Portfolio",
  description: "Explore the professional portfolio of Muhammad Yousuf, an experienced Next.js developer specializing in building high-performance, scalable web applications. Discover projects, skills, and expertise in React, JavaScript, Tailwind CSS, and full-stack development.",
  keywords: "Muhammad Yousuf, Next.js developer, React developer, full-stack developer, web development, JavaScript expert, Tailwind CSS, portfolio, scalable applications, Next.js projects, front-end development, SEO-optimized web apps",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {

        }
        <Header />
        {children}
      </body>
    </html>
  );
}
