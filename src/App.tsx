import React from 'react';
import ListProduct from './components/ListProduct';
import RootContainer from './components/RootContainer';
import Catalog from './pages/Catalog';

import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <RootContainer>
        {false && <Main />}
        {false && <Catalog />}
        {true && <ListProduct />}
      </RootContainer>
    </div>
  );
}

export default App;
