import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../../../core/redux/feature/CRCA'
import Button from '../../atoms/customButton/Button';
import CRCAmodal from '../CRCAmodal/CRCAmodal';
import { useState } from 'react';
function CRCAcompany() {
    const company = useSelector(state => state.company)
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false)
    const [editcompany, setEditCompany] = useState(null)
    return (
        <div className='w-[1200px] h-auto'>
            {company.map((item) => (
                <React.Fragment key={item.id}>
                    <div className='w-[1200px] h-[50px] flex items-center justify-around text-[14px] text-[#27272A]'>
                        <div className='w-[142px] h-[50px]'>
                            {item.name}
                        </div>
                        <div className='w-[142px] h-[50px]'>
                            {item.lastName}
                        </div>
                        <div className='w-[142px] h-[50px]'>
                            {item.phone}
                        </div>
                        <div className='w-[142px] h-[50px]'>
                            {item.email}
                        </div>
                        <div className='w-[142px] h-[50px] break-words whitespace-normal'>
                            {item.date}
                        </div>
                        <div className='w-[142px] h-[50px]'>
                            {item.number}
                        </div>
                        <div className='w-[142px] h-[50px] flex items-center justify-center gap-1'>
                            <Button
                                onClick={() => {
                                    setOpenModal(true)
                                    setEditCompany(item)
                                }}
                                className={'w-[69px] h-[34px] bg-white border-[1px] border-[#5C73DB] rounded-[10px] text-[#5C73DB] hover:bg-[#5C73DB] hover:text-white text-[12px]'}>
                                Modifier
                            </Button>
                            <Button
                                onClick={() => dispatch(removeUser(item.id))}
                                className={'w-[69px] h-[34px] rounded-[10px] text-white text-[12px] bg-[#DC2626]'}>
                                Supprimer
                            </Button>
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[#F4F4F5]'></div>
                </React.Fragment>
            ))}
            <CRCAmodal openModal={openModal} setOpenModal={setOpenModal} editcompany={editcompany}/>
        </div>
    );
}

export default CRCAcompany;