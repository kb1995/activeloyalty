import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout({ settings, withHeaderDivider, withProfile, withSignUpForm, children }) {
  return (
    <div className="min-h-screen">
      <Header withProfile={withProfile} withDivider={withHeaderDivider} settings={settings} />
      <main>{children}</main>
      <Footer withSignUpForm={withSignUpForm} settings={settings} />
    </div>
  )
}
