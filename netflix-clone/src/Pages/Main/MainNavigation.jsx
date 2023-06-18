import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const items = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

export const MainNavigation = ({ selectedItem, setSelectedItem, isProcessing }) => {
const [isLoading, setIsLoading] = useState(false);

const handleItemClick = (item) => {
    setIsLoading(true);
    setSelectedItem(item);
    setTimeout(() => {
    setIsLoading(false);
    }, 1500);
};

return (
    <div>
        <ul className="flex-row ml-7 gap-7 hidden lg:flex">
            {items.map((item, index) => (
        <li key={index} className={`text-white cursor-pointer hover:text-gray-300 transition ${ item===selectedItem ? 'font-semibold' : 'font-light' }`} onClick={()=> handleItemClick(item)}
        >
        {item}
        </li>
        ))}
    </ul>
    {isLoading && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <ClipLoader color="red" loading={true} size={50} />
    </div>
    )}
    </div>
    );
};
