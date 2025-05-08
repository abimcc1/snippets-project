import  './CSSList.css';

import { useEffect } from 'react'
import { customCSS } from '@/data/customCSS.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

function CSSList({searchTerm = ""}) {

    const contentToSort = customCSS;

    const handleFocus = (event) => {
        const parentElement = event.target.parentNode;
        const targetElement = parentElement.firstElementChild;
        targetElement.select();
        document.execCommand('copy');
    }

    const term = searchTerm.trim().toLowerCase();

    const filteredData = term === ''
      ? contentToSort
      : contentToSort.filter((el) => {
          const inTitle = el.title?.toLowerCase().includes(term);
          const inTheme = el.theme?.toLowerCase().includes(term);
          return inTitle || inTheme;
    });


    useEffect(() => {
        const textareas = document.querySelectorAll('textarea.auto-height');
        textareas.forEach((textarea) => {
          textarea.style.height = 'auto';
          textarea.style.height = `${textarea.scrollHeight}px`;
        });
      }, []);

        return (
            <>
            <ul className="custom-css-list">
                {filteredData.map((item) => (
                    <li key={item.id}>
                        <div  className="custom-css__text">
                            {(item.theme !== undefined) ? (<div className="theme">{item.theme}</div>) : "" }
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>

                        </div>
    
                    {item.codeblock.map( (item, idx) => (
                        <>
                        <div className="custom-css__code" key={idx}>
                            {(item.text !== undefined) ? (<div className="code-description">{item.text}</div>) : "" }
                            <div className="location">Where to add: <span>{item.location}</span></div>
                            <div id="textarea">
                                <textarea readOnly value={item.code} className="auto-height" />
                                <button onFocus={handleFocus}>Copy</button>
                            </div>
                        </div>
                        </>
                    ))}
    
                    </li>
                ))}
            </ul>
            </>
        )
    



}

export default CSSList;