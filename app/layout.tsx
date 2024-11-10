import type {Metadata, Viewport} from "next";
import "./globals.css";
import {CSSProperties} from "react";

export const metadata: Metadata = {
  title: "travel app",
};

export const viewport:Viewport = {
    initialScale:1,
    width:'device-width',
  viewportFit:'cover',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const safeAreaStyle:CSSProperties = {
        'paddingTop':'env(safe-area-inset-top)',
    };
  return (
    <html lang="ja">
      <body style={safeAreaStyle}>
        {children}
      </body>
    </html>
  );
}
