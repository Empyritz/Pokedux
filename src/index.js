import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonsReducer } from './reducers/pokemons' 
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger, prefix } from './middlewares';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composedEnhancers = composeAlt(applyMiddleware(thunk, logger, prefix))

// const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger, prefix))
const store = createStore(pokemonsReducer, composedEnhancers)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
