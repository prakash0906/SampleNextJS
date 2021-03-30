import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
// import { logger } from 'redux-logger';
import reducer from './reducers';
// import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

const startStore = {
    user_name: '',
    ssr: {}
};

const initStore = (initState = startStore) => {
    return createStore(
        reducer,
        initState, composeWithDevTools(applyMiddleware(sagaMiddleware))
    )
};

// sagaMiddleware.run(rootSaga);

export default initStore();