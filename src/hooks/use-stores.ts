import { RootStoreContext } from 'stores';
import { useContext } from 'react';

export const useStores = () => {
  const rootStore = useContext(RootStoreContext);

  return rootStore;
};
