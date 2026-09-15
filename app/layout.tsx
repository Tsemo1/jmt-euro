import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import {ClerkProvider} from "@clerk/nextjs"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    template :"%s JMT-EURO online store",
    default: "JMT-EURO online store",
  },
  description: "JMT-EURO online store, your one stop shop for all your needs",
};

export default function RootLayout({ children }: Readonly <{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
     <html
      lang="en" className={cn("font-sans", geist.variable)}
    >
      <body className="font-poppins antialiased">           
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1"> {children}</main>
          <Footer />
        </div>
      </body>
    </html>
   </ClerkProvider>
  );
}
