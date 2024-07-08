import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({
  settings,
  withHeaderDivider,
  withProfile,
  withSignUpForm,
  children,
}) {
  return (
    <div className="text-slate-700">
      <Header
        withProfile={withProfile}
        withDivider={withHeaderDivider}
        settings={settings}
      />
      <main>{children}</main>
      <Footer withSignUpForm={withSignUpForm} settings={settings} />
    </div>
  );
}
