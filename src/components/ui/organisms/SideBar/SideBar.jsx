import ConfigurationSideBar from "../../molecules/ConfigurationSideBar/ConfigurationSideBar";
import ItemsSideBar from "../../molecules/ItemsSideBar/ItemsSideBar";
import SideBarProfile from "../../molecules/SideBarProfile/SideBarProfile";
import SideBarTitle from "../../molecules/SideBarTitle/SideBarTitle";

function SideBar() {
  return (
    <div className="w-[256px] min-h-screen bg-[#0B1750] flex flex-col">
      <SideBarTitle />
      <ConfigurationSideBar />
      <ItemsSideBar />
      <div className="mt-[480px] mb-4">
        <SideBarProfile />
      </div>
    </div>
  );
}

export default SideBar;
