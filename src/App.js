import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import { ThemeProvider } from '@mui/material';
import Footer from './components/Footer';
import { useRef } from 'react';
import { theme } from './utils/theme';


function App() {
  
  const footerRef = useRef()

  return (
    <ThemeProvider theme={theme}>
    <div className='body'>
    <Navbar footerRef={footerRef}/>
    <Routes>
    <Route exact path ='/' element ={<Home />} />
    <Route path ='/products' element ={<Products />} />
    </Routes>
    <Footer ref={footerRef}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
