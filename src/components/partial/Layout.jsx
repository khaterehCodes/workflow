import { useLocation } from "react-router-dom";
import Header from "../ui/organisms/Header/Header";
import SideBar from "../ui/organisms/SideBar/SideBar";

function Layout({ children }) {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/resetPassword' || location.pathname === '/resetEmail' || location.pathname==='/confirmEmail' ? (<>
        {children}
      </>) : (
        <div className="flex h-screen">
          <SideBar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 overflow-auto bg-[#F4F4F5]">
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
