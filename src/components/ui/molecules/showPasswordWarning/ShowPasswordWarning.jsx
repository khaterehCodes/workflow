import H2 from "../../atoms/customH2/H2";
import Icons from "../../atoms/icons/Icons";

function ShowPasswordWarning({ warning, setWarning }) {
    return (
        <>
            {warning && (<div className="w-[270px] h-[40px] bg-black relative top-[170px] left-[120px] rounded-[10px] flex items-center justify-around">
                <H2 className={'text-white'}>Merci de remplir les champs</H2>
                <div onClick={() => setWarning(false)} className="cursor-pointer">
                    <Icons name={'closeRedIcon'} />
                </div>
            </div>)}
        </>
    );
}
export default ShowPasswordWarning;