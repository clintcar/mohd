import Image from "next/image";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 flex flex-col min-h-screen">
        <header className="w-full flex justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={328}
            height={141}
            className="w-auto h-auto origin-center scale-50 mx-auto block"
            priority
          />
        </header>
        {children}
      </body>
    </html>
  );
}
