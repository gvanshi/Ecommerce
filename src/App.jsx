import './App.css';

import Footer from './component/Footer';
import MyNavbar from './component/MyNavbar';
import ProductGrid from './component/ProductGrid';
import Hero from './component/Hero';
import ProductList from '../src/component/ProductList';
import Carouselcmp from './component/Carouselcmp';

function App() {
 
  return (

    <div className="App">

  <MyNavbar/>
  <Hero/>
  <Carouselcmp/>


  <h1 className="text-center mb-4 mt-5 category-heading ">Shop by Category</h1>

  <ProductGrid/>
  <h1 className="text-center mb-4 mt-5 category-heading ">Products</h1>

  <ProductList/>

  <Footer/>

    </div>

  );
}

export default App;
