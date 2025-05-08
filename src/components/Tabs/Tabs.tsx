'use client';

import  './Tabs.css';
import { usePathname } from 'next/navigation';

export default function Tabs() {
    const pathname = usePathname();

    return (
      <> 
      <div className="l-wrap">
        <div className="l-tabs">
        <ul className="nav-tabs">
            <li className={pathname === '/' ? 'active' : ''}><a href="/">Code Snippets</a></li>
            <li className={pathname === '/custom-css' ? 'active' : ''}><a href="/custom-css">Custom CSS</a></li>
            <li className={pathname === '/theme-options' ? 'active' : ''}><a href="/theme-options">Theme Options</a></li>
        </ul>
        </div>
     </div>
      </>
    )
  
  }
