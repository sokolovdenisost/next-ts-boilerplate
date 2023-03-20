import { createContext, useContext } from 'react';
import CountStore from '@/domain/store/counter';

const store = {
  countStore: CountStore
};

export const StoreContext = createContext(store);

type TStore = typeof store;
type TUseStore = () => TStore;

export const useStore: TUseStore = () => {
  return useContext<TStore>(StoreContext);
};

export default store;
