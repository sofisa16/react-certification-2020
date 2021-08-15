import {useContext} from 'react';
import {GlobalContext, GlobalContextValues} from './GlobalContext';

function useGlobalContext(): GlobalContextValues {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('Please use the "useContext" hook with a GlobalContextProvider.')
  }

  return context;
}

export default useGlobalContext;