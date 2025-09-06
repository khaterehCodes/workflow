import { useLocation } from "react-router-dom";
import Header from "../ui/organisms/Header/Header";
import SideBar from "../ui/organisms/SideBar/SideBar";

function Layout({ children }) {
  const location = useLocation();
  const authPages = ['/login', '/signup', '/resetPassword', '/resetEmail', '/confirmEmail'];

  if (authPages.includes(location.pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1 min-h-screen bg-[#F4F4F5] overflow-y-auto">
        <SideBar />

        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
