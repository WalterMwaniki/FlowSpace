// import { ThemeProvider } from "next-themes";

import "../styles/globals.scss";
import "../styles/theme/_light-color.css";

import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>FlowSpace</title>
      </head>
      <body className="app-container">
        {/* <ThemeProvider defaultTheme="light" attribute="class"> */}
          <Sidebar />
          <div className="container-children">{children}</div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
