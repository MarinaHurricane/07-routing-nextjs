export default function FiltersLayout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <aside>{sidebar}</aside>
        <main>{children}</main>
      </div>
    </>
  );
}
