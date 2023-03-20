import { observer } from 'mobx-react-lite';

import { useStore } from '@/domain/store';

function Home() {
  const { countStore } = useStore();

  return (
    <>
      <p>test {countStore.counter}</p>

      <button onClick={countStore.increment}>inc</button>
      <button onClick={countStore.decrement}>dec</button>
    </>
  );
}

export default observer(Home);
