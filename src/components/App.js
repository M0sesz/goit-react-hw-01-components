import { ProfileCard } from './Profile/ProfileCard';
import { Stats } from './Stats/Stats';
import { Friend } from './Friends/Friends';
import { TransactionHistory } from './Transaction/Transaction';

import userInfo from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transaction from './Data/transactions.json';

export const App = () => {
  return (
    <div className="wrapper">
      <ProfileCard {...userInfo} />
      <Stats data={data} title="Upload Stats" />
      <Friend friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
