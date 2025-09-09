import CountryList from "../../molecules/CountryList/CountryList";
import H1 from "../../atoms/customH1/H1";
function BaseOrganisms(){
    return(
        <>
        <H1 className={"text-[#000000] mb-6 ml-5 font-semibold text-[32px]"}>Base</H1>
        <CountryList/>
        </>
    )
}
export default BaseOrganisms;