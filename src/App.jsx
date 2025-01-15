import { useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { codeSnippets } from './codeSnippets.jsx';
import { customCSS } from './customCSS.jsx';
import { themeOptions } from './themeOptions.jsx';
import PopupButton from "./components/PopupButton.jsx";

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





function App() {
  const [count, setCount] = useState(0)

  const [codeSnippetsList, setCodeSnippetsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    setCodeSnippetsList(codeSnippets);
  }, []);

  var filteredList = useMemo(getFilteredList, [selectedCategory, codeSnippetsList]);


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
            <PopupButton text="Custom CSS/Code" content={cssList} id="CustomCSSPopup" />
            {/*<PopupButton text="Theme Options" content={themeOptions} id="ThemeOptionsPopup" />-->*/}


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
