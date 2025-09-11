import { useFormik } from "formik";
import * as Yup from "yup";

const userValidationSchema = Yup.object({
  email: Yup.string().email("E-mail invalide").required("Requis"),
  noms: Yup.string().required("Requis"),
  prenoms: Yup.string().required("Requis"),
  telephone: Yup.string()
    .matches(/^\+33\s\d{9}$/  , "Le numéro doit contenir exactement 11 chiffres")
    .required("Requis"),
  statut: Yup.string().oneOf(["Validé", "Actif", "Inactif"]).required("Requis"),
});

const countryValidationSchema = Yup.object({
  libelle: Yup.string().required("Libellé est requis"),
  codeISO: Yup.string().required("Code ISO est requis"),
  description: Yup.string(),
});

function useUserForm({ initialValues, onSubmit, isEdit = false, formType = "user" }) {
  const validationSchema = formType === "country" ? countryValidationSchema : userValidationSchema;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return {
    ...formik,
    isSubmitDisabled: !(formik.dirty && formik.isValid),
    isEmailDisabled: formType === "user" && isEdit,
  };
}

export default useUserForm;
