import Icons from "../../atoms/icons/Icons";

function SideBarTitle() {
    return (
        <div className="flex items-center justify-center h-[64px] bg-[#0E1B6B] space-x-2">
            <Icons name={'logo'} />
            <Icons name={'white-workflow'} />
        </div>
    );
}

export default SideBarTitle;
