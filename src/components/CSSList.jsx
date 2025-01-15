import { useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { customCSS } from '../customCSS.jsx';

function CSSList(props) {

    const contentToSort = props.list;

    const handleFocus = (event) => {
        const parentElement = event.target.parentNode;
        const targetElement = parentElement.firstElementChild;
        targetElement.select();
        document.execCommand('copy');
      }

    const filteredData = contentToSort.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            if (el.title.toLowerCase().includes(props.input)) {
                return el;
            }
            else if (el.theme) {
                if (el.theme.toLowerCase().includes(props.input)) {
                    return el;
                }
            }
            //else if (el.content.toLowerCase().includes(props.input)) {
                //return el;
            //}
            else {
                return;
            }
        }
    })

    if (props.type == "CustomCSSPopup") {
        return (
            <>
            <ul className="custom-css-list">
                {filteredData.map((item) => (
                    <li key={item.id}>
    
                    <h3>{(item.theme !== undefined) ? (<span className="theme">{item.theme}</span>) : "" }{item.title}</h3>
                    <p>{item.content}</p>
    
                    {item.codeblock.map( (item) => (
                        <>
                        <div className="code-area">
                            {(item.text !== undefined) ? (<div className="code-description">{item.text}</div>) : "" }
                            <div className="location">Where to add: <span>{item.location}</span></div>
                            <div id="textarea">
                                <textarea readOnly value={item.code}   />
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

    if (props.type == "ThemeOptionsPopup") {
        return (
            <>
            <ul className="theme-options-list">
                {filteredData.map((item) => (
                    <li key={item.id}>
    
                    <h3>{(item.theme !== undefined) ? (<span className="theme">{item.theme}</span>) : "" }{item.title}</h3>
                    <p>{item.content}</p>
    
                    {item.options.map( (item) => (
                        <>
                        <div className="code-area">
                            {(item.title !== undefined) ? (<div className="code-description">{item.title}</div>) : "" }
                            <img src={item.image} alt="" />
                        </div>
                        </>
                    ))}
    
                    </li>
                ))}
            </ul>
            </>
        )
    }


}

export default CSSList;