import React from 'react';
import { createRoot } from 'react-dom/client';
import AppWrapper from './App';
import { Provider } from 'react-redux';
import store from './store';
 
// Find the root element in your HTML
const container = document.getElementById('root');
// Create a root for the container
const root = createRoot(container);
 
// Render your app within the <Provider> to make Redux store available to your components
root.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);