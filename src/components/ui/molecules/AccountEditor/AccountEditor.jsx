import useUserForm from "../../../../core/hooks/useUserForm";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../../../../core/redux/feature/UserSlice";
import { useLocation, useNavigate } from "react-router-dom";

function EditUsersPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const editingUser = location.state?.user;
    const isEdit = Boolean(editingUser);

    const initialValues = editingUser || {
        email: "",
        noms: "",
        prenoms: "",
        telephone: "",
        statut: "Validé",
    };

    const handleSubmit = (values) => {
        if (isEdit) {
            dispatch(updateUser(values));
        } else {
            dispatch(addUser(values));
        }
        navigate("/");
    };

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit: formikSubmit,
        isSubmitting,
        isSubmitDisabled,
        isEmailDisabled,
    } = useUserForm({ initialValues, onSubmit: handleSubmit, isEdit });

    return (
        <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Configuration</h1>
            <p className="text-lg mb-6">{isEdit ? "Modifier un utilisateur" : "Ajouter un utilisateur"}</p>

            <form onSubmit={formikSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                        Adresse e-mail
                    </label>
                    <input
                        name="email"
                        type="email"
                        disabled={isEmailDisabled}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={`w-full border rounded px-3 py-2 ${isEmailDisabled ? "bg-gray-100 cursor-not-allowed" : ""
                            }`}
                    />
                    {errors.email && touched.email && <div className="text-red-600 text-sm">{errors.email}</div>}
                </div>

                <div>
                    <label htmlFor="noms" className="block mb-1 font-medium">
                        Nom
                    </label>
                    <input
                        name="noms"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.noms}
                        className="w-full border rounded px-3 py-2"
                    />
                    {errors.noms && touched.noms && <div className="text-red-600 text-sm">{errors.noms}</div>}
                </div>

                <div>
                    <label htmlFor="prenoms" className="block mb-1 font-medium">
                        Prénom
                    </label>
                    <input
                        name="prenoms"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.prenoms}
                        className="w-full border rounded px-3 py-2"
                    />
                    {errors.prenoms && touched.prenoms && <div className="text-red-600 text-sm">{errors.prenoms}</div>}
                </div>

                <div>
                    <label htmlFor="telephone" className="block mb-1 font-medium">
                        Téléphone
                    </label>
                    <input
                        name="telephone"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.telephone}
                        className="w-full border rounded px-3 py-2"
                    />
                    {errors.telephone && touched.telephone && <div className="text-red-600 text-sm">{errors.telephone}</div>}
                </div>

                <div>
                    <label htmlFor="statut" className="block mb-1 font-medium">
                        Statut
                    </label>
                    <select
                        name="statut"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.statut}
                        className="w-full border rounded px-3 py-2"
                    >
                        <option value="Validé">Validé</option>
                        <option value="Actif">Actif</option>
                        <option value="Inactif">Inactif</option>
                    </select>
                    {errors.statut && touched.statut && <div className="text-red-600 text-sm">{errors.statut}</div>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitDisabled || isSubmitting}
                    className={`w-full py-2 rounded text-white font-bold ${isSubmitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    {isEdit ? "Modifier" : "Ajouter"}
                </button>
            </form>
        </div>
    );
}

export default EditUsersPage;
