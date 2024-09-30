import { useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import CSSList from "./CSSList.jsx";

function CustomCSSButton(props) {

    const handleOpenPopup = (event) => {
        document.getElementById("CustomCSSPopup").style.display = "block";
    }
    const handleClosePopup = (event) => {
        document.getElementById("CustomCSSPopup").style.display = "none";
    }

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
  
  
    return (
      <>
      <button id="CustomCSSPopupButton" onClick={handleOpenPopup}>Custom CSS/Code</button>
  
      <div id="CustomCSSPopup">
        <a className='close-button' onClick={handleClosePopup}>x</a>
          <h2>Custom CSS/Code</h2>
          <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={inputHandler}
          />
          <CSSList input={inputText} />
      </div>
    </>
    );
  }

  export default CustomCSSButton;