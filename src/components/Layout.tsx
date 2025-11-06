import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20 md:pt-[92px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
