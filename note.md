created context store for all images and data along with module and tab as properties.

components => 1.empower women img, 2.7*7 grid icon, 3.reusable module page.
Home => comp-1 + comp-2 + text + button to page2
page2 => comp-1 + comp-2 + button to home + comp-3s

added animation class toggle with ternary operator and useState to toggle button click animation on 2nd page.
all 5 module pages as reusable components 

<!-- bing answer to search functionality that's given on last page -->
You can create a search feature in your webapp that searches the data stored in the context API's store by following these steps:

1. Create a new context for your search feature.
2. Add a state to your search context that will hold the search query and search results.
3. Create a function that will update the state with the search query and results.
4. In your component that needs to use the search feature, import the search context and use its state and function to perform the search.

Here is an example of how you can implement this:

```javascript
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Perform your search here
    // Update the state with the results
    setSearchQuery(query);
    setSearchResults(results);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, searchResults, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
```

In this example, we create a new context called `SearchContext` and add state for `searchQuery` and `searchResults`. We also create a function called `handleSearch` that will update the state with the search query and results.

You can then use this context in any component that needs to perform a search. For example:

```javascript
import React, { useContext } from 'react';
import { SearchContext } from './SearchContext';

const MyComponent = () => {
  const { searchQuery, searchResults, handleSearch } = useContext(SearchContext);

  return (
    <div>
      <input type="text" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};
```

In this example, we import the `SearchContext` and use its state and function to perform a search. We also render the search results in a list.

I hope this helps! Let me know if you have any more questions.