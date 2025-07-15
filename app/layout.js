import FloatingActionButtons from "./components/FloatingActionButtons";
import Footer from "./components/Footer";
import FloatingNavbar from "./components/Navbar";
import "./globals.css";
import { Ephesis, Sono, Oswald, Berkshire_Swash } from 'next/font/google';

const ephesis = Ephesis({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ephesis',
});

const sono = Sono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sono',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
});

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-berkshire',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${ephesis.variable} ${sono.variable} ${oswald.variable} ${berkshire.variable}`}
        style={{
          fontFamily: 'var(--font-berkshire)',
          // letterSpacing: '0.05em',
        }}
      >
        <FloatingNavbar />
        {children}
        <FloatingActionButtons />
        <Footer />
      </body>
    </html>
  );
}
