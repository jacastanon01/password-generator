import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from './components/ui/toaster.tsx';

import App from './App.tsx';
import './index.css';
import { RequirementsProvider } from './context/RequirementsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RequirementsProvider>
      <App />
      <Toaster />
    </RequirementsProvider>
  </React.StrictMode>
);
