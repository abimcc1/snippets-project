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
      <div className="l-main__code--header">
        {(props.title !== undefined) ? (<h2>{props.title}</h2>) : "" }
        {
          // Only render the list if "all" is not in the array
          !props.themes.includes('all') ? (
            <ul className="themes">
              {props.themes.map((theme, index) => (
                <li key={index}>{theme}</li>
              ))}
            </ul>
          ) : null // Render nothing if "all" is present
        }
        </div>
        {props.codeblock.map( (item) => (
          <>
          <h3>{item.name}</h3>
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

  const [codeSnippetsList, setCodeSnippetsList] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    setCodeSnippetsList(codeSnippets);
  }, []);

  var filteredList = useMemo(getFilteredList, [selectedCategory, selectedTheme, codeSnippetsList]);


  const [cssList, setcssList] = useState([]);
  useEffect(() => {
    setcssList(customCSS);
  }, []);

  function handleCategoryChange(event) {
    const id = event.target.id;
    if (themes.includes(event.target.value)) {
      setSelectedTheme(event.target.value);  // If the clicked item is a theme, update selectedTheme
    } else {
      setSelectedCategory(id);  // Otherwise, update selectedCategory
    }
  }
  
  function getFilteredList() {
    let filtered = codeSnippetsList;
    
    // If selectedCategory is 'all', exclude 'archive' category
    if (selectedCategory === "all") {
      filtered = filtered.filter((item) => item.category !== "archive");
    } else if (selectedCategory && selectedCategory !== "all") {
      // Filter by selected category if it's not 'all'
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }
    
    // Filter by theme if selectedTheme is not 'all'
    if (selectedTheme && selectedTheme !== "all") {
      filtered = filtered.filter((item) => {
        return (
          Array.isArray(item.themes) &&
          (item.themes.includes(selectedTheme) || item.themes.includes("all"))
        ); // Check if the theme is selected or if the theme is "all"
      });
    }


    return filtered;
  }

  const themes = [
    "all",
    "premier-1",
    "premier-2",
    "premier-3",
    "premier-4",
    "premier-5",
    "premier-6",
    "premier-7",
    "premier-8",
    "premier-9",
    "premier-10",
    "premier-11",
    "essential-1",
    "essential-2",
    "essential-3",
    "essential-4"
  ]

  const categories = [
    "all",
    "text",
    "images",
    "blocks",
    "reviews",
    "partners",
    "social",
    "slides",
    "archive"
  ];


  return (
    <>
        <div className="l-contents">
            <h1>Code Snippets</h1>
            <PopupButton text="Custom CSS/Code" content={cssList} id="CustomCSSPopup" />
            {/*<PopupButton text="Theme Options" content={themeOptions} id="ThemeOptionsPopup" />-->*/}


            <div class="filters">
              <div class="theme-filter">
                <label>Theme:</label>
                <select onChange={handleCategoryChange}>
                  {themes.map( (item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <ul className="tabs categories">
                {categories.map( (item) => (
                  <li className={item === "archive" ? "archive" : ""}><a id={item} onClick={handleCategoryChange} className={selectedCategory === item ? "active" : ""}>{item}</a></li>
                ))}
              </ul>

            </div>
            

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
