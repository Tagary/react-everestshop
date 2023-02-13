import Contacts from './Contacts';
import Delivery from './Delivery';
import NewsList from './NewsList';
import Payments from './Payments';
import PriceList from './PriceList';
import Vacancy from './Vacancy';
import Wholesalers from './Wholesalers';

const HeaderPages = () => {
  return (
    <div className="max-w-[82.5rem] m-auto mt-16">
      {false && <Delivery />}
      {false && <Payments />}
      {false && <PriceList />}
      {false && <Wholesalers />}
      {false && <Vacancy />}
      {false && <Contacts />}
      {true && <NewsList />}
    </div>
  );
};

export default HeaderPages;
