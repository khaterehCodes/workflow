import Header from "../ui/organisms/Header/Header";
import SideBar from "../ui/organisms/SideBar/SideBar";

function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <SideBar /> 
      <div className="flex-1 flex flex-col">
        <div className="h-[80px]">
          <Header /> 
        </div>
        <main className="min-h-[1120px] overflow-auto bg-[#F4F4F5]">
          {children} 
        </main>
      </div>
    </div>
  );
}

export default Layout;
