import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='body'>
    <Navbar />
    <Routes>
    <Route exact path ='/' element ={<Home />} />
    <Route path ='/products' element ={<Products />} />
    </Routes>
    </div>
  );
}

export default App;
