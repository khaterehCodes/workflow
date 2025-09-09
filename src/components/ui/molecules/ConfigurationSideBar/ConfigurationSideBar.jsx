import { useState } from "react";
import { FiSettings, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import P from "../../atoms/customP/P";
import Span from "../../atoms/customSpan/Span";
import { items } from "../../../../core/array/Array";
function ConfigurationSideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="mt-7 w-[216px]">
      <div
        className="flex items-center justify-between px-2 h-[48px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <FiSettings size={20} className={isOpen ? "text-white" : "text-gray-400"} />
          <P className={`text-[16px] ${isOpen ? "font-medium text-white" : "font-normal text-gray-400"}`}>
            Configuration
          </P>
        </div>
        <div className="ml-12">
          {isOpen ? (
            <FiChevronDown size={29} className="text-white" />
          ) : (
            <FiChevronUp size={29} className="text-gray-400 ml-[0.75px]" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col mt-2 space-y-1">
          {items.map((item, index) => {
            let isActive = location.pathname === item.route;
            if (item.route === "/" && location.pathname === "/edituser") {
              isActive = true;
            }
            return (
              <Link key={index} to={item.route} className="no-underline">
                <div
                  className={`cursor-pointer px-3 py-2 rounded-[10px] transition-colors 
                  ${isActive ? "ml-7 w-[200px] bg-[#4256D0]" : "ml-7 w-[200px] hover:bg-white/5"}`}
                >
                  <Span className="font-medium ml-5 text-[16px] text-white">{item.name}</Span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ConfigurationSideBar;
