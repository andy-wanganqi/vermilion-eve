import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import createStore from "../store/store";

export const wrapperRender = (
  ui: JSX.Element,
  { 
    withProvider = false, 
    preloadedState = {},
    store = createStore(preloadedState),
    withRouter = false,
    ...renderOptions
   },
) => {
  const RenderingElement = withProvider ? <Provider store={store}>{ui}</Provider> : <div>{ui}</div>;
  if (withRouter) {
    return { store, ...render(RenderingElement, { wrapper: BrowserRouter, ...renderOptions }) }
  } else {
    return { store, ...render(RenderingElement, { ...renderOptions }) }
  }
};
