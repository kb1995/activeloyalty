import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout({ settings, children }) {
  return (
    <div className="min-h-screen">
      <Header settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
    </div>
  )
}
