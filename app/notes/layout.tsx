export default function FiltersLayout({
  children,
  sidebar,
  //   modal,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
  //   modal: React.ReactNode;
}>) {
  return (
    <>
      <aside>{sidebar}</aside>
      <main>{children}</main>
      {/* {modal} */}
    </>
  );
}
