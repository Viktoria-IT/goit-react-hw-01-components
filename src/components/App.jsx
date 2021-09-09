import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import Statistics from "./Statistics/Statistics";
import statisticalData from "./Statistics/statistical-data.json";
import FriendList from "./FriendsList/FriendsList";
import friends from "./FriendsList/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics stats={statisticalData} />   */}
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
