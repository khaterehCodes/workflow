import { useState } from "react";
import H1 from "../../atoms/customH1/H1";
import TabBar from "../tabBar/TabBar";

function ControleTabs() {
    const [IsTab,setIsTab]=useState(1)
    return (
        <>
        <div className="w-full h-[100px] ">
            <H1 className={'text-[32px] font-bold'}>Contrôle</H1>
            <TabBar IsTab={IsTab} setIsTab={setIsTab}/>
        </div>
            {IsTab===1 && (<div>gggggggggggggg</div>)}
        </>
    );
}
export default ControleTabs;