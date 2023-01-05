import { createStore } from 'redux';
import reducer from './reducers/cartreducer'

const store = createStore(reducer)

export default store;
