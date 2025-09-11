import ConfigurationSideBar from "../../molecules/ConfigurationSideBar/ConfigurationSideBar";
import ItemsSideBar from "../../molecules/ItemsSideBar/ItemsSideBar";
import SideBarProfile from "../../molecules/SideBarProfile/SideBarProfile";
import SideBarTitle from "../../molecules/SideBarTitle/SideBarTitle";

function SideBar() {
  return (
    <div className="bg-[#0B1750] flex flex-col min-h-screen w-64 max-w-[256px]">
      <SideBarTitle />

      <ConfigurationSideBar />
      <ItemsSideBar />

      <div className="mt-auto mb-4 px-4">
        <SideBarProfile />
      </div>
    </div>
  );
}

export default SideBar;
