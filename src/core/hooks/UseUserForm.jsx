import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("E-mail invalide").required("Requis"),
  noms: Yup.string().required("Requis"),
  prenoms: Yup.string().required("Requis"),
  telephone: Yup.string().required("Requis"),
  statut: Yup.string().oneOf(["Validé", "Actif", "Inactif"]).required("Requis"),
});

function useUserForm({ initialValues, onSubmit, isEdit }) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return {
    ...formik,
    isSubmitDisabled: !(formik.dirty && formik.isValid),
    isEmailDisabled: isEdit,
  };
}

export default useUserForm;
