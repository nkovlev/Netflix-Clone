import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const MobileMenu = ({ selectedItem, setSelectedItem, visible }) => {
  const items = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];
  const [isLoading, setIsLoading] = useState(false);

  const handleItemClick = (item, event) => {
    event.stopPropagation();
    setIsLoading(true);
    setSelectedItem(item);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
      <ul className="flex-col gap-4">
        {items.map((item, index) => (
          <li
            key={index}
            className={`text-white cursor-pointer hover:text-gray-300 transition ${item === selectedItem ? 'font-semibold' : 'font-light'
              }`}
            onClick={(e) => handleItemClick(item, e)}
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
  )
}

export default MobileMenu;
