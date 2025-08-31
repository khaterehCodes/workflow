import { Link } from 'react-router-dom';
import H2 from '../../atoms/customH2/H2';
import P from '../../atoms/customP/P';
import Icons from '../../atoms/icons/Icons';
import LoginForm from '../loginForm/LoginForm';
function Login() {
    return (
        <div className='w-[550px] h-[410px] flex items-center justify-center flex-col gap-6'>
            <div className='w-[430px] h-[80px] flex items-center justify-center flex-col'>
                <div className='w-[200px] h-[45px] flex items-center justify-between'>
                    <Icons name={'logo'} />
                    <Icons name={'logoTitle'} />
                </div>
                <H2 className={'text-[20px] font-medium'}>Merci d'entrer vos informations de connexion</H2>
            </div>
            <LoginForm />
        </div>
    );
}

export default Login;