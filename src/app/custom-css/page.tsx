'use client';

import { useState, useEffect, useMemo } from 'react'
import CSSList from '@/components/CSSList/CSSList';


export default function CustomCSS() {


  const [inputText, setInputText] = useState("");
  let inputHandler = (e: React.ChangeEvent<HTMLInputElement>)  => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  

  return (
    <>
        <div className="l-wrap">
          <div className="l-contents">

          <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={inputHandler}
          />
              

          </div>
        </div>

        <div className="l-wrap">
          <div className="l-main">
     
            <CSSList searchTerm={inputText} />

          </div>
        </div>
    </>
  );
}
