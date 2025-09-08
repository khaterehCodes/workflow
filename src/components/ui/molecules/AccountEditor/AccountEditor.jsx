import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addUser, updateUser } from "../../../../core/redux/feature/UserSlice";
import useUserForm from "../../../../core/hooks/UseUserForm/UseUserForm";
import InputField from "../InputField/InputField";
import { fields } from "../../../../core/array/Array";

function EditUsersPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const editingUser = location.state?.user;
    const isEdit = Boolean(editingUser);

    const initialValues = editingUser || {
        email: "", telephone: "", noms: "", prenoms: "", dateCreation: "", dateDerniereConnexion: "", statut: "Validé"
    };

    const handleSubmit = (values) => {
        const userToSave = { ...values, statut: "Validé" };
        isEdit ? dispatch(updateUser(userToSave)) : dispatch(addUser(userToSave));
        navigate("/");
    };

    const {
        values, errors, touched,
        handleChange, handleBlur, handleSubmit: formikSubmit,
        isSubmitting, isSubmitDisabled,
    } = useUserForm({ initialValues, onSubmit: handleSubmit, isEdit });

    return (
        <div>
            <h1 className="text-black ml-16 text-[32px] font-semibold mb-4">Configuration</h1>
            <div className="p-6 w-[1104px] h-[598px] mx-auto bg-white rounded-[12px] shadow flex flex-col">
                <p className="text-[#27272A] text-[18px] mb-6">{isEdit ? "Editer un compte" : "Ajouter un utilisateur"}</p>
                <form onSubmit={formikSubmit} className="grid grid-cols-2 font-normal text-[16px] gap-x-4 gap-y-6 flex-1 overflow-y-auto">
                    {fields.map(({ label, name, type = "text" }) => (
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
                        />
                    ))}
                    <hr className="col-span-2 border-t w-full mt-16" />
                    <div className="col-span-2 mt-auto">
                        <button
                            type="submit"
                            disabled={isSubmitDisabled || isSubmitting}
                            className={`w-[103px] h-[48px] py-2 rounded-[10px] text-white font-bold ${isSubmitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                        >
                            {isEdit ? "Modifier" : "Ajouter"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditUsersPage;
