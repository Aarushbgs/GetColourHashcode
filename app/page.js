"use client"

import React, { useState } from 'react';
import tinycolor from 'tinycolor2';
import { CiSearch } from "react-icons/ci";





const page = () => {
  const [colorName, setColorName] = useState('');
  const [hashCode, setHashCode] = useState('');

  const convertToHash = () => {
    const color = tinycolor(colorName);
    const hash = color.toHexString();
    setHashCode(hash);
  };

  const handleInputChange = (event) => {
    setColorName(event.target.value);
  };

  return (
   <>
   <div className='Container'>
<h1>Search Colour and get the Hash code</h1>
<div className='left'>
<input
type="text"
placeholder="colour search karo bhai..."
value={colorName}
 onChange={handleInputChange}

/>
<button onClick={convertToHash}><CiSearch size={20} /></button>

</div>

{hashCode && (
        <div className='right'>
          <p>Hash Code for {colorName}: {hashCode}</p>
          <div style={{ width: '200px', height: '20px', backgroundColor: hashCode }}></div>
        </div>
      )}
</div>
   
   
   </>
  )
}

export default page

