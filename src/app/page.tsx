'use client';

import { useState, useEffect, useMemo } from 'react'

import { codeSnippets } from '@/data/codeSnippets.jsx';
import ListItem from '@/components/ListItem/ListItem';
import Filters from '@/components/Filters/Filters';

import { themes } from '@/data/themes'; 
import { categories } from '@/data/categories'; 

export default function Home() {

  const [selectedTheme, setSelectedTheme] = useState('all');  // Default theme is 'all'
  const [selectedCategory, setSelectedCategory] = useState('all');  // Default category is 'all'

  // Filtering logic
  const filteredSnippets = useMemo(() => {
    return codeSnippets.filter((snippet) => {
      // If the snippet is in "archive" category, only show it when selectedCategory is "archive"
      if (snippet.category === 'archive' && selectedCategory !== 'archive') {
        return false;
      }
  
      const isCategoryMatch = selectedCategory === 'all' || snippet.category === selectedCategory;
      const isThemeMatch =
        selectedTheme === 'all' ||
        snippet.themes.includes(selectedTheme) ||
        snippet.themes.includes('all');
  
      return isCategoryMatch && isThemeMatch;
    });
  }, [selectedCategory, selectedTheme]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);  // Update selected category
  };

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);  // Update selected theme
  };


  return (
    <>
        <div className="l-wrap">
          <div className="l-contents">

              {/* <PopupButton text="Custom CSS/Code" content={cssList} id="CustomCSSPopup" /> */}
              {/*<PopupButton text="Theme Options" content={themeOptions} id="ThemeOptionsPopup" />-->*/}
       
              <Filters
              themes={themes}
              categories={categories}
              selectedCategory={selectedCategory}
              selectedTheme={selectedTheme}
              handleCategoryChange={handleCategoryChange}
              handleThemeChange={handleThemeChange}
            />
              

          </div>
        </div>

        <div className="l-wrap">
          <div className="l-main">
     

            <ul className="images">
              {filteredSnippets.map( (item) => (
                <ListItem key={item.id} {...item} />
              ))}
            </ul>
          </div>
        </div>
    </>
  );
}
