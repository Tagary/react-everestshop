import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import RootContainer from './components/RootContainer';

function App() {
  let { pathname } = useLocation();

  return (
    <div className="App">
      <RootContainer pathname={pathname}>
        <div className="max-w-[82.5rem] m-auto mt-16">
          <ScrollRestoration />
          <Outlet />
        </div>
      </RootContainer>
    </div>
  );
}

export default App;
