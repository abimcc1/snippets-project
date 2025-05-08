'use client';
import React from 'react';


interface FiltersProps {
  categories?: string[],
  themes: string[],
  selectedCategory?: string;
  selectedTheme: string;
  handleCategoryChange?: (category: string) => void;
  handleThemeChange: (theme: string) => void;
}

import './Filters.css';  // Add any CSS you need for styling

const Filters: React.FC<FiltersProps> = ({
  categories = [],
  themes,
  selectedCategory,
  selectedTheme,
  handleCategoryChange,
  handleThemeChange,
}) => {
  return (
    <div className="filters">
      {/* Theme Filter Dropdown */}
      <div className="theme-filter">
        <label htmlFor="theme-select">Theme:</label>
        <select
          id="theme-select"
          value={selectedTheme}
          onChange={(e) => handleThemeChange(e.target.value)}
        >
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>

      {/* Category Filter as List of Links */}
      <div className="category-filter">
        <ul className="tabs categories">
          {categories.map((category) => (
            <li key={category} className={category === 'archive' ? 'archive' : ''}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryChange?.(category);
                }}
                className={selectedCategory === category ? 'active' : ''}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
