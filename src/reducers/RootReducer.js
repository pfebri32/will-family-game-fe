import { combineReducers } from 'redux';

// Reducers
import GameReducer from './GameReducer';

const RootReducer = combineReducers({
  games: GameReducer,
});

export default RootReducer;
