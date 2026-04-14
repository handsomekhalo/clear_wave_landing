import "./globals.css";

export const metadata = {
  title: "Clear Wave",
  description: "Landing page for Clear Wave",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}