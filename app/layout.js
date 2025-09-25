import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Operatives - All Your Jobs, One Smart App",
  description:
    "Streamline your job management with our intelligent platform. Book services, track progress, and stay updated with real-time analytics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ]`}
      >
        <div className="min-h-screen bg-[#FFFFFF"> {children}</div>
      </body>
    </html>
  );
}
