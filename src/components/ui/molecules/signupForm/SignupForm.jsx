import { Formik, Form, Field } from "formik";
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Label from '../../atoms/customLabel/Label'
import Input from "../../atoms/customInput/Input";
import P from "../../atoms/customP/P";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShowSignupWarning from "../showSignupWarning/ShowSignupWarning";
import SignupButton from "../signupButton/SignupButton";
const signupSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null]).required()
})
function SignupForm() {
    const [warning, setWarning] = useState(false)
    const navigate = useNavigate()
    return (
        <>
            <Formik
                initialValues={{ email: '', phone: '', password: '', confirmPassword: '' }}
                validationSchema={signupSchema}
                onSubmit={async (values, { setSubmitting, validateForm }) => {
                    const errors = await validateForm(); 
                    if (Object.keys(errors).length > 0) {
                        setWarning(true);
                        setSubmitting(false);
                    } else {
                        setWarning(false);
                        navigate('/');
                    }
                }}
            >
                {({ errors }) => (
                    <Form>
                        <div className="w-[530px] h-[430px] flex flex-col items-center gap-2">
                            <Label htmlFor={'email'} className={`flex items-start w-[530px] font-medium
                                ${errors.email ? 'text-[#991B1B]' : 'text-black'}
                                `}>Adresse e-mail</Label>
                            <Field as={Input} type='email' name='email' className={`w-[530px] h-[50px] rounded-[12px] outline-none p-4 border-[1px] border-[#E4E4E7] hover:border-[1px] hover:border-[#5C73DB]
                                ${errors.email ? 'border-[#F87171] placeholder:text-[#F87171]' : 'border-[#E4E4E7]'}
                                `} placeholder="force@adresseemail.com" />
                            <Label htmlFor={'phone'} className={`flex items-start w-[530px] font-medium
                                    ${errors.phone ? 'text-[#991B1B]' : 'text-black'}
                                    `}>Numéro de téléphone</Label>
                            <Field as={Input} type='number' name='phone' className={`w-[530px] h-[50px] rounded-[12px] outline-none p-4 border-[1px] border-[#E4E4E7] hover:border-[1px] hover:border-[#5C73DB]
                                ${errors.phone ? 'border-[#F87171] placeholder:text-[#F87171]' : 'border-[#E4E4E7]'}
                                `} placeholder="(+237) 696 88 77 55" />
                            <Label htmlFor={'password'} className={`flex items-start w-[530px] font-medium
                                    ${errors.password ? 'text-[#991B1B]' : 'text-black'}
                                    `}>Mot de passe</Label>
                            <Field as={Input} type='password' name='password' className={`w-[530px] h-[50px] rounded-[12px] outline-none p-4 border-[1px] border-[#E4E4E7] hover:border-[1px] hover:border-[#5C73DB]
                                ${errors.password ? "border-[#F87171] placeholder:text-[#F87171]" : "border-[#E4E4E7]"}
                                `}
                                placeholder='********************'
                            />
                            <Label htmlFor={'confirmPassword'} name='confirmPassword' className={`flex items-start w-[530px] font-medium
                                     ${errors.confirmPassword ? 'text-[#991B1B]' : 'text-black'}
                                    `}>Confirmer votre mot de passe</Label>
                            <Field as={Input} type='password' name='confirmPassword' className={`w-[530px] h-[50px] rounded-[12px] outline-none p-4 border-[1px] border-[#E4E4E7] hover:border-[1px] hover:border-[#5C73DB]
                                ${errors.confirmPassword ? 'border-[#F87171] placeholder:text-[#F87171]' : 'border-[#E4E4E7]'}
                                `}
                                placeholder='********************'
                            />
                            <div className="w-full h-[30px] flex items-center gap-1">
                                <Field as={Input} type='checkbox' className={'w-[15px] h-[15px] border-[1px] border-[#9FA6B2] rounded-[4px] outline-none'} />
                                <P>J'accepte </P>
                                <P className={'text-[#8DA2FB]'}>les termes et les conditions d'utilisation. </P>
                            </div>
                            <div className="w-[530px] h-[130px] flex flex-col items-center justify-center gap-2 mt-[5px]">
                               <SignupButton setWarning={setWarning}/>
                                <div className='w-[350px] h-[20px] flex items-center justify-center gap-1'>
                                    <P>Vous possedez déjà un compte ? </P>
                                    <Link to='/login'>
                                        <P className={'text-[#8DA2FB] border-b-[1px] border-b-[#8DA2FB]'}> Se connecter</P>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <ShowSignupWarning warning={warning} setWarning={setWarning} />
        </>
    );
}
export default SignupForm;