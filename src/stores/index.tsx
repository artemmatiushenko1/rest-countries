import React, { createContext } from 'react';
import RootStore from './root-store';

export const RootStoreContext = createContext(new RootStore());

interface IRootStoreProviderProps {
  children?: React.ReactNode;
}

const RootStoreProvider: React.FC<IRootStoreProviderProps> = ({ children }) => {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      {children}
    </RootStoreContext.Provider>
  );
};

export default RootStoreProvider;
