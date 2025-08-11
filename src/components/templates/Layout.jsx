import { Outlet } from "react-router-dom";
import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";

const Layout = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
