'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import  './ListItem.css';

export default function ListItem(props:any) {


    // Copy button function
    const handleFocus = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const parentElement = event.target.parentElement;
      if (!parentElement) return;
    
      const targetElement = parentElement.firstElementChild as HTMLInputElement | null;
      if (!targetElement) return;
    
      targetElement.select();
      document.execCommand('copy');
    };
    
      return (
        <li id={props.id}>
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
                  {props.themes.map((theme:string, index:number) => (
                    <li key={index}>{theme}</li>
                  ))}
                </ul>
              ) : null // Render nothing if "all" is present
            }
            </div>
            {props.codeblock.map( (item:any) => (
              <>
              <h3>{item.name}</h3>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <div id="textarea">
                <textarea readOnly value={item.code}   />
                <button onFocus={handleFocus}><FontAwesomeIcon icon={faCopy} className="fa-fw" /> </button>
              </div>
              </>
            ))}
    
          </div>
        </li>
      ); 
}