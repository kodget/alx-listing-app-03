import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/interfaces";

const Layout: React.FC<LayoutProps> = ({
  children,
  query,
  setQuery,
  filtered,
}) => {
  return (
    <>
      <Header query={query} setQuery={setQuery} filtered={filtered} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
