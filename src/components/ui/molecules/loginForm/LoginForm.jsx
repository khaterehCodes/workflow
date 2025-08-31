import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import Label from "../../atoms/customLabel/Label";
import Input from "../../atoms/customInput/Input";
import Button from "../../atoms/customButton/Button";
import P from "../../atoms/customP/P";
import Icons from "../../atoms/icons/Icons";
import { Link } from "react-router-dom";
const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string(),
})
function LoginForm() {
    const navigate = useNavigate()
    return (
        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    console.log(values);
                    navigate('/')
                }}
            >
                {({ isSubmitting, errors }) => (
                    <Form>
                        <div className="w-[550px] h-[160px] flex flex-col items-center justify-center gap-1">
                            <Label htmlFor={'email'} className={`flex items-start w-[530px] font-medium
                                ${errors.email ? 'text-[#991B1B]' : 'text-black'}
                                `}>Email</Label>
                            <Field as={Input} type='email' name='email' className={`w-[530px] h-[50px] rounded-[12px] outline-none p-4 border-[1px] border-[#E4E4E7] hover:border-[1px] hover:border-[#5C73DB]
                                ${errors.email ? 'border-[#F87171] placeholder:text-[#F87171]' : 'border-[#E4E4E7]'}
                                `} placeholder={`${errors.email ? 'Adresse email ou numéro de téléphone' : "johndoe@gmail.com"}`} />
                            <Label htmlFor={'password'} className={`flex items-start w-[530px] font-medium
                                ${errors.email ? 'text-[#991B1B]' : 'text-black'}
                                `}>Mot de passe</Label>
                            <Field as={Input} type='password' name='password' className={`w-[530px] h-[50px] rounded-[12px] outline-none p-4 border-[1px] border-[#E4E4E7] hover:border-[1px] hover:border-[#5C73DB]
                                ${errors.email ? "border-[#F87171] placeholder:text-[#F87171]" : "border-[#E4E4E7]"}
                                `}
                                placeholder='********************' />
                        </div>
                        <div className="w-[550px] h-[130px] flex flex-col items-center justify-center gap-2">
                            <P className={'font-medium'}>Mot de passe oublié ?</P>
                            <Button type='submit' disabled={isSubmitting} className={'w-[530px] h-[50px] bg-[#4763E4] rounded-[12px] flex items-center justify-center gap-2 text-[18px] text-white'}>
                                Se connecter
                                <Icons name={'loginArrowIcon'} />
                            </Button>
                            <div className='w-[350px] h-[20px] flex items-center justify-center gap-1'>
                                <P>Vous n’avez pas de compte ?</P>
                                <Link to='/signup'>
                                    <P className={'text-[#8DA2FB] border-b-[1px] border-b-[#8DA2FB]'}> Créer un compte</P>
                                </Link>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default LoginForm;