import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, updateItem } from "../../../../core/redux/feature/UserSlice";
import ActionButtons from "../ActionButtons/ActionButtons";
import UserSearchBar from "../UserSearchBar/UserSearchBar";
import CustomTable from "../CustomTable/CustomTable";
import CityModal from "../CityModal/CityModal";
import { nanoid } from "@reduxjs/toolkit";
function EvaluationMethodList() {
  const dispatch = useDispatch();
  const evaluationMethods = useSelector((state) => state.data?.evaluationMethods || []);
  const [query, setQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingMethod, setEditingMethod] = useState(null);
  const handleDelete = (id) => { dispatch(deleteItem({ key: "evaluationMethods", id })); };
  const handleSave = (formData) => {
    if (editingMethod) {
      dispatch(updateItem({ key: "evaluationMethods", item: { ...editingMethod, ...formData } }));
    } else {
      if (evaluationMethods.length >= 5) return;
      const newMethod = { ...formData, id: nanoid() };
      dispatch(addItem({ key: "evaluationMethods", item: newMethod }));
    }
    setOpenModal(false);
  };

  const columns = [
    { key: "name", label: "Libellé", width: "30%" },
    { key: "description", label: "Description", width: "50%" },
    { key: "actions", label: "Actions", width: "20%" },
  ];

  const filteredData = evaluationMethods.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
  const renderRow = (item) => (
    <>
      <td className="px-6 py-4">{item.name}</td>
      <td className="px-6 py-4">{item.description}</td>
      <td className="px-6 py-4">
        <ActionButtons onEdit={() => { setEditingMethod(item); setOpenModal(true); }}
          onDelete={() => handleDelete(item.id)}
          showAdd={false}
          size="s" />
      </td>
    </>
  );

  return (
    <div className="bg-white p-6 w-[580px] h-[505px] mt-5 ml-5 rounded-[12px]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[18px] text-[#27272A] font-normal"> Liste des méthodes d'évaluation</h1>
        <ActionButtons
          onAdd={() => { if (evaluationMethods.length >= 5) return; setEditingMethod(null); setOpenModal(true); }}
          showEdit={false}
          showDelete={false}
          showAdd={true}
          size="md" />
      </div>
      <UserSearchBar query={query} setQuery={setQuery} placeholder="Vous cherchez une méthode ..." />
      {filteredData.length > 0 ? (
        <CustomTable columns={columns} data={filteredData} renderRow={renderRow} />
      ) : (
        <div className="text-center text-gray-500 mt-6"> Aucune méthode à afficher.</div>)}

      {openModal && (<CityModal setOpenModal={setOpenModal} initialValues={editingMethod} onSave={handleSave} />
      )}
    </div>
  );
}

export default EvaluationMethodList;
