import H2 from "../../atoms/customH2/H2";
import Icons from "../../atoms/icons/Icons";
import NewPassword from "../newPassword/NewPassword";

function ResetPassword() {
    return (
        <div className="w-full h-[95vh]  flex items-center justify-center">
            <div className="w-[550px] h-[380px] flex items-center justify-center gap-6 flex-col">
                <div className='w-[430px] h-[80px] flex items-center justify-center flex-col'>
                    <div className='w-[200px] h-[45px] flex items-center justify-between'>
                        <Icons name={'logo'} />
                        <Icons name={'logoTitle'} />
                    </div>
                    <H2 className={'text-[20px] font-medium'}>Merci d'entrer vos informations de connexion</H2>
                </div>
                <div className="w-full h-[300px]">
                <NewPassword />
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;