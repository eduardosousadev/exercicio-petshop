import { Outlet } from "react-router-dom"
import { Header } from "../header/header"
import { Footer } from "../footer/footer"

export function Layout() {
  return (
    <>
      <Header />
      <main className="w-full min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}