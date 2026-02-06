import './globals.css';

export const metadata = {
  title: 'NCAS SMART DINE - College Canteen System',
  description: 'QR-Based College Canteen Pre-Order & Ticket Printing System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
