import Icons from "../../atoms/icons/Icons";
import Breadcrumbs from "../../molecules/Breadcrumbs/Breadcrumbs";
function Header() {
  return (
    <div className="bg-white h-[80px] flex items-center justify-between px-6">
      <div className="flex items-center">
        <Breadcrumbs />
      </div>

      <div className="flex items-center space-x-4">
        <Icons name="bell" />
      </div>
    </div>
  );
}

export default Header;
