import CountryList from "../../molecules/CountryList/CountryList";
import H1 from "../../atoms/customH1/H1";
import CityList from "../../molecules/CityList/CityList";
import EvaluationMethodList from "../../molecules/EvaluationMethodList/EvaluationMethodList";
function BaseOrganisms(){
    return(
        <>
        <H1 className={"text-[#000000] mb-6 ml-5 font-semibold text-[32px]"}>Base</H1>
        <CountryList/>
        <div className="flex">
        <CityList/>
        <EvaluationMethodList/>
        </div>
      
        </>
    )
}
export default BaseOrganisms;