import "../styles/globals.scss";

import { ServerThemeProvider } from "next-themes";
import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider defaultTheme="light" attribute="data-theme">
      <html lang="en">
        <head>
          <title>FlowSpace</title>
        </head>
        <body className="app-container">
          <Sidebar />
          <div className="container-children">{children}</div>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
