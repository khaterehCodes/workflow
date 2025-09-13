import React, { useState } from 'react';
import Button from '../../atoms/customButton/Button';
import H2 from '../../atoms/customH2/H2';
import Icons from '../../atoms/icons/Icons';
import Input from '../../atoms/customInput/Input';
import Paginate from '../paginate/Paginate';
import { controlSettingTabs } from '../../../../core/array/Array';
import ControleItems from '../controleItems/ControleItems';
import ControleModal from '../controleModal/ControleModal';
import ControleGroups from '../controleGroups/ControleGroups';
import DutyList from '../dutyList/DutyList';
import { useSelector } from 'react-redux';

function ControlSetting() {
    const controle = useSelector(state => state.controle)
    const [currentPage, setCurrentPage] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const filterSearchItems = controle.filter(item => item.label.toLowerCase().includes(searchValue.toLowerCase()));
    return (
        <div className='w-full h-auto  flex flex-col items-center'>
            <div className="w-[1230px] h-[390px] flex flex-col items-center bg-white rounded-[12px]">
                <div className="w-[1200px] h-[40px] flex items-center justify-between m-[10px]">
                    <H2>Liste des brigades</H2>
                    <Button onClick={() => setOpenModal(true)}
                        className={'w-[85px] h-[35px] bg-[#4763E4] rounded-[10px] flex items-center justify-around text-white'}>
                        Ajouter
                        <Icons name={'plus'} />
                    </Button>
                </div>
                <div className='w-[1200px] h-[40px] rounded-[10px] border-[1px] border-[#4763E480] flex items-center p-4 gap-2'>
                    <Icons name={'search'} />
                    <Input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className='outline-none w-[1000px] h-[20px]' placeholder={'Vous cherchez un pays ...'} />
                </div>
                {currentPage === 0 ? (<>
                    <div className='w-[1200px] h-[45px] flex justify-around text-[#A1A1AA] items-center m-[20px]'>
                        {controlSettingTabs.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className='w-[342px] h-[40px]'>
                                    {item}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <ControleItems items={filterSearchItems} />
                </>) : (<>Aucun utilisateur à afficher</>)}
                <div className='w-[1200px] h-[40px] flex items-center justify-between absolute top-[520px]'>
                    <H2 className={'text-[#4763E4]'}>
                        Orci in.
                    </H2>
                    <Paginate setCurrentPage={setCurrentPage} />
                </div>
                <ControleModal openModal={openModal} setOpenModal={setOpenModal} />
            </div>
            <div className='w-full h-[600px]'>
                <div className='w-[1230px] h-[550px] flex items-center justify-between'>
                    <div className='w-[610px] h-[520px] bg-white rounded-[12px] flex flex-col p-5'>
                        <ControleGroups/>
                    </div>
                    <div className='w-[610px] h-[520px] bg-white rounded-[12px] flex flex-col p-5'>
                        <DutyList/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ControlSetting;