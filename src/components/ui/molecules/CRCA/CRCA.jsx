import React, { useState } from 'react';
import H2 from '../../atoms/customH2/H2';
import Button from '../../atoms/customButton/Button';
import Icons from '../../atoms/icons/Icons';
import { CRCAtab } from '../../../../core/array/Array';
import CRCAcompany from '../CRCAcompany/CRCAcompany';
import Paginate from '../paginate/Paginate';
import Input from '../../atoms/customInput/Input';
function CRCA() {
    const [currentPage, setCurrentPage] = useState(0)
    return (
        <div className="w-[1300px] h-[690px] flex flex-col items-center bg-white rounded-[12px]">
            <div className="w-[1200px] h-[40px] flex items-center justify-between m-[10px]">
                <H2>Les membres de la CRCA</H2>
                <Button onClick={() => setOpenModal(true)}
                    className={'w-[85px] h-[35px] bg-[#4763E4] rounded-[10px] flex items-center justify-around text-white'}>
                    Ajouter
                    <Icons name={'plus'} />
                </Button>
            </div>
            <div className='w-[1200px] h-[40px] rounded-[10px] border-[1px] border-[#4763E480] flex items-center p-4 gap-2'>
                <Icons name={'search'} />
                <Input className='outline-none w-[1000px] h-[20px]' placeholder={'Vous cherchez un membre...'}/>
            </div>
            {currentPage === 0 ? (<>
                <div className='w-[1200px] h-[45px] flex justify-around text-[#A1A1AA] items-center m-[20px]'>
                    {CRCAtab.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className='w-[142px] h-[40px]'>
                                {item}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <CRCAcompany/>
            </>) : (<>Aucun utilisateur à afficher</>)}
            <div className='w-[1200px] h-[40px] flex items-center justify-between absolute top-[820px]'>
                <H2 className={'text-[#4763E4]'}>
                    Rhoncus montes arcu.
                </H2>
                <Paginate setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
}

export default CRCA;