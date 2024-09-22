import './App.css';
import { useGet, create } from 'get-set-react';
import { StoreExplorer } from 'react-store-explorer';

export const store = create({ count: 0 });

export const storeWithActions = create(
  { address: { street: '' } },
  ({ update }) => ({
    setStreet(newStreet: string) {
      update((s) => (s.address.street = newStreet));
    },
  })
);
const stores = { store, storeWithActions };

const incr = () => {
  store.update((s) => s.count++);
};

function App() {
  const { count } = useGet(store);
  const { address, setStreet } = useGet(storeWithActions);
  return (
    <StoreExplorer stores={stores} iconColor={'green'} keepOpen={false}>
      <h3>get-set-react</h3>
      <div className="card">
        <button onClick={incr}>count is {count}</button>
        <input
          type="text"
          value={address.street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </div>
    </StoreExplorer>
  );
}

export default App;
