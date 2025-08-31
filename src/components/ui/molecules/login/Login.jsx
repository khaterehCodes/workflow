import { Link } from 'react-router-dom';
import H2 from '../../atoms/customH2/H2';
import P from '../../atoms/customP/P';
import Icons from '../../atoms/icons/Icons';
import LoginForm from '../loginForm/LoginForm';
function Login() {
    return (
        <div className=''>
            <div className=''>
                <div className=''>
                    <Icons name={'logo'} />
                    <Icons name={'logoTitle'} />
                </div>
                <H2>Merci d'entrer vos informations de connexion</H2>
            </div>
            <LoginForm />
            <div>
                <P>Vous n’avez pas de compte ?</P>
                <Link to=''>
                    <P> Créer un compte</P>
                </Link>
            </div>
        </div>
    );
}

export default Login;