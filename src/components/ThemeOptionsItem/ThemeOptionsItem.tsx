'use client';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCopy } from '@fortawesome/free-solid-svg-icons'
import  './ThemeOptionsItem.css';

export default function ThemeOptionsItem(props:any) {

    
      return (
        <li key={props.id} id={props.id}>
            <div className="l-options__title">
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
                {(props.title !== undefined) ? (<h2>{props.title}</h2>) : "" }
                {(props.content !== undefined) ? (<p>{props.content}</p>) : "" }
            </div>
          <div className="l-options__options">
            {props.options.map( (item:any) => (
              <>
              <div className="l-options__option">
              <h3>{item.title}</h3>
              <img src={item.image} />
              </div>
              </>
            ))}
    
          </div>
        </li>
      ); 
}