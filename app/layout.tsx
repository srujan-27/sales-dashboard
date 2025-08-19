import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Dashboard",
  description: "Retail sales dashboard using Next.js, Tailwind, Recharts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-xl font-bold">Sales Dashboard</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="border-t bg-white text-center text-sm text-gray-500 py-4">
          © {new Date().getFullYear()} Sales Dashboard
        </footer>
      </body>
    </html>
  );
}
