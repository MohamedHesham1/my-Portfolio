import '@/public/styles/globals.css';
import { Source_Sans_3 } from 'next/font/google';

const sourceSans3 = Source_Sans_3({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Mohamed's Portfolio",
  description: 'Welcome to My Portfolio',
  icons: {
    icon: '/images/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${sourceSans3.className} text-primary bg-[#141416]`}>
        {children}
      </body>
    </html>
  );
}
