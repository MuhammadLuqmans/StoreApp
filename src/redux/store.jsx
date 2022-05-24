import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice';
import logger from 'redux-logger';

const store = configureStore({



  middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        // serializableCheck: false,
        //  serializableCheck: {
        //     // Ignore these action types
        //     ignoredActions: ['web3/changeProvider'],
        //  },
      }),
      logger
   ],
    reducer: {
        cart: cartReducer,
    },
});

export default store;