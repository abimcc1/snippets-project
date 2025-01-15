import { useState } from 'react'
import CSSList from "./CSSList.jsx";

function PopupButton(props) {

    const handleOpenPopup = (event) => {
        document.getElementById(props.id).style.display = "block";
    }
    const handleClosePopup = (event) => {
        document.getElementById(props.id).style.display = "none";
    }

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
  
    let buttonID = props.id + "Button";
  
    return (
      <>
      <button id={buttonID} onClick={handleOpenPopup}>{ props.text }</button>
  
      <div id={props.id}>
        <a className='close-button' onClick={handleClosePopup}>x</a>
          <h2>{ props.text }</h2>
          <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={inputHandler}
          />
          <CSSList type={props.id} list={props.content} input={inputText} />
      </div>
    </>
    );
  }

  export default PopupButton;