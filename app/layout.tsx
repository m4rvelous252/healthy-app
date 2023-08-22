import Header from '@/components/layout/Header';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer';
import clsx from 'clsx';
import ScrollToTopBtn from '@/components/common/ScrollToTopBtn';

const notoSansJP = Noto_Sans_JP({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Healthy App',
  description: 'Built by Truong Nghia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={clsx(
          notoSansJP.className,
          'flex min-h-screen flex-col bg-light text-dark-600'
        )}
      >
        <Header />
        {children}
        <ScrollToTopBtn />
        <Footer />
      </body>
    </html>
  );
}
