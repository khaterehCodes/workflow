import ConfigurationSideBar from "../../molecules/ConfigurationSideBar/ConfigurationSideBar";
import ItemsSideBar from "../../molecules/ItemsSideBar/ItemsSideBar";
import SideBarTitle from "../../molecules/SideBarTitle/SideBarTitle";

function SideBar() {
  return (
    <div className="w-[256px] h-[928px] bg-[#0B1750] flex flex-col">
      <SideBarTitle />
      <ConfigurationSideBar/>
      <ItemsSideBar/>
    </div>
  );
}

export default SideBar;
