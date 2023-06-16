import React, { useEffect, useState } from 'react';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          if (searchInput.trim() !== '') {
            try {
              const response = await fetch("https://webscraper-1opx.onrender.com/products");
              const data = await response.json();
              setSuggestions(data);
            } catch (error) {
              console.error('Error fetching suggestions:', error);
            }
          } else {
            setSuggestions([]);
          }
        };
    
        fetchData();
      }, [searchInput]);

      const handleInputChange = (e) => {
        setSearchInput(e.target.value);
      };
    
      const handleSuggestionClick = (suggestion) => {
        setSearchInput(suggestion);
        setSuggestions([]);
      };

  return (
    <div className='search'>
      <input
        type="text"
       value={searchInput}
       onChange={handleInputChange}
        placeholder="Search here"
      />
       <ul className='pagelist'>
        {suggestions.map((suggestion,idx) => (
          <li key={idx} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion.title.slice(0, 65)}
      
          </li>
        ))}
      </ul>

      <button >Search</button>

     
    </div>
  );
};

export default Search;