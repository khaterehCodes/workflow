import { useState } from "react";
import Button from "../../atoms/customButton/Button";
import H2 from "../../atoms/customH2/H2";
import Input from "../../atoms/customInput/Input";
import Label from "../../atoms/customLabel/Label";

function RoleModal({ openRole, setOpenRole, setRole }) {
    const [roleValue, setRoleValue] = useState('')
    const roleHandler = () => {
        setRole(roleValue)
        setOpenRole(false)
    }
    return (
        <>
            {openRole && (<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="w-[1200px] h-[540px] bg-white rounded-[12px] flex flex-col relative left-[100px] p-10">
                    <H2 className={'text-[20px] font-medium'}>Enregistrement d'un role</H2>
                    <div className="w-[1100px] h-[320px] flex flex-col gap-2 mt-[25px]">
                        <Label htmlFor={'role'}>Libellé</Label>
                        <div className='w-[1100px] h-[40px] rounded-[10px] border-[1px] border-[#4763E480] flex items-center p-4 gap-2'>
                            <Input
                                onChange={(e) => setRoleValue(e.target.value)}
                                className='outline-none w-[1000px] h-[20px]' name={'role'} />
                        </div>
                        <Label>Description</Label>
                        <div className="w-[1100px] h-[200px] rounded-[10px] border-[1px] border-[#4763E480] p-4" >
                            <Input
                                placeholder={'Decrivez ....'}
                                className="w-full h-[20px] outline-none"
                            />
                        </div>
                    </div>
                    <div className="w-full h-[100px] flex items-end gap-2">
                        <Button
                            onClick={roleHandler}
                            className={'w-[200px] h-[50px] text-[18px] hover:bg-[#4763E4] hover:text-white hover:border-none rounded-[10px] border-[1px] border-[#D4D4D8]'}>Enregistrer</Button>
                        <Button
                            onClick={() => setOpenRole(false)}
                            className={'w-[200px] h-[50px] text-[18px] hover:bg-[#4763E4] hover:text-white hover:border-none rounded-[10px] border-[1px] border-[#D4D4D8]'}>Annuler</Button>
                    </div>
                </div>
            </div>)}
        </>
    );
}

export default RoleModal;