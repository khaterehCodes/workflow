import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import InputField from "../InputField/InputField";
import H1 from "../../atoms/customH1/H1";
import Button from "../../atoms/customButton/Button";

const fields = [
  { label: "Libellé", name: "name", type: "text", required: true },
];

function CityModal({ setOpenModal, initialValues, onSave }) {
  const [formData, setFormData] = useState({ name: "", description: "",});
  const isEdit = Boolean(initialValues?.id);
  useEffect(() => {
    if (initialValues) {
      setFormData({ name: initialValues.name || "",
        description: initialValues.description || "",});
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim()) {
      const cityToSave = isEdit ? { ...initialValues, ...formData } : { ...formData, id: nanoid() };
      onSave(cityToSave);
      setOpenModal(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-end pr-[40px] z-50">
      <div className="bg-white rounded-[12px] shadow-lg w-[1190px] h-[550px] flex flex-col">
        <div className="px-6 py-4 ml-10 font-medium text-[20px]">
          <H1>{isEdit ? "Modifier la ville" : "Enregistrement d'une ville"}</H1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 px-6 py-6 flex-1 overflow-y-auto">
          {fields.map(({ label, name, type }) => (
            <InputField
              key={name}
              label={label}
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              disabled={false}
              className="w-[1040px]"
            />
          ))}

          <div className="flex flex-col w-[1040px]">
            <label className="mb-2 text-[16px] font-normal text-black">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="border border-gray-300 border-dashed rounded-[10px] px-3 py-2 resize-none h-[200px]"/>
            <span className="min-h-[20px] block" />
          </div>

          <div className="flex justify-start gap-4 w-[1040px] mt-auto border-t pt-4">
            <Button type="submit" className="rounded-[10px] w-[200px] h-[42px] text-white font-semibold bg-[#4763E4] hover:bg-[#3b55c7]">
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

export default CityModal;
