import { Route, Routes } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { NotFound } from './pages/NotFound';

export const App = () => (
  <Routes>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  </Routes>
);
