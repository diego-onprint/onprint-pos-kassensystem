import SideBar from "@/app/pos/_components/side-bar/SideBar"
import Cart from "@/app/pos/_components/cart/Cart"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    <section className="dont-print relative flex w-full h-screen overflow-hidden bg-white z-50">
      <SideBar />
      <main className="@container/main flex-1 py-6 px-4 bg-indigo-50/50 overflow-y-auto">
        {children}
      </main>
      <Cart />
    </section>
  </>

}