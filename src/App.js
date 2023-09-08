import './App.css';
import BookContent from './components/BookContent/BookContent';
import SearchContent from './components/SearchContent/SearchContent';

function App() {
  return (
    <div className="App">
        <SearchContent />
      <div className='book-content'>
        <BookContent />
      </div>
    </div>
  );
}

export default App;
