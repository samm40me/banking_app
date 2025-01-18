import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Sam', lastName: 'Oja' };

  return (
      <main className="flex h-screen w-full front-inter">
      <SideBar user={loggedIn} />
          {children}
    </main>
  );
}
