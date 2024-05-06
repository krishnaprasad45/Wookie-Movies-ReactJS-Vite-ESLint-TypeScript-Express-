import './App.css'
import RowPost from './components/RowPost/RowPost';
import SearchAppBar from './components/SearchNav';

function App() {
  return (
    <>
      <div className="app-container">
        <SearchAppBar />
        <div className="scrollable-content">
          <RowPost />
        </div>
      </div>
    </>
  )
}


export default App
