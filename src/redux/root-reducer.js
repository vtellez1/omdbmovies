import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import movieReducer from './movies/movies.reducer';
import nominationReducer from './nominations/nominations.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
}

const rootReducer = combineReducers({
    movies: movieReducer,
    nominations: nominationReducer
});

export default persistReducer(persistConfig, rootReducer);