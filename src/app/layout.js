// TODO: Refactor this, Fonts shouldt be added in this file
/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import ChakraThemeProvider from "@/contexts/ChakraThemeProvider";
import "@/styles/globals.css";
import HomeLayout from "@/app/layout/HomeLayout";

export const metadata = {
  title: "Servi",
  description: "Landing Home",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <title>Servi</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          display="optional"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body>
        <iframe
          height="0"
          src="https://www.googletagmanager.com/ns.html?id=GTM-M82MCJL7"
          width="0"
        />
        <ChakraThemeProvider>
        <HomeLayout>{children}</HomeLayout>;
        </ChakraThemeProvider>
      </body>
    </html>
  );
}