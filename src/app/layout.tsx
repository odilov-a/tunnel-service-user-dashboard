import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyTunnel CLI",
  description:
    "MyTunnel — bu lokal portni public URL orqali ochish imkonini beruvchi tunneling CLI. Bu sizning lokal serveringizni tashqi dunyoga xavfsiz tarzda ulash imkonini beradi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
