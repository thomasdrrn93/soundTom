import Root from './components/root';
import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
  store = configureStore();
  }
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDom.render(<Root store={store}/>, document.getElementById('root'));
});
