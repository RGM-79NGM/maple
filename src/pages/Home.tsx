import { useNavigate } from 'react-router-dom';
// import HeatMap from '../components/heat-map/HeathMap';
import { HeatMap2 } from '../components/heat-map-2/HeatMap2';
import { generateHabitDays } from '../calculations/generateHabitDays';

export const Home = () => {
	const habits = JSON.parse(localStorage.getItem('habits') || '[]');
	const navigate = useNavigate();

	const tempHabit = {
		name: 'Read books',
		type: 'CHECKBOX',
		colorTheme: 'terminal',
		days: generateHabitDays(),
	};

	return (
		<div className="flex min-h-0 flex-1 flex-col gap-5">
			<header className="flex w-full items-center justify-center gap-2 pt-5 text-3xl">
				<h3 className="text-center font-semibold">HABITS</h3>
				<span
					onClick={() => navigate('/create-habit')}
					title="Add new habit"
					className="material-icons bg-background-secondary hover:text-bg flex cursor-pointer items-center justify-center rounded-sm p-0.5 px-2 text-[20px]! transition duration-200 hover:bg-emerald-500"
				>
					+
				</span>
			</header>

			{!habits?.length ? (
				<main className="flex flex-1 items-center justify-center md:text-xl lg:text-3xl">
					No habits found
				</main>
			) : (
				<main className="flex flex-col items-center gap-3 py-2">
					{habits.map((habit, i) => (
						<div key={i} className="w-full">
							<HeatMap2 habit={tempHabit} />
						</div>
					))}
				</main>
			)}
		</div>
	);
};
