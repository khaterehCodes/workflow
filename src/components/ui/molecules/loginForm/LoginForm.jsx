import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import Label from "../../atoms/customLabel/Label";
import Input from "../../atoms/customInput/Input";
import Button from "../../atoms/customButton/Button";
import P from "../../atoms/customP/P";
import Icons from "../../atoms/icons/Icons";
const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required('Adresse email ou numéro de téléphone'),
    password: Yup.string().required('passsssssss')
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
                {({ isSubmitting }) => (
                    <Form>
                        <Label htmlFor={'email'}>Email</Label>
                        <Field as={Input} type='email' name='email' />
                        <ErrorMessage name="email" />
                        <Label htmlFor={'password'}>Mot de passe</Label>
                        <Field as={Input} type='password' name='password' />
                        <P>Mot de passe oublié ?</P>
                        <div>
                            <Button type='submit' disabled={isSubmitting}>Se connecter</Button>
                            <Icons name={'loginArrowIcon'} />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default LoginForm;