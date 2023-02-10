import Order from './Order';
import Profile from './Profile';
import Documents from './Documents';

const MainComponent = () => {
  return (
    <div>
      {false && <Profile />}
      {false && <Order />}
      {true && <Documents />}
    </div>
  );
};

export default MainComponent;
