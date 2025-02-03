import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
       {/* Agregar el enlace a Google Fonts */}
       <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
