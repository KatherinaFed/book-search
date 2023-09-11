import { useState } from 'react';
import './App.css';
import BookContent from './components/BookContent/BookContent';
import SearchContent from './components/SearchContent/SearchContent';

function App() {
  const [searchData, setSearchData] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [orderBy, setOrderBy] = useState('relevance');

  console.log('App search data: ', searchData)
  
  return (
    <div className="App">
      <SearchContent
        setSearchData={setSearchData}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <BookContent
        searchData={searchData}
        filterBy={filterBy}
        orderBy={orderBy}
      />
    </div>
  );
}

export default App;
