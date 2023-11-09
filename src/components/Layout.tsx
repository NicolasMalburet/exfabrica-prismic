import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ navigation, withHeaderDivider, children }: any) {
  return (
    <div className="text-slate-700">
      <Header withDivider={withHeaderDivider} navigation={navigation} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
