import { createRoot } from 'react-dom/client';
import { AnimatePresence } from 'framer-motion';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <AnimatePresence>
    <App />
  </AnimatePresence>
);