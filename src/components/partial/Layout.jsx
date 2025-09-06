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
    <div className="flex min-h-screen bg-[#F4F4F5]">
      <SideBar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
