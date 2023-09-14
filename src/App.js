import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookContent from './components/BookContent/BookContent';
import SearchContent from './components/SearchContent/SearchContent';
import BookPage from './pages/Books/BookPage/BookPage';

function App() {
  const [searchData, setSearchData] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [orderBy, setOrderBy] = useState('relevance');
  const [startIndex, setStartIndex] = useState(0);

  return (
    <div className="App">
      <SearchContent
        setSearchData={setSearchData}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        setStartIndex={setStartIndex}
      />
      <Routes>
        <Route
          path="/"
          element={
            <BookContent
              searchData={searchData}
              filterBy={filterBy}
              orderBy={orderBy}
              startIndex={startIndex}
              setStartIndex={setStartIndex}
            />
          }
        />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
    </div>
  );
}

export default App;
