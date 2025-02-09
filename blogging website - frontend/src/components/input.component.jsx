import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import '@flaticon/flaticon-uicons/css/all/all.css';

export const InputBox = ({ name, type, id, value, placeholder }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className='relative w-[100%] mb-4'>
      <input 
        type={type === "password" ? passwordVisible ? "text" : "password" : type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        className='input-box'
      />
      {type === "password" && (
        <div 
          className='input-icon absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer'
          onClick={() => setPasswordVisible(prev => !prev)}
        >
          {passwordVisible ? <FaEyeSlash className='text-xl text-gray-500 input-icon left-[auto] right-4' /> : <FaEye className='text-xl text-gray-500 input-icon left-[auto] right-4' />}
        </div>
      )}
    </div>
  );
}
