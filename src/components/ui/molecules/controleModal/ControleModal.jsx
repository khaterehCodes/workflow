import { useState } from "react";
import Button from "../../atoms/customButton/Button";
import H2 from "../../atoms/customH2/H2";
import Input from "../../atoms/customInput/Input";
import Label from "../../atoms/customLabel/Label";
import Icons from "../../atoms/icons/Icons";
import { useDispatch } from "react-redux";
import { pushUser } from "../../../../core/redux/feature/ControleSet";

function ControleModal({ openModal, setOpenModal }) {
    const dispatch = useDispatch()
    const [labelValue, setLabelValue] = useState('')
    const [descripValue, setDescripValue] = useState('')
    const controleHandler = () => {
        if (labelValue.trim() !== '') {
            const newControle = {
                id: Date.now(),
                label: labelValue,
                description: descripValue
            }
            dispatch(pushUser(newControle))
            setOpenModal(false)
        }
    }
    return (
        <>
            {openModal && (<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40">
                <div className="w-[1100px] h-[730px] bg-white rounded-[12px] p-10 relative left-[100px]">
                    <H2 className={'text-[20px] font-medium'}>Enregistrement d'une compagnie d'assurance</H2>
                    <div className="w-[1000px] h-[500px] flex flex-col mt-[30px] justify-between">
                        <Label>Libelle</Label>
                        <Input
                            onChange={(e) => setLabelValue(e.target.value)}
                            placeholder={'.'}
                            className="w-[1000px] h-[50px] border-[1px] border-[#E4E4E7] rounded-[12px] p-3 hover:border-[#5C73DB] outline-none"
                        />
                        <Label>Description</Label>
                        <div className="w-[1000px] h-[200px] border-[1px] border-[#E4E4E7] rounded-[12px] p-3 hover:border-[#5C73DB]">
                            <Input
                                onChange={(e) => setDescripValue(e.target.value)}
                                placeholder={'Decrivez ....'}
                                className="outline-none"
                            />
                        </div>
                        <Label>Commissaire de contrôle</Label>
                        <div className="w-[1000px] h-[50px] border-[1px] border-[#E4E4E7] rounded-[12px] p-3 hover:border-[#5C73DB]  flex items-center justify-between">
                            <Input placeholder={'John Doe'} />
                            <Icons name={'arrowDown'} />
                        </div>
                        <Label>Rôle</Label>
                        <div className="w-[1000px] h-[50px] border-[1px] border-[#E4E4E7] rounded-[12px] p-3 hover:border-[#5C73DB] flex items-center justify-between" >
                            <Input placeholder={'.'} />
                            <Icons name={'arrowDown'} />
                        </div>
                    </div>
                    <div className="w-full h-[100px] flex items-end gap-2">
                        <Button
                            onClick={controleHandler}
                            className={'w-[200px] h-[50px] text-[18px] hover:bg-[#4763E4] hover:text-white hover:border-none rounded-[10px] border-[1px] border-[#D4D4D8]'}>
                            Enregistrer
                        </Button>
                        <Button
                            onClick={() => setOpenModal(false)}
                            className={'w-[200px] h-[50px] text-[18px] hover:bg-[#4763E4] hover:text-white hover:border-none rounded-[10px] border-[1px] border-[#D4D4D8]'}>Annuler</Button>
                    </div>
                </div>
            </div>)}
        </>
    );
}

export default ControleModal;