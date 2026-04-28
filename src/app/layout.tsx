import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UTCloud — 클라우드 네이티브 시대를 선도하다',
  description: 'UTCloud는 Cloud Native 기술 기반의 인프라 혁신을 선도하는 IT 전문 기업입니다.',
  openGraph: {
    type: 'website',
    url: 'https://utcloud.io',
    siteName: '유티클라우드',
    title: '유티클라우드',
    description: 'UTCloud는 Cloud Native 기술 기반의 인프라 혁신을 선도하는 IT 전문 기업입니다.',
    images: [{ url: 'https://utcloud.io/images/thumb.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
