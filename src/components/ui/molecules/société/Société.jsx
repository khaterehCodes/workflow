import Button from '../../atoms/customButton/Button';
import H2 from '../../atoms/customH2/H2'
import Icons from '../../atoms/icons/Icons';
import Input from '../../atoms/customInput/Input';
import { SociétéTabs } from '../../../../core/array/Array';
import React from 'react';
import SociétéUser from '../sociétéUser/SociétéUser';
import { useSelector } from 'react-redux';
function Société() {
    const countUser = useSelector(state => state.items.length)
    const formatCount = String(countUser).padStart(2, '0')
    return (
        <div className="w-[1300px] h-[690px] flex flex-col items-center bg-white rounded-[12px]">
            <div className="w-[1200px] h-[40px] flex items-center justify-between m-[10px]">
                <H2>Liste des sociétés</H2>
                <Button className={'w-[85px] h-[35px] bg-[#4763E4] rounded-[10px] flex items-center justify-around text-white'}>
                    Ajouter
                    <Icons name={'plus'} />
                </Button>
            </div>
            <div className='w-[1200px] h-[40px] rounded-[10px] border-[1px] border-[#4763E480] flex items-center p-4 gap-2'>
                <Icons name={'search'} />
                <Input className='outline-none w-[1000px] h-[20px]' placeholder={'Vous cherchez une société...'}></Input>
            </div>
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
            <div className='w-[1200px] h-[40px] bg-green-300 flex items-center justify-between'>
                <H2 className={'text-[#4763E4]'}>
                    {formatCount}&nbsp;
                    sociétés
                </H2>
            </div>
        </div>
    );
}

export default Société;