import { FiChevronUp } from "react-icons/fi";
import Icons from "../../atoms/icons/Icons";
import P from "../../atoms/customP/P";
import { menuItems } from "../../../../core/array/Array";
function ItemsSideBar() {
  return (
    <div className="flex flex-col  w-[216px] space-y-1">
      {menuItems.map((item, index) => (
        <div key={index}
         className="flex items-center justify-between px-7 h-[48px] cursor-pointer">
          <div className="flex items-center space-x-2">
            <Icons name={item.icon} className="text-gray-400 " />
            <P className="font-normal  text-[16px] text-gray-400">{item.label}</P>
          </div>
          <FiChevronUp size={29} className="text-gray-400 -mr-11" />
        </div>
      ))}
    </div>
  );
}

export default ItemsSideBar;
