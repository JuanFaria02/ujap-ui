import {StrictMode} from 'react'
import App from './App.tsx'
import './index.css'
import { createRoot } from 'react-dom/client'
import './i18n'

(async function init() {
  const root = createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
})();

