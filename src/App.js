import { useState } from 'react';
import './App.css';
import BookContent from './components/BookContent/BookContent';
import SearchContent from './components/SearchContent/SearchContent';

function App() {
  const [filterBy, setFilterBy] = useState('all');
  const [orderBy, setOrderBy] = useState('relevance');

  return (
    <div className="App">
      <SearchContent
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <BookContent filterBy={filterBy} orderBy={orderBy} />
    </div>
  );
}

export default App;
