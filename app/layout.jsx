export const metadata = {
  title: "Dubai Gold Coin (DGC)",
  description: "Official website for the Dubai Gold Coin (DGC) project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "black",
          color: "gold",
          fontFamily: "sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
