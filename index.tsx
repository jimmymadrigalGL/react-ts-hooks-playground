import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const mount = document.getElementById('mount');
const unmount = document.getElementById('unmount');
const rootElement = document.getElementById('root');
let root;
mount.onclick = () => {
  if (root) {
    return;
  }
  root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

unmount.onclick = () => {
  root?.unmount();
  root = undefined;
};
