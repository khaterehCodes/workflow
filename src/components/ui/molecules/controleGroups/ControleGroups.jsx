import React from 'react';
import H2 from '../../atoms/customH2/H2';
import Button from '../../atoms/customButton/Button';
import Icons from '../../atoms/icons/Icons';
import Input from '../../atoms/customInput/Input';
import { controlSettingTabs } from '../../../../core/array/Array';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../../../core/redux/feature/ControleGroups';
function ControleGroups() {
    const controleGroup = useSelector(state => state.controleGroup)
    const dispatch = useDispatch();
    return (
        <>
            <div className='w-[590px] h-[40px] flex items-center justify-between'>
                <H2 className={'font-medium'}>Liste des équipes de contrôle</H2>
                <Button className={'w-[95px] h-[40px] rounded-[12px] bg-[#4763E4] text-[14px] text-white flex items-center justify-around'}>
                    Ajouter
                    <Icons name={'plus'} />
                </Button>
            </div>
            <div className='w-[590px] h-[50px] rounded-[10px] p-5 border-[1px] border-[#4763E480] mt-[10px] flex items-center'>
                <Icons name={'search'} />
                <Input placeholder={'Vous cherchez une ville ...'} className='ml-[15px]' />
            </div>
            <div className='w-[590px] h-[45px] flex justify-around text-[#A1A1AA] items-center mt-[20px]'>
                {controlSettingTabs.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className='w-[200px] h-[40px]'>
                            {item}
                        </div>
                    </React.Fragment>
                ))}
            </div>
                {controleGroup.map((item) => (
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
        </>
    );
}

export default ControleGroups;