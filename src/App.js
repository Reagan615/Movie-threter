import './style/index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import AddMovie from './components/AddMovie';
import MovieDetail from './components/MovieDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path='/' element={< HomePage />}></Route>
          <Route path='/add-movie' element={< AddMovie />}></Route>
          <Route path='/movies/:title' element={<MovieDetail />}></Route>
          <Route path='/not-found' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

function HomePage() {
  return(
    <>
      <Header />
      <Catalog />
      <Footer />
    </>
  )
}
export default App;