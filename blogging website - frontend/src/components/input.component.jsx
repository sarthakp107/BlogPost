import React from 'react'
import { FaUser } from "react-icons/fa";
import '@flaticon/flaticon-uicons/css/all/all.css';

export const InputBox = ({name , type, id, value, placeholder}) => {
  return (
    <div className='relative w-[100%] mb-4'>
        <input type={type} 
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        className='input-box'
        />
<i className="fi fi-user input-icon text-black"></i> 


    </div>
  )
}
