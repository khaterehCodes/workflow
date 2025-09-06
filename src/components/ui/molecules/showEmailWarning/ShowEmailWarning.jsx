import H2 from "../../atoms/customH2/H2";
import Icons from "../../atoms/icons/Icons";
function ShowEmailWarning({ warning, setWarning, emailValidation }) {
    return (
        <>
            {warning && (<div className="w-[250px] h-[50px] bg-black relative top-[250px] left-[150px] rounded-[10px] flex items-center justify-around">
                <H2 className={'text-white'}>
                    {emailValidation ? 'Mail de réinitialisation envoyé !' :
                        'Adresse email inconnue'
                    }</H2>
                <div onClick={() => setWarning(false)} className="cursor-pointer">
                    <Icons name={'closeRedIcon'} />
                </div>
            </div>)}
        </>
    );
}
export default ShowEmailWarning;