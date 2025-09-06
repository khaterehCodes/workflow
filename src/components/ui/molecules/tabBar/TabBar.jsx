import React from 'react';
import { tabs } from '../../../../core/array/Array';
function TabBar({ IsTab, setIsTab }) {
    return (
        <div className='w-[650px] h-[40px] flex border-b-[2px] border-[#E4E4E7] justify-between'>
            {tabs.map((item) => (
                <React.Fragment key={item.id}>
                    <div className={`p-1 flex items-center cursor-pointer ${IsTab === item.id ? 'text-[#4763E4] border-b-[2px] border-[#4763E4]':'text-[#71717A]'}`}
                        onClick={() => setIsTab(item.id)}
                    >
                        {item.label}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default TabBar;