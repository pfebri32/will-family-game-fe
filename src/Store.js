import { createStore } from 'redux';

// Reducers
import RootReducer from './reducers/RootReducer';

const Store = createStore(RootReducer);

export default Store;
