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
      
      <div>
      <aside>{sidebar}</aside>
      <main>{children}</main>
      </div>
      {/* {modal} */}
    </>
  );
}
