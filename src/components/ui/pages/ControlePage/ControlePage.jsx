import { Outlet } from "react-router-dom";
import ControleTabsOrganisms from "../../organisms/controleTabsOrganisms/ControleTabsOrganisms";

function ControlePage(){
    return(
        <>
           <ControleTabsOrganisms/>
           <Outlet />
        </>
    )
}
export default ControlePage;