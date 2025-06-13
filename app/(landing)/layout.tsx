export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-b from-[#222831] to-[#31363F] bg-cover">
      {children}
    </div>
  );
}
