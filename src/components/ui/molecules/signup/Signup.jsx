import Icons from "../../atoms/icons/Icons";
import H2 from "../../atoms/customH2/H2";
import SignupForm from "../signupForm/SignupForm";
function Signup() {
    return (
        <div className="w-[530px] h-[593px] flex flex-col items-center justify-center gap-6">
            <div className='w-[430px] h-[80px] flex items-center justify-center flex-col'>
                <div className='w-[200px] h-[45px] flex items-center justify-between'>
                    <Icons name={'logo'} />
                    <Icons name={'logoTitle'} />
                </div>
                <H2 className={'text-[20px] font-medium'}>Merci d'entrer vos informations de connexion</H2>
            </div>
            <SignupForm/>
        </div>
    );
}

export default Signup;