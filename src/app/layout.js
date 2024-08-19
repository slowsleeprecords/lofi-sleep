
import "./globals.css";

export const metadata = {
  title: "lofi sleep",
  description: "lofi sleep || relaxing lofi beats to help you repose",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
