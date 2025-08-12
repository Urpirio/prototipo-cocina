import React from "react";
import Global_Header from "../../Components/Componentes_Globales/Global_Header";
import Global_Footer from "../../Components/Componentes_Globales/Global_Footer";
import "@/../style/Global.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <Global_Header />
        {children}
        <Global_Footer />
      </body>
    </html>
  );
}
