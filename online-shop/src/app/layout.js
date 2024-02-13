
import "./globals.css";



export const metadata = {
  title: "online shop",
  description: "Created by Atieh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
