import Image from "../../atoms/customImage/Image";
import P from "../../atoms/customP/P";

function SideBarProfile() {
  return (
    <div className="flex items-center mt-[] space-x-4 px-4 py-3">
      <Image src="/assets/tim.jpg" className="w-12 h-12 rounded-full object-cover"/>
      <div className="flex flex-col">
        <P className="font-medium text-white text-[16px]">Tim Cook</P>
        <P className="text-white text-[16px]">timcook@force.com</P>
      </div>
    </div>
  );
}

export default SideBarProfile;
