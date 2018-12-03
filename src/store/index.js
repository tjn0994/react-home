import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const PERSIST_KEY = 'root';
const persistConfig = {
  key: PERSIST_KEY,
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
  transforms: [createTransform(
    (inboundState) => ({ ...inboundState, error: '' }),
    (outboundState) => ({ ...outboundState, error: '' }),
    { whitelist: ['auth'] }
  )],
};

const configDevStore = () => createStore(
  persistReducer(persistConfig, rootReducer),
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(sagaMiddleware)),
);

export const store = configDevStore();
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
