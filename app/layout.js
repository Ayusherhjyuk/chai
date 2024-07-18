
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cup-of-Chai",
  description: "this website is a crowdfunding platform",
};

export default  function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={inter.className}>
        
        <AuthProvider>

         <Navbar/>
        <div className="min-h-screen text-black ] bg-gradient-to-r  from-slate-100  to-slate-400  bg-cover">
          
          {children}

        </div>
        
        <Footer/>
       </AuthProvider>
        </body>
    </html>
  );
}
