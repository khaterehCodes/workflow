import Icons from "../../atoms/icons/Icons";

function SideBarTitle() {
    return (
        <div className="flex items-center w-[270px] justify-center h-[64px] bg-[#0E1B6B] space-x-2">
            <Icons name={'logo'} />
            <Icons name={'white-workflow'} />
        </div>
    );
}

export default SideBarTitle;
