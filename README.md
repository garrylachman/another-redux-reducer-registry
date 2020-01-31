# another-redux-reducer-registry
A simple registery for redux reducers, just register the reducer and the library will connect the reducers to the store.

## Install
```
npm install another-redux-reducer-registry
```

## Usage
Register your store using `ReduxRegistery.getInstance().registerStore` function
```
import { createStore, Store } from 'redux';
import ReduxRegistery from './ReduxRegistery/ReduxRegistery';

const initialState = {};

const store:Store = createStore((state=[], action) => state, initialState);

ReduxRegistery.getInstance().registerStore(store);

export default store;
```

Register the reducers using `ReduxRegistery.getInstance().registerReducer` function

```
import todo from './todo.reducer'

ReduxRegistery.getInstance().registerReducer(todos);
```

### Have fun
Thats it, every reducer will be ready to use.

Garry Lachman