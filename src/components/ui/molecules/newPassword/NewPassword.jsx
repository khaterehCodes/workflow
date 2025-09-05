import { Form, Formik, Field } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import Input from "../../atoms/customInput/Input";
import Label from "../../atoms/customLabel/Label";
import ShowPasswordWarning from "../showPasswordWarning/ShowPasswordWarning";
import Button from "../../atoms/customButton/Button";
import H2 from "../../atoms/customH2/H2";
const PasswordSchema = Yup.object().shape({
    password: Yup.string().required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null]).required()
})
function NewPassword() {
    const [warning, setWarning] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{ password: '', confirmPassword: '' }}
                validationSchema={PasswordSchema}
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
                        <div className="w-[530px] h-[270px] flex flex-col items-center gap-2">
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
                            <Button type='submit'
                                onClick={() => setWarning(true)}
                                className={'w-[530px] h-[50px] bg-[#4763E4] rounded-[12px] flex items-center justify-center gap-2 text-[18px] text-white'}>
                                Modifier
                            </Button>
                            <H2 className={'text-[#5C73DB]'}>
                                <Link to='/login'>
                                    Retour à la page connexion
                                </Link>
                            </H2>
                        </div>
                    </Form>
                )}
            </Formik>
            <ShowPasswordWarning warning={warning} setWarning={setWarning} />
        </>
    );
}

export default NewPassword;