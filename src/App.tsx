import { Route, Routes } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { NotFound } from './pages/NotFound';
import { CreateHabit } from './pages/CreateHabit';
import { Prototype } from './pages/Prototype';

export const App = () => (
	<Routes>
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="/settings" element={<Settings />} />
			<Route path="/create-habit" element={<CreateHabit />} />
			<Route path="/proto-type" element={<Prototype />} />
			<Route path="/*" element={<NotFound />} />
		</Route>
	</Routes>
);
