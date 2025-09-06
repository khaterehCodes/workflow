import { Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import Label from "../../atoms/customLabel/Label";
import Input from "../../atoms/customInput/Input";
import Button from "../../atoms/customButton/Button";
import P from "../../atoms/customP/P";
import { useState } from "react";
import EmailButton from "../emailButton/EmailButton";
import ShowEmailWarning from "../showEmailWarning/ShowEmailWarning";
const EmailSchema = Yup.object().shape({
    email: Yup.string().email().required()
})
function EmailForm() {
    const [warning, setWarning] = useState(false)
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={EmailSchema}
                onSubmit={(values) => {
                    setWarning(true)
                    navigate('/confirmEmail')
                }}
            >
                {({errors, values, touched }) => {
                    const emailValidation = touched.email && !errors.email && values.email
                    return (
                        <Form>
                            <div className="w-[550px] h-[180px] flex flex-col items-center justify-center gap-2">
                                <Label
                                    htmlFor="email"
                                    className={`flex items-start w-[530px] font-medium ${errors.email ? 'text-[#991B1B]' : emailValidation ? 'text-[#16A34A]' : 'text-black'}`}
                                >
                                    Adresse e-mail
                                </Label>

                                <Field
                                    as={Input}
                                    type="email"
                                    name="email"
                                    className={`w-[530px] h-[50px] rounded-[12px] outline-none p-4 border-[1px] hover:border-[1px] ${errors.email ? 'border-[#F87171] placeholder:text-[#F87171]'
                                        : emailValidation ? 'border-[#16A34A] placeholder:text-[#16A34A]'
                                            : 'border-[#E4E4E7]'} hover:border-[#5C73DB] `}
                                    placeholder="force@adresseemail.com"
                                />

                                <EmailButton setWarning={setWarning} />

                                <Link to="/login">
                                    <P className="text-[#5C73DB]">Retour à la page connexion</P>
                                </Link>
                            </div>
                            <ShowEmailWarning warning={warning} setWarning={setWarning} emailValidation={touched.email && !errors.email && values.email} />
                        </Form>
                    )
                }}
            </Formik>
        </>
    );
}

export default EmailForm;