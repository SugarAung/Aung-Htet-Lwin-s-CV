import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aung Htet Lwin — DevOps & Cloud Engineer",
  description:
    "Portfolio of Aung Htet Lwin, a CNCF Kubestronaut and DevOps/Cloud Engineer specialising in AWS, Kubernetes, Terraform, and cloud-native infrastructure.",
  openGraph: {
    title: "Aung Htet Lwin — DevOps & Cloud Engineer",
    description:
      "CNCF Kubestronaut | AWS | Kubernetes | Terraform | Cloud-native infrastructure",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
