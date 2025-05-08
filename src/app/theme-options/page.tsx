'use client';

import { useState, useEffect, useMemo } from 'react'

import { themeOptions } from '@/data/themeOptions.jsx';
import Filters from '@/components/Filters/Filters';
import ThemeOptionsItem from '@/components/ThemeOptionsItem/ThemeOptionsItem';
import { themes } from '@/data/themes'; 


export default function ThemeOptions() {

  const [selectedOptionsTheme, setSelectedOptionsTheme] = useState('all');  // Default theme is 'all'
  const handleOptionsThemeChange = (theme: string) => {
    setSelectedOptionsTheme(theme);  // Update selected theme
  };

    const filteredOptions = useMemo(() => {
      return themeOptions.filter((snippet) => {

        const isThemeMatch =
        selectedOptionsTheme === 'all' ||
          snippet.themes.includes(selectedOptionsTheme) ||
          snippet.themes.includes('all');
    
        return isThemeMatch;
      });
    }, [selectedOptionsTheme]);

  return (
    <>
        <div className="l-wrap">
          <div className="l-contents">

             <Filters
              themes={themes}
              selectedTheme={selectedOptionsTheme}
              handleThemeChange={handleOptionsThemeChange}
            />
              

          </div>
        </div>

        <div className="l-wrap">
          <div className="l-main">
     
              <ul className="theme-options">
                {filteredOptions.map( (item) => (
                  <ThemeOptionsItem key={item.id} {...item} />
                ))}
              </ul>

          </div>
        </div>
    </>
  );
}
