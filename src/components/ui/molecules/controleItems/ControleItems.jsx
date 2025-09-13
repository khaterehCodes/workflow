import React from 'react';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import Button from '../../atoms/customButton/Button';
import { removeUser } from '../../../../core/redux/feature/ControleSet';
function ControleItems({items}) {
    const dispatch = useDispatch();
    return (
        <div className='w-[1200px] h-auto'>
            {items.map((item) => (
                <React.Fragment key={item.id}>
                    <div className='w-[1200px] h-[50px] flex items-center justify-around text-[14px] text-[#27272A]'>
                        <div className='w-[342px] h-[50px]'>
                            {item.label}
                        </div>
                        <div className='w-[342px] h-[50px]'>
                            {item.description}
                        </div>
                        <div className='w-[342px] h-[50px] flex items-center justify-center gap-1'>
                            <Button
                                className={'w-[169px] h-[34px] bg-white border-[1px] border-[#5C73DB] rounded-[10px] text-[#5C73DB] hover:bg-[#5C73DB] hover:text-white text-[12px]'}>
                                Modifier
                            </Button>
                            <Button
                                onClick={() => dispatch(removeUser(item.id))}
                                className={'w-[169px] h-[34px] rounded-[10px] text-white text-[12px] bg-[#DC2626]'}>
                                Supprimer
                            </Button>
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[#F4F4F5]'></div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default ControleItems;