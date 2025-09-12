import React, { useState } from 'react';
import H2 from '../../atoms/customH2/H2';
import Button from '../../atoms/customButton/Button';
import Icons from '../../atoms/icons/Icons';
import Input from '../../atoms/customInput/Input';
import { controlSettingTabs } from '../../../../core/array/Array';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../../../core/redux/feature/DutyLI';

function DutyList() {
    const duties = useSelector(state => state.dutyLI);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const filterSearchItems = duties.filter(item => item.label && item.label.toLowerCase().includes(searchValue.toLowerCase()));
    return (
        <>
            <div className='w-[590px] h-[40px] flex items-center justify-between'>
                <H2 className={'font-medium'}>Liste des diligences</H2>
                <Button className={'w-[95px] h-[40px] rounded-[12px] bg-[#4763E4] text-[14px] text-white flex items-center justify-around'}>
                    Ajouter
                    <Icons name={'plus'} />
                </Button>
            </div>
            <div className='w-[590px] h-[50px] rounded-[10px] p-5 border-[1px] border-[#4763E480] mt-[10px] flex items-center'>
                <Icons name={'search'} />
                <Input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={'Vous cherchez une méthode dévaluation ...'} className='w-[300px] ml-[15px]' />
            </div>
            <div className='w-[590px] h-[45px] flex justify-around text-[#A1A1AA] items-center mt-[20px]'>
                {controlSettingTabs.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className='w-[210px] h-[40px]'>
                            {item}
                        </div>
                    </React.Fragment>
                ))}
            </div>
            {filterSearchItems.length === 0 ? (<></>)
                : (<>
                    {filterSearchItems.map((item) => (
                        <React.Fragment key={item.id}>
                            <div className='w-[590px] h-[50px] flex items-center justify-around text-[14px] text-[#27272A]'>
                                <div className='w-[200px] h-[50px]'>
                                    {item.label}
                                </div>
                                <div className='w-[200px] h-[50px]'>
                                    {item.description}
                                </div>
                                <div className='w-[200px] h-[50px] flex items-center justify-center gap-1'>
                                    <Button
                                        className={'w-[80px] h-[34px] bg-white border-[1px] border-[#5C73DB] rounded-[10px] text-[#5C73DB] hover:bg-[#5C73DB] hover:text-white text-[12px]'}>
                                        Modifier
                                    </Button>
                                    <Button
                                        onClick={() => dispatch(removeUser(item.id))}
                                        className={'w-[80px] h-[34px] rounded-[10px] text-white text-[12px] bg-[#DC2626]'}>
                                        Supprimer
                                    </Button>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-[#F4F4F5]'></div>
                        </React.Fragment>
                    ))}
                </>)}
        </>
    );
}

export default DutyList;