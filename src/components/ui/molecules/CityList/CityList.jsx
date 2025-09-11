import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, updateItem } from "../../../../core/redux/feature/UserSlice";
import ActionButtons from "../ActionButtons/ActionButtons";
import UserSearchBar from "../UserSearchBar/UserSearchBar";
import CustomTable from "../CustomTable/CustomTable";
import CityModal from "../CityModal/CityModal";
import { nanoid } from "@reduxjs/toolkit";

function CityList() {
    const dispatch = useDispatch();
    const cities = useSelector((state) => state.data?.cities || []);
    const [query, setQuery] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [editingCity, setEditingCity] = useState(null);
    const handleDelete = (id) => { dispatch(deleteItem({ key: "cities", id })); };
    const handleSave = (formData) => {
        if (editingCity) {
            dispatch(updateItem({ key: "cities", item: { ...editingCity, ...formData } }));
        } else {
            if (cities.length >= 5) return;
            const newCity = { ...formData, id: nanoid() };
            dispatch(addItem({ key: "cities", item: newCity }));
        }
        setOpenModal(false);
    };

    const columns = [
        { key: "name", label: "Libellé", width: "30%" },
        { key: "description", label: "Description", width: "50%" },
        { key: "actions", label: "Actions", width: "20%" },
    ];
    const filteredData = cities.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
    const renderRow = (item) => (
        <>
            <td className="px-6 py-4">{item.name}</td>
            <td className="px-6 py-4">{item.description}</td>
            <td className="px-6 py-4">
                <ActionButtons onEdit={() => { setEditingCity(item); setOpenModal(true); }}
                    onDelete={() => handleDelete(item.id)}
                    showAdd={false}
                    size="s" />
            </td>
        </>
    );

    return (
        <div className="bg-white p-6 w-[590px] h-[505px] mt-5 ml-5 rounded-[12px] ">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-[18px] text-[#27272A] font-normal"> Liste des villes</h1>
                <ActionButtons onAdd={() => { if (cities.length >= 5) return; setEditingCity(null); setOpenModal(true); }}
                    showEdit={false}
                    showDelete={false}
                    showAdd={true}
                    size="md" />
            </div>
            <UserSearchBar query={query} setQuery={setQuery} placeholder="Vous cherchez une ville ..." />

            {filteredData.length > 0 ? (
                <CustomTable columns={columns} data={filteredData} renderRow={renderRow} />
            ) : (
                <div className="text-center text-gray-500 mt-6"> Aucune ville à afficher.</div>
            )}
            {openModal && (<CityModal setOpenModal={setOpenModal} initialValues={editingCity} onSave={handleSave} />)}
        </div>
    );
}

export default CityList;
