import React, { useState } from "react";
import H2 from "../../atoms/customH2/H2";
import Input from "../../atoms/customInput/Input";
import Label from "../../atoms/customLabel/Label";
import Icons from "../../atoms/icons/Icons";
import { activeStatus, cities, countries } from "../../../../core/array/Array";
import Button from "../../atoms/customButton/Button";
import { useDispatch } from "react-redux";
import { pushUser } from "../../../../core/redux/feature/SociétéUser";

function SociétéModal({ openModal, setOpenModal }) {
    const dispatch = useDispatch();
    const [selectCountry, setSelectCountry] = useState('Cameroun')
    const [countryItem, setCountryitem] = useState(false)
    const [active, setActive] = useState('Vie')
    const [IsActive, setIsAvtive] = useState(false)
    const [selectCity, setSelectCity] = useState('Douala')
    const [IsCity, setIsCity] = useState(false)
    const [data, setData] = useState({
        name: '',
        country: selectCountry,
        city: selectCity,
        branch: active,
        email: '',
        phone: '',
        web: '',
        company: '',
        number: '',
    });
    const formHandler = () => {
        const newForm = {
            id: Date.now(),
            name: data.name,
            country: selectCountry,
            city: selectCity,
            branch: active,
            email: data.email,
            phone: data.phone,
            web: data.web,
            company: '',
            number: '',
        }
        dispatch(pushUser(newForm))
        setOpenModal(false)
    }
    return (
        <div>
            {openModal && (<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40">
                <div className="w-[1100px] h-[700px] bg-white relative left-[100px] flex flex-col rounded-[12px] p-10">
                    <H2 className={'text-[20px]'}>Enregistrement d'une compagnie d'assurance</H2>
                    <div className="w-[1000px] h-[550px] flex flex-wrap items-center justify-between mt-[30px]">
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'name'}>Nom de la société</Label>
                            <Input
                                name={'name'}
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>Pays</Label>
                            <div className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] flex items-center justify-between p-3" dir="rtl">
                                <div onClick={() => setCountryitem(true)} className="cursor-pointer">
                                    <Icons name={'arrowDown'} />
                                </div>
                                <H2>{selectCountry}</H2>
                            </div>
                            {countryItem && (<div className="w-[300px] h-[90px] bg-white shadow-2xl rounded-[12px] border-[1px] border-[#E5E7EB] z-50 relative left-[180px] top-[5px]">
                                {countries.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div
                                            onClick={() => {
                                                setSelectCountry(item)
                                                setCountryitem(false)
                                            }}
                                            className="w-full h-[30px] hover:bg-[#F4F5F7] text-[#4B5563] hover:first:rounded-tl-[12px]  hover:first:rounded-tr-[12px]  hover:last:rounded-bl-[12px]  hover:last:rounded-br-[12px]">
                                            {item}
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>)}
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>Branche</Label>
                            <div className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] flex items-center justify-between p-3" dir="rtl">
                                <div onClick={() => setIsAvtive(true)} className="cursor-pointer">
                                    <Icons name={'arrowDown'} />
                                </div>
                                <H2>{active}</H2>
                            </div>
                            {IsActive && (<div className="w-[300px] h-[60px] bg-white shadow-2xl rounded-[12px] border-[1px] border-[#E5E7EB] z-50 relative left-[180px] top-[5px]">
                                {activeStatus.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div
                                            onClick={() => {
                                                setActive(item)
                                                setIsAvtive(false)
                                            }}
                                            className="w-full h-[30px] hover:bg-[#F4F5F7] text-[#4B5563] hover:first:rounded-tl-[12px]  hover:first:rounded-tr-[12px]  hover:last:rounded-bl-[12px]  hover:last:rounded-br-[12px]">
                                            {item}
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>)}
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>Ville</Label>
                            <div className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] flex items-center justify-between p-3" dir="rtl">
                                <div onClick={() => setIsCity(true)} className="cursor-pointer">
                                    <Icons name={'arrowDown'} />
                                </div>
                                <H2>{selectCity}</H2>
                            </div>
                            {IsCity && (<div className="w-[300px] h-[60px] bg-white shadow-2xl rounded-[12px] border-[1px] border-[#E5E7EB] z-50 relative left-[180px] top-[5px]">
                                {cities.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div
                                            onClick={() => {
                                                setSelectCity(item)
                                                setIsCity(false)
                                            }}
                                            className="w-full h-[30px] hover:bg-[#F4F5F7] text-[#4B5563] hover:first:rounded-tl-[12px]  hover:first:rounded-tr-[12px]  hover:last:rounded-bl-[12px]  hover:last:rounded-br-[12px]">
                                            {item}
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>)}
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'phone'}>Numéro de téléphone</Label>
                            <Input
                                name={'phone'}
                                value={data.phone}
                                onChange={(e) => setData({ ...data, phone: e.target.value })}
                                className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'email'}>Adress email principale</Label>
                            <Input
                                name={'email'}
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'web'}>Site web</Label>
                            <Input
                                name={'web'}
                                value={data.web}
                                onChange={(e) => setData({ ...data, web: e.target.value })}
                                className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'company'}>Adress email secondaire</Label>
                            <Input
                                name={'company'}
                                value={data.company}
                                onChange={(e) => setData({ ...data, company: e.target.value })}
                                className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none" />
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>GPS Latitude</Label>
                            <Input placeholder={'.'} className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none"/>
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>Commissaire contrôleur</Label>
                            <div className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] flex items-center justify-between p-3" dir="rtl">
                                <Icons name={'arrowDown'} />
                            </div>
                        </div>
                        <div className="w-[490px] h-[80px]">
                            <Label htmlFor={'country'}>GPS Longitude</Label>
                            <Input placeholder={'.'} className="w-[480px] h-[50px] rounded-[12px] border-[1px] border-[#F4F4F5] hover:border-[#5C73DB] p-3 outline-none"/>
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

export default SociétéModal;