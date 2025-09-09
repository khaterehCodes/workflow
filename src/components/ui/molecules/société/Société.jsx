import Button from '../../atoms/customButton/Button';
import H2 from '../../atoms/customH2/H2'
import Icons from '../../atoms/icons/Icons';
import Input from '../../atoms/customInput/Input';
import { SociétéTabs } from '../../../../core/array/Array';
import React, { useState } from 'react';
import SociétéUser from '../sociétéUser/SociétéUser';
import { useSelector } from 'react-redux';
import Paginate from '../paginate/Paginate';
import SociétéModal from '../sociétéModal/SociétéModal';
function Société() {
    const countUser = useSelector(state => state.items.length)
    const formatCount = String(countUser).padStart(2, '0')
    const [currentPage, setCurrentPage] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className="w-[1300px] h-[690px] flex flex-col items-center bg-white rounded-[12px]">
            <div className="w-[1200px] h-[40px] flex items-center justify-between m-[10px]">
                <H2>Liste des sociétés</H2>
                <Button onClick={() => setOpenModal(true)}
                    className={'w-[85px] h-[35px] bg-[#4763E4] rounded-[10px] flex items-center justify-around text-white'}>
                    Ajouter
                    <Icons name={'plus'} />
                </Button>
            </div>
            <div className='w-[1200px] h-[40px] rounded-[10px] border-[1px] border-[#4763E480] flex items-center p-4 gap-2'>
                <Icons name={'search'} />
                <Input className='outline-none w-[1000px] h-[20px]' placeholder={'Vous cherchez une société...'}/>
            </div>
            {currentPage === 0 ? (<>
                <div className='w-[1200px] h-[45px] flex justify-around text-[#A1A1AA] items-center m-[20px]'>
                    {SociétéTabs.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className='w-[97px] h-[40px]'>
                                {item}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <SociétéUser />
            </>) : (<>Aucun utilisateur à afficher</>)}
            <div className='w-[1200px] h-[40px] flex items-center justify-between absolute top-[820px]'>
                <H2 className={'text-[#4763E4]'}>
                    {formatCount}&nbsp;
                    sociétés
                </H2>
                <Paginate setCurrentPage={setCurrentPage} />
            </div>
            <SociétéModal setOpenModal={setOpenModal} openModal={openModal} />
        </div>
    );
}

export default Société;