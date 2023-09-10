import { useState } from 'react';
import './App.css';
import BookContent from './components/BookContent/BookContent';
import SearchContent from './components/SearchContent/SearchContent';

function App() {
  const [orderBy, setOrderBy] = useState('relevance');

  return (
    <div className="App">
      <SearchContent
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
      <BookContent orderBy={orderBy} />
    </div>
  );
}

export default App;
