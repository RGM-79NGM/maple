import HeatMap from '../components/heat-map/HeathMap';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	// const [entries, setEntries] = useState([]);
	// const [average, setAverage] = useState();
	// const [total, setTotal] = useState();

	const habits = JSON.parse(localStorage.getItem('habits') || '[]');
	console.log('🐟 - Home - habits:', habits);

	const navigate = useNavigate();
	// const paddedDays = [
	//   ...Array.from({ length: firstDayOffset }, () => null),
	//   ...days,
	// ];

	return (
		<div className="flex min-h-0 flex-1 flex-col">
			<h3 className="flex w-full items-center justify-center gap-2 pt-5 text-3xl">
				<span className="text-center font-semibold">HABITS</span>
				<span
					onClick={() => navigate('/create-habit')}
					title="Add new habit"
					className="material-icons bg-background-secondary hover:text-bg flex cursor-pointer items-center justify-center rounded-sm p-0.5 px-2 text-[20px]! transition duration-200 hover:bg-emerald-500"
				>
					+
				</span>
			</h3>

			{!habits?.length ? (
				<div className="flex flex-1 items-center justify-center md:text-xl lg:text-3xl">
					No habits found
				</div>
			) : (
				<div className="flex flex-col items-center gap-3 py-2">
					{habits.map((habit, i) => (
						<div key={i}>
							<HeatMap />
						</div>
					))}
				</div>
			)}
		</div>
	);
};
