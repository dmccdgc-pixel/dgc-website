export const metadata = {
  title: "Dubai Gold Coin (DGC)",
  description:
    "A gold-backed digital asset built on trust, luxury, and innovation.",
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
