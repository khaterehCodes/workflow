import Icons from "../../atoms/icons/Icons";
import EmailForm from "../emailForm/EmailForm";

function ResetEmail() {
    return (
        <div className="w-full h-[95vh] flex items-center justify-center">
            <div className="w-[550px] h-[255px] flex items-center justify-around flex-col">
                <div className='w-[200px] h-[45px] flex items-center justify-between'>
                    <Icons name={'logo'} />
                    <Icons name={'logoTitle'} />
                </div>
                <EmailForm/>
            </div>
        </div>
    );
}

export default ResetEmail;