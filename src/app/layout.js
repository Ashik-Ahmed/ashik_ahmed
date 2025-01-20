import "./globals.css";
import Header from "./components/Header/Header";

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
      <body className={` antialiased bg-[#ECF0F3]`}>
        <Header />
        <div className=" px-4 max-w-6xl mx-auto mt-20 mb-12">
          {children}
        </div>
      </body>
    </html>
  );
}