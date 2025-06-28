import './globals.css';
import Navbar from '../components/Navbar';
import Ui from "../components/ui/Ui"









export const metadata = {
 title: "Subhro Hazra | Front-End  Developer",
description: "Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className="bg-gray-800 mt-20 overflow-auto">
         <Ui/>
         <Navbar />
        <main className="p-6 " >{children}</main>
      </body>
    </html>
  );
}
