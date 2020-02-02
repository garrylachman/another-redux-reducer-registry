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
import ReduxRegistery from './ReduxRegistery/ReduxRegistery';

ReduxRegistery.getInstance().registerReducer(todos);
```

### Usecase
If you store your reducers inside each component the initial import of each reducer that stored in different component folder can be a mess. You can register the reducer inside the reducer file and just import the reducer in component index.

Reducer file: `components/exampleComponent/reducers/exampleReducer.tsx`
```
import ReduxRegistery from './ReduxRegistery/ReduxRegistery';

export const exampleReducer = (
  state = {},
  action
) => {
  return state;
};
ReduxRegistery.getInstance().registerReducer(exampleReducer);
```
Component index file: `components/exampleComponent/index.tsx`
```
import exampleReducer from './reducers/exampleReducer';
```

Thats it, the reducer is already registered in the store without initial import in store configure.

### Have fun
Thats it, every reducer will be ready to use.

Garry Lachman
