import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

// const montserrat = localFont({
//   src: "./fonts/Montserrat-VariableFont_wght.ttf",
//   variable: "--font-montserrat",
//   weight: "100 900",
// });

export const metadata = {
  title: "Ashik Ahmed - Web Developer from Bangladesh",
  description: "Deliver web solutions for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased bg-gray-200`}>
        <Header />
        {children}
      </body>
    </html>
  );
}