import { ProfileCard } from './Profile/ProfileCard';
import { Stats } from './Stats/Stats';
import { Friend } from './Friends/Friends';
import { TransactionHistory } from './Transaction/Transaction';

import userInfo from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transaction from '../transactions.json';

export const App = () => {
  return (
    <div className="wrapper">
      <ProfileCard {...userInfo} />
      <Stats data={data} />
      <Friend friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
