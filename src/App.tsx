import React from 'react';
import RootContainer from './components/RootContainer';
import Catalog from './pages/Catalog';

import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <RootContainer>
        {true && <Main />}
        {false && <Catalog />}
      </RootContainer>
    </div>
  );
}

export default App;
