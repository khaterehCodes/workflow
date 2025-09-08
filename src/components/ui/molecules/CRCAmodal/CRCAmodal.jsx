import { useState } from "react";
import Button from "../../atoms/customButton/Button";
import H2 from "../../atoms/customH2/H2";
import Input from "../../atoms/customInput/Input";
import Label from "../../atoms/customLabel/Label";

function CRCAmodal({ openModal, setOpenModal }) {
    const [memberName,setMemberName]=useState('')
    return (
        <>
            {openModal && (<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40">
                <div className="w-[1100px] h-[540px] bg-white rounded-[12px] p-10 relative left-[100px]">
                    <H2 className={'text-[20px] font-medium'}>Ipsum condimentum viverra nunc pharetra dictumst.</H2>
                    <div className="w-[1000px] h-[320px] mt-[30px] flex flex-col justify-between">
                        <Label>Membre</Label>
                        <Input 
                        onChange={(e)=>setMemberName(e.target.value)}
                        className="w-[1000px] h-[50px] border-[1px] border-[#E4E4E7] rounded-[12px] hover:border-[#5C73DB] outline-none p-3 "/>
                        <Label>Profil</Label>
                        <div className="w-[1000px] h-[200px] border-[1px] border-[#E4E4E7] rounded-[12px] hover:border-[#5C73DB]">
                            <Input className="m-[10px] outline-none" placeholder={'Decrivez ....'} />
                        </div>
                    </div>
                        <div className="w-full h-[100px] flex items-end gap-2">
                        <Button
                            className={'w-[200px] h-[50px] text-[18px] hover:bg-[#4763E4] hover:text-white hover:border-none rounded-[10px] border-[1px] border-[#D4D4D8]'}>
                                {memberName.trim() ? 'Modifier' :' Enregistrer'}
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

export default CRCAmodal;