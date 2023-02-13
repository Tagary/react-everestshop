import React from 'react';
import RootContainer from './components/RootContainer';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import HeaderPages from './pages/HeaderPages';
import ListProduct from './pages/ListProduct';
import Main from './pages/Main';
import News from './pages/News';
import PersonalArea from './pages/PersonalArea';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <RootContainer>
        {false && <Main />}
        {false && <Catalog />}
        {false && <ListProduct />}
        {false && <Product />}
        {false && <Cart />}
        {false && <PersonalArea />}
        {false && <HeaderPages />}
        {true && <News />}
      </RootContainer>
    </div>
  );
}

export default App;
