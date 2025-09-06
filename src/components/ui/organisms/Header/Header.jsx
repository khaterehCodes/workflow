import usePathName from "../../../../core/hooks/UsePathName";
import H2 from "../../atoms/customH2/H2";
import Icons from "../../atoms/icons/Icons";

function Header() {
  const pageName = usePathName()
  return (
    <div className="bg-white h-[80px] flex items-center justify-between px-10">
      <div className="w-[200px] h-[70px] bg-green-200">
        <H2 className={'text-[#71717A]'}>{pageName.charAt(0).toUpperCase() + pageName.slice(1)}</H2>
      </div>
      <Icons name="bell" />
    </div>
  );
}

export default Header;
