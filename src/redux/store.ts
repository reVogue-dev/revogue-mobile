import { configureStore } from '@reduxjs/toolkit'

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, persistCombineReducers,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './reducers'



const config = {
    key: 'root',
    storage: storage,
    version: 1,
    debug: true,
    whitelist: ['auth'],
    stateReconciler: autoMergeLevel2
};



const persistedReducer = persistCombineReducers(config, rootReducer);



const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})



let persistor = persistStore(store)
export {
    store, persistor
}