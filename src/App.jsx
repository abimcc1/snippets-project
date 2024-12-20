import { useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { codeSnippets } from './codeSnippets.jsx';
import { tips } from './tips.jsx';
import { customCSS } from './customCSS.jsx';
import List from "./components/CSSList.jsx";
import CustomCSSButton from "./components/CustomCSSButton.jsx";

import './App.css'



function ListItem(props) {
  const handleFocus = (event) => {
    const parentElement = event.target.parentNode;
    const targetElement = parentElement.firstElementChild;
    targetElement.select();
    document.execCommand('copy');
  }

  return (
    <li id={props.id} key={props.id}>
      <div className="l-main__image">
        <img src={props.image} alt="" />
      </div>
      <div className="l-main__code">
      {(props.title !== undefined) ? (<h2>{props.title}</h2>) : "" }
        {props.codeblock.map( (item) => (
          <>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <div id="textarea">
            <textarea readOnly value={item.code}   />
            <button onFocus={handleFocus}>Copy</button>
          </div>
          </>
        ))}

      </div>
    </li>
  ); 
}



function TipsButton(props) {

  const handleOpenPopup = (event) => {
      document.getElementById("TipsPopup").style.display = "block";
  }
  const handleClosePopup = (event) => {
      document.getElementById("TipsPopup").style.display = "none";
  }


  return (
    <>
    <button id="TipsPopupButton" onClick={handleOpenPopup}>Tips</button>

    <div id="TipsPopup">
      <a className='close-button' onClick={handleClosePopup}>x</a>
        <h2>Tips</h2>
        <ul class="tips">
        {props.tipsList.map( (item) => (
              <ListItem {...item} />
        ))}
        </ul>
    </div>
  </>
  );
}





function App() {
  const [count, setCount] = useState(0)

  const [codeSnippetsList, setCodeSnippetsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    setCodeSnippetsList(codeSnippets);
  }, []);

  var filteredList = useMemo(getFilteredList, [selectedCategory, codeSnippetsList]);


  const [tipsList, settipsList] = useState([]);
  useEffect(() => {
    settipsList(tips);
  }, []);

  const [cssList, setcssList] = useState([]);
  useEffect(() => {
    setcssList(customCSS);
  }, []);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.id);
  }
  
  function getFilteredList() {
    if (!selectedCategory) {
      return codeSnippetsList;
    }
    return codeSnippetsList.filter((item) => item.category === selectedCategory);
  }


  const categories = [
    "all",
    "text",
    "images",
    "blocks",
    "reviews",
    "partners",
    "social",
    "slides"
  ];


  return (
    <>
        <div className="l-contents">
            <h1>Code Snippets</h1>
            {/*<TipsButton tipsList={tipsList} />*/}
            <CustomCSSButton cssList={cssList} />


            <ul className="tabs">
              {categories.map( (item) => (
                <li><a id={ (item === "all") ? "" : item } onClick={handleCategoryChange} className={(selectedCategory === item) ? "active" : ""}>{item}</a></li>
              ))}
            </ul>

        </div>

        <div className="l-main">

          <ul className="images">
            {filteredList.map( (item) => (
              <ListItem {...item} />
            ))}
          </ul>

        </div>

    </>
  )
}

export default App
