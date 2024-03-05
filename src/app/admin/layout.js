export default function RootLayout({ children}) {
  return (
    <html lang={'en'}>
      <body className={inter.className}>
        {" "}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
