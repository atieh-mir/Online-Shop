
import "./globals.css";
import { ReduxProvider } from "./cart/redux/provider";


export const metadata = {
  title: "online shop",
  description: "Created by Atieh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ReduxProvider>{children} </ReduxProvider></body>
    </html>
  );
}
