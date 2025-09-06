import Icons from "../../atoms/icons/Icons";
import H2 from "../../atoms/customH2/H2";
function ShowSignupWarning({ warning, setWarning }) {
    return (
        <>
            {warning && (<div className="w-[312px] h-[50px] bg-black relative top-[100px] rounded-[10px] flex items-center justify-around">
                <H2 className={'text-white'}>Veuillez remplir tout les champs</H2>
                <div onClick={() => setWarning(false)} className="cursor-pointer">
                    <Icons name={'closeRedIcon'} />
                </div>
            </div>)}
        </>
    );
}
export default ShowSignupWarning;