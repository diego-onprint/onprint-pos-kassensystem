// import { Link, useNavigate } from "react-router-dom"
// import { useLocation } from "react-router-dom"
// import { setLocalStorageItem } from "../../../utils/local_storage/localStorage"
// import { useSelector } from "react-redux"
// import type { RootState } from "../../../store/store"
import Link from "next/link"

const SideBar = () => {

    const pathname = "/pos/products"
//   const navigate = useNavigate()
//   const { pathname } = useLocation()
//   const { status: socketConnected } = useSelector<RootState, { status: boolean }>(state => state.socket)

  const handleLogout = () => {
    // setLocalStorageItem("user", "")
    // navigate("/login")
  }

  return (
    <header className="flex flex-col gap-8 px-1 py-2 shadow-lg">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          {/* <span className={`absolute -right-1 top-1 w-2 h-2 ring-2 ring-white rounded-full ${socketConnected ? "bg-green-400" : "bg-red-500"}`}></span> */}
          <picture className="w-8 h-8 grid place-items-center">
            <source srcSet="/assets/logo.webp" type="image/webp" />
            {/* <img src="/assets/logo.jpg" /> */}
          </picture>
        </div>
        <div className="relative font-bold">POS</div>
      </div>
      <nav>
        <ul className="flex flex-col gap-4">
          <li className="text-[10px]">
            <Link
              href="/pos/categories"
              className={`flex flex-col items-center p-1 hover:bg-zinc-100 rounded-md ${pathname === "/products" && "bg-zinc-100"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
              </svg>
              Produkte
            </Link>
          </li>
          <li className="relative text-[10px]">
            <Link
              href="/orders"
              className={`flex flex-col items-center p-1 hover:bg-zinc-100 rounded-md ${pathname === "/orders" && "bg-zinc-100"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
              </svg>
              Bestellungen
            </Link>
          </li>
          <li className="text-[10px]">
            <Link
              href="/reports"
              className={`flex flex-col items-center p-1 hover:bg-zinc-100 rounded-md ${pathname === "/reports" && "bg-zinc-100"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
              </svg>
              Rapport
            </Link>
          </li>
          {/* <li className="relative text-[10px] flex justify-center">
            <button onClick={handleLogout} className="flex flex-col items-center p-1 hover:bg-zinc-100 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>
              Abmelden
            </button>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default SideBar