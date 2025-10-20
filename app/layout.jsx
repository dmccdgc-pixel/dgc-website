export const metadata = {
  title: "Dubai Gold Coin (DGC)",
  description: "Official website for the Dubai Gold Coin (DGC) project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-yellow-400 font-sans">
        {children}
      </body>
    </html>
  );
}
