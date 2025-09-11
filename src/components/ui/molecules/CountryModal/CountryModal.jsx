import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addItem, updateItem } from "../../../../core/redux/feature/UserSlice";
import useUserForm from "../../../../core/hooks/UseUserForm/UseUserForm";
import InputField from "../InputField/InputField";
import H1 from "../../atoms/customH1/H1";
import Button from "../../atoms/customButton/Button";

const fields = [
  { label: "Libellé", name: "libelle", type: "text", required: true },
  { label: "Code ISO*", name: "codeISO", type: "text", required: true },
];
function CountryModal({ setOpenModal, initialValues }) {
  const dispatch = useDispatch();
  const defaultValues = {
    libelle: "",
    codeISO: "",
    description: "",
  };
  const isEdit = Boolean(initialValues?.id);
  const handleSubmit = (values) => {
    const countryToSave = isEdit ? values : { ...values, id: nanoid() };
    const action = isEdit ? updateItem : addItem;
    dispatch(action({ key: "countries", item: countryToSave }));
    setOpenModal(false);
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit: formikSubmit, isSubmitting, isSubmitDisabled, } = useUserForm({ initialValues: initialValues || defaultValues, onSubmit: handleSubmit, formType: "country", isEdit, });
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-end pr-[40px] z-50">
      <div className="bg-white rounded-[12px] shadow-lg w-[1190px] h-[650px] flex flex-col">
        <div className="px-6 py-4 ml-10 font-medium text-[20px]">
          <H1>{isEdit ? "Modifier le pays" : "Enregistrement d'un pays"}</H1>
        </div>
        <form onSubmit={formikSubmit} className="flex flex-col items-center gap-6 px-6 py-6 flex-1 overflow-y-auto">
          {fields.map(({ label, name, type }) => (
            <InputField
              key={name}
              label={label}
              name={name}
              type={type}
              value={values[name]}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors[name]}
              touched={touched[name]}
              disabled={false}
              className="w-[1040px]"
            />
          ))}

          <div className="flex flex-col w-[1040px]">
            <label className="mb-2 text-[16px] font-normal text-black">Description</label>
            <textarea name="description" value={values.description} onChange={handleChange} onBlur={handleBlur}
              className={`border border-gray-300 border-dashed rounded-[10px] px-3 py-2 resize-none h-[200px] ${errors.description && touched.description ? "border-red-500" : ""}`} />
            {errors.description && touched.description ? (
              <span className="text-red-500 text-sm mt-1 min-h-[20px] block">
                {errors.description}
              </span>
            ) : (
              <span className="min-h-[20px] block" />
            )}
          </div>

          <div className="flex  justify-start gap-4 w-[1040px] mt-auto border-t pt-4">
            <Button
              type="submit"
              disabled={isSubmitDisabled || isSubmitting}
              className={`rounded-[10px] w-[200px] h-[42px] text-white font-semibold ${isSubmitDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#4763E4] hover:bg-[#3b55c7]"
                }`}
            >
              {isEdit ? "Modifier" : "Enregistrer"}
            </Button>
            <Button type="button" onClick={() => setOpenModal(false)} className="bg-white text-black border border-gray-300 hover:bg-gray-100 rounded-[10px] w-[200px] h-[42px]">
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CountryModal;
