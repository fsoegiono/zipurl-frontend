import type { Metadata } from "next";
import '@/styles/globals.scss';
import { TITLE, METADATA_CONSTANT } from '@/constants';

export const metadata: Metadata = {
  title: TITLE,
  description: METADATA_CONSTANT.description,
  icons: '/icon.png',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;