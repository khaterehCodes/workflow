import { useEffect } from "react";
import H2 from "../../atoms/customH2/H2";
import { useNavigate } from "react-router-dom";

function EmailConfirm() {
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/resetPassword')
        },2000)
    },[])
    return (
        <div className="w-full h-[95vh] flex items-center justify-center">
            <div className="w-[750px] h-[89px] border-l-[10px] border-[#16A34A]">
            <H2 className={'text-[29px] p-2'}>
                Mail de vérification d'adresse e-mail, contenant le lien de modification du mot de passe.
            </H2>
            </div>
        </div>
    );
}

export default EmailConfirm;