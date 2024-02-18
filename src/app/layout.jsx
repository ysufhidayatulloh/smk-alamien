import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat_init = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "SMK Al - Amien Kota Kediri",
  description:
    "This school website was built and deployed by smkalaimen.dev to find out information about SMK AL AMIEN school - Jl Ngasinan Raya No. 18 Rejomulyo Kota Kediri",
  icons: {
    icon: ["./images/favicon.ico?v=4"],
    apple: ["./images/apple-touch-icon?v=4"],
    shortcut: ["./images/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins_init.variable} ${montserrat_init.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
