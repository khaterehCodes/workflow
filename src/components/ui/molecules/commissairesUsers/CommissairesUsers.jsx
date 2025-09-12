import React from 'react';
import { useDispatch } from 'react-redux'
import Icons from '../../atoms/icons/Icons';
import { removeUser } from '../../../../core/redux/feature/CommissairesMember';
function CommissairesUsers({ member }) {
    const dispatch = useDispatch();
    return (
        <div className='w-[1200px] h-auto'>
            {member.length === 0 ? (<></>)
                : (<>
                    {member.map((item) => (
                        <React.Fragment key={item.id}>
                            <div className='w-[1200px] h-[50px] flex items-center justify-around text-[14px] text-[#27272A]'>
                                <div className='w-[108px] h-[50px]'>
                                    {item.name}
                                </div>
                                <div className='w-[108px] h-[50px]'>
                                    {item.lastName}
                                </div>
                                <div className='w-[108px] h-[50px]  break-words whitespace-normal'>
                                    {item.identity}
                                </div>
                                <div className='w-[108px] h-[50px]'>
                                    {new Date(item.birth).toLocaleDateString('fr-FR')}
                                </div>
                                <div className='w-[108px] h-[50px] break-words whitespace-normal'>
                                    {item.area}
                                </div>
                                <div className='w-[108px] h-[50px]  break-words whitespace-normal'>
                                    {item.email}
                                </div>
                                <div className='w-[108px] h-[50px] break-words whitespace-normal'>
                                    {item.web}
                                </div>
                                <div className='w-[108px] h-[50px]'>
                                    {item.phone}
                                </div>
                                <div className='w-[108px] h-[50px] flex items-center justify-center gap-1'>
                                    <div onClick={() => dispatch(removeUser(item.id))} className='cursor-pointer group relative'>
                                        <Icons name={'removeIcon'} />
                                        <div className='absolute top-[110%] left-[-100%] -translate-x-1/2 hidden group-hover:flex items-center justify-center'>
                                            <Icons name={'removeHover'} />
                                        </div>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <Icons name={'editIcon'} />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-[#F4F4F5]'></div>
                        </React.Fragment>
                    ))}
                </>)}
        </div>
    );
}

export default CommissairesUsers;