import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Next.js Website",
  description: "Home, About, Contact pages using Next.js 15 + Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="p-4 bg-blue-600 text-white flex justify-between">
          <h1 className="text-xl font-bold">My Website</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 bg-blue-600 text-white text-center">
          © 2025 My Website. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
