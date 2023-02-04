import "../styles/globals.css";
import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>🍅 PomoParty 🎉</title>
      </head>
      <body className="app-container">
        <Sidebar />
        <div>{children}</div>
      </body>
    </html>
  );
}
