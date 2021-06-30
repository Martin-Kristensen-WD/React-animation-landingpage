import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero'; 
import Products from './components/Products'; 
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Loader from './components/Loader'; 
import Footer from './components/Footer'; 



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Vælg din favorite pizza' data={productData}/>
      <Feature />
      <Products heading='Lækre desserter til dig' data={productDataTwo}/>
      <Loader/>
      <Footer />
    </Router>
  );
}

export default App;
