import React from 'react'

const items = ['Home','TV Shows','Movies','New & Popula','My List']

export const MainNavigation = ({selectedItem, setSelectedItem, isProcessing}) => {
return (
<div>
    <ul className='flex-row ml-7 gap-7 hidden lg:flex'>
        {items.map((item, index) => (
        <li key={index} className={`text-white cursor-pointer hover:text-fray-300 transition ${ item === selectedItem
            ? 'font-semibold' : 'font-light' }`} onClick={()=> {    
            setSelectedItem(item);
            }}
            >
            {item}
        </li>
        ))}
    </ul>

</div>
)
}