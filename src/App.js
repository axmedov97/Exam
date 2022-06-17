import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import Banners from './Banners';
import Products from './components/Products';
import Shoes  from './components/Shoes';
import Clothes from './components/Clothes'
import Categories from './components/Categories'

function App() {
  return (
    <div className="App">
       {/* <Header/> */}
       <Category/>
       <Banners/>
       {/* <Categories/> */}
       <Shoes/>
       <Clothes/>
       <Products/>
    </div>
  );
}

export default App;
