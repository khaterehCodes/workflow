import React, { useEffect, useState } from "react";
import H2 from "../../atoms/customH2/H2";
import Input from "../../atoms/customInput/Input";
import Label from "../../atoms/customLabel/Label";
import Icons from "../../atoms/icons/Icons";
import Button from "../../atoms/customButton/Button";
import { useDispatch } from "react-redux";
import { pushUser } from "../../../../core/redux/feature/CommissairesMember";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker'
import { area } from "../../../../core/array/Array";
function CommissairesModal({ openModal, setOpenModal }) {
    const [hireDate, setHireDate] = useState(null)
    const [submitDate, setSubmitDate] = useState(null)
    const [IsArea, setIsArea] = useState(false)
    const [selectArea, setSelectArea] = useState('CAM LT05')
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: '',
        lastName: '',
        web: '',
        identity: '',
        email: '',
        phone: '',
        birth: null
    });
    const formHandler = () => {
        const newForm = {
            id: Date.now(),
            name: data.name,
            web: data.web,
            lastName: data.lastName,
            identity: data.identity,
            phone: data.phone,
            email: data.email,
            birth: hireDate ? hireDate.toString() : null
        }
        dispatch(pushUser(newForm))
        setOpenModal(false)
    };
    useEffect(() => {
        setData((prev) => ({ ...prev, hireDate }))
    }, [hireDate])
    return (
        <div>
            {openModal && (<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40">
                <div className="w-[1100px] h-[750px] bg-white relative left-[100px] flex flex-col rounded-[12px] p-10">
                    <H2 className={'text-[20px]'}>Enregistrement d'une compagnie d'assurance</H2>
                    <div className="w-[1000px] h-[650px] flex flex-wrap items-center justify-between mt-[30px]">
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'name'}>Nom</Label>
                            <Input
                                name={'name'}
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>URL WebDAV</Label>
                            <Input
                                placeholder={'.'}
                                name={'web'}
                                value={data.web}
                                onChange={(e) => setData({ ...data, web: e.target.value })}
                                className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>Prénom</Label>
                            <Input
                                name={'lastName'}
                                placeholder={'Entrez votre prénom'}
                                value={data.lastName}
                                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                                className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>Date de recrutement</Label>
                            <div className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] flex items-center justify-between p-3">
                                <Icons name={'calendar'} />
                                <DatePicker
                                    selected={hireDate}
                                    onChange={(date) => setHireDate(date)}
                                    dateFormat="yyyy/MM/dd"
                                    placeholderText={'yyyy/mm/dd'}
                                    className="w-[430px] h-[40px] outline-none"
                                />
                            </div>
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'acount'}>Compte utilisateur associé</Label>
                            <Input
                                name={'acount'}
                                placeholder={'.'}
                                value={data.acount}
                                onChange={(e) => setData({ ...data, acount: e.target.value })}
                                className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'email'}>Date de délivrance</Label>
                            <div className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] flex items-center justify-between p-3">
                                <Icons name={'calendar'} />
                                <DatePicker
                                    selected={submitDate}
                                    onChange={(date) => setSubmitDate(date)}
                                    dateFormat="yyyy/MM/dd"
                                    placeholderText={'yyyy/mm/dd'}
                                    className="w-[430px] h-[40px] outline-none"
                                />
                            </div>
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'identity'}>N° Pièce d'identification</Label>
                            <Input
                                name={'identity'}
                                placeholder={'.'}
                                value={data.identity}
                                onChange={(e) => setData({ ...data, identity: e.target.value })}
                                className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'company'}>Code du Pays</Label>
                            <div className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] flex items-center justify-between p-3" dir="rtl">
                                <div onClick={() => setIsArea(true)} className="cursor-pointer">
                                    <Icons name={'arrowDown'} />
                                </div>
                                <H2>{selectArea}</H2>
                            </div>
                            {IsArea && (<div className="w-[300px] h-[60px] bg-white shadow-2xl rounded-[12px] border-[1px] border-[#E5E7EB] z-50 relative left-[180px] top-[5px]">
                                {area.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div
                                            onClick={() => {
                                                setSelectArea(item)
                                                setIsArea(false)
                                            }}
                                            className="w-full h-[30px] hover:bg-[#F4F5F7] text-[#4B5563] hover:first:rounded-tl-[12px]  hover:first:rounded-tr-[12px]  hover:last:rounded-bl-[12px]  hover:last:rounded-br-[12px]">
                                            {item}
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>)}
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>Lieu de délivrance</Label>
                            <Input placeholder={'.'} className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>Brigade</Label>
                            <Input placeholder={'.'} className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'phone'}>Numéro de téléphone*</Label>
                            <Input
                                name={'phone'}
                                placeholder={'.'}
                                value={data.phone}
                                onChange={(e) => setData({ ...data, phone: e.target.value })}
                                className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>Equipe</Label>
                            <Input placeholder={'.'} className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'email'}>Adresse E-mail</Label>
                            <Input
                                name={'email'}
                                value={data.email}
                                placeholder={'.'}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>Role</Label>
                            <div className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] flex items-center justify-between p-3" dir="rtl">
                                <div className="w-[120px] h-[50px] flex items-center justify-around" dir="ltr">
                                    <Icons name={'arrowDown'} />
                                    <Button className={'w-[82px] h-[33px] bg-[#4763E4] rounded-[10px] text-white flex items-center justify-around text-[14px]'}>
                                        <Icons name={'plus'} />
                                        Ajouter
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[100px] flex items-end gap-2">
                        <Button
                            onClick={formHandler}
                            className={'w-[200px] h-[50px] text-[18px] hover:bg-[#4763E4] hover:text-white hover:border-none rounded-[10px] border-[1px] border-[#D4D4D8]'}>Enregistrer</Button>
                        <Button
                            onClick={() => setOpenModal(false)}
                            className={'w-[200px] h-[50px] text-[18px] hover:bg-[#4763E4] hover:text-white hover:border-none rounded-[10px] border-[1px] border-[#D4D4D8]'}>Annuler</Button>
                    </div>
                </div>
            </div>)}
        </div>
    );
}

export default CommissairesModal;