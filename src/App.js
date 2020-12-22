import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';

import Products from './components/Products';
import { productData , productDataTwo } from './components/Products/data';
import { GlobalStyle } from './globalStyles';


function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>

  
    
     <Hero></Hero>
     <Products heading='As nossas pizzas mais famosas' data={productData}></Products>
    <Featured></Featured>
    <Products heading='Aprecie nossas sobremesas!' data={productDataTwo}></Products>
    <Footer></Footer>
    </Router>
    
  
  );
}

export default App;
