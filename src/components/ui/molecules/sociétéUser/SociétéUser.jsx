import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Icons from '../../atoms/icons/Icons';
import { removeUser, editUser } from '../../../../core/redux/feature/SociétéUser'
function SociétéUser() {
    const items = useSelector(state => state.items)
    const dispatch = useDispatch();
    return (
        <div className='w-[1200px] h-auto'>
            {items.map((item) => (
                <React.Fragment key={item.id}>
                    <div className='w-[1200px] h-[50px] flex items-center justify-around text-[14px] text-[#27272A]'>
                        <div className='w-[97px] h-[50px]'>
                            {item.name}
                        </div>
                        <div className='w-[97px] h-[50px]'>
                            {item.country}
                        </div>
                        <div className='w-[97px] h-[50px]'>
                            {item.city}
                        </div>
                        <div className='w-[97px] h-[50px]'>
                            {item.branch}
                        </div>
                        <div className='w-[97px] h-[50px] break-words whitespace-normal'>
                            {item.email}
                        </div>
                        <div className='w-[97px] h-[50px]'>
                            {item.phone}
                        </div>
                        <div className='w-[97px] h-[50px] break-words whitespace-normal'>
                            {item.web}
                        </div>
                        <div className='w-[97px] h-[50px]'>
                            {item.company}
                        </div>
                        <div className='w-[97px] h-[50px]'>
                            {item.number}
                        </div>
                        <div className='w-[97px] h-[50px] flex items-center justify-center gap-1'>
                            <div onClick={() => dispatch(removeUser(item.id))} className='cursor-pointer'>
                                <Icons name={'removeIcon'} />
                            </div>
                            <div onClick={() => onEdit(item)} className='cursor-pointer'>
                                <Icons name={'editIcon'} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[#F4F4F5]'></div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default SociétéUser;