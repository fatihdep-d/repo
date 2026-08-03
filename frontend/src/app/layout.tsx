import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#080b14] text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}