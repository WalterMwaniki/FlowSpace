import "../styles/globals.scss";
import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>FlowSpace</title>
      </head>
      <body className="app-container">
        <Sidebar />
        <div className="container-children">{children}</div>
      </body>
    </html>
  );
}
