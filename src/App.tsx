import React from 'react';
import RootContainer from './components/RootContainer';
import Catalog from './pages/Catalog';
import ListProduct from './pages/ListProduct';
import Main from './pages/Main';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <RootContainer>
        {false && <Main />}
        {false && <Catalog />}
        {false && <ListProduct />}
        {true && <Product />}
      </RootContainer>
    </div>
  );
}

export default App;
