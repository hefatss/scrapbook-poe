export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-b from-[#181C14] to-[#3C3D37] bg-cover">
      {children}
    </div>
  );
}
