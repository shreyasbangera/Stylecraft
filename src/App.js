import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import Footer from './components/Footer';
import { useRef } from 'react';


function App() {
  const footerRef = useRef()
  const theme = createTheme({
    typography: {
      fontFamily: ['Ubuntu', 'sans-serif'].join(',')
    }})
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
