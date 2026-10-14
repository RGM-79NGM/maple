import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { themes } from '../constants/themes';
import { habitTypes } from '../constants/habitType';

interface Habit {
	name?: string;
	colorTheme?: string;
	entries?: object[];
	type?: string;
}

export const CreateHabit = () => {
	const navigate = useNavigate();
	const [newHabit, setNewHabit] = useState<Habit>({
		colorTheme: Object.keys(themes)[0],
		entries: [],
		type: habitTypes[0].value,
	});
	const [showColorDropdown, setShowColorDropdown] = useState(false);
	const [showTypeDropdown, setShowTypeDropdown] = useState(false);
	const [errors, setErrors] = useState({
		name: '',
		type: '',
	});

	function validate() {
		const isValid = !!newHabit.name;
		setErrors((prev) => ({
			...prev,
			name: isValid ? '' : 'Please fill out the habit name',
		}));

		return isValid;
	}

	function handleSave() {
		if (!validate()) return;

		const currentHabits = JSON.parse(localStorage.getItem('habits') || '[]');
		const mergedHabits = [...currentHabits, newHabit];
		localStorage.setItem('habits', JSON.stringify(mergedHabits));

		navigate('/');
	}

	return (
		<div className="flex w-full flex-1 justify-center p-2">
			<div
				onBlur={() => {
					setShowColorDropdown(false);
					setShowTypeDropdown(false);
				}}
				className="flex w-[90%] flex-col items-center py-5 lg:w-[70%]"
			>
				<h1 className="text-3xl">Create a new habit to track</h1>

				{/* Fields */}
				<div className="*:bg- grid w-full grid-rows-[repeat(3,1fr)_auto] gap-8 p-[5%]">
					<div className="flex flex-col gap-1">
						Habit Type
						<div className="relative flex flex-col gap-2">
							<button
								onClick={() => setShowTypeDropdown((prev) => !prev)}
								className="bg-bg2 flex cursor-pointer items-center justify-between gap-2 rounded-md px-5 py-2"
							>
								<div className="flex items-center gap-2">{newHabit?.type}</div>

								<Icon icon="mdi:keyboard-arrow-down" />
							</button>

							{/* Dropdown */}
							<ul
								onMouseDown={(e) => e.preventDefault()}
								className={`${showTypeDropdown ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 bg-transparent opacity-0'} bg-bg2 border-bg2 absolute top-[105%] left-0 z-10 w-[90%] rounded-md border transition duration-200`}
							>
								{habitTypes.map((habitType, i) => (
									<li
										key={i}
										onClick={() => {
											if (habitType.value !== newHabit.type) {
												setNewHabit((prev) => ({ ...prev, type: habitType.value }));
											}
											setShowTypeDropdown((prev) => !prev);
										}}
										className="bg-bg2 text-base1 hover:bg-bg flex cursor-pointer items-center gap-2 rounded-t-md px-6 py-2 transition duration-150"
									>
										{habitType.title}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="relative flex flex-col gap-1">
						Enter a title for your habit
						<input
							value={newHabit?.name}
							onChange={(e) => setNewHabit((prev) => ({ ...prev, name: e.target.value }))}
							type="text"
							onFocus={() => setErrors((prev) => ({ ...prev, name: '' }))}
							className="bg-bg2 text-base1 rounded-md px-4 py-2"
						/>
						{/* Warning block */}
						<div
							className={`${errors.name ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 bg-transparent opacity-0'} absolute top-[123%] left-[30%] flex items-center gap-2 rounded-sm bg-white p-3 text-sm font-semibold transition duration-200`}
						>
							<div className="absolute top-[-19%] size-4.5 rotate-45 bg-white"></div>
							<div className="flex items-center justify-center rounded-sm bg-orange-600 p-1">
								<Icon icon="material-symbols:error" className="text-white" />
							</div>
							<div className="text-zinc-800">{errors?.name || '-'}</div>
						</div>
					</div>

					<div className="flex flex-col gap-1">
						Pick a color
						<div className="relative flex flex-col gap-2">
							<button
								onClick={() => setShowColorDropdown((prev) => !prev)}
								className="bg-bg2 flex cursor-pointer items-center justify-between gap-2 rounded-md px-5 py-2"
							>
								<div className="flex items-center gap-2">
									<div
										style={{
											backgroundColor: themes[newHabit.colorTheme].highlight,
										}}
										className="size-3 rounded-sm"
									></div>
									{Object.keys(themes)[0]}
								</div>

								<Icon icon="mdi:keyboard-arrow-down" />
							</button>

							{/* Dropdown */}
							<ul
								onMouseDown={(e) => e.preventDefault()}
								className={`${showColorDropdown ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 bg-transparent opacity-0'} bg-bg2 border-bg2 absolute top-[105%] left-0 w-[90%] rounded-md border transition duration-200`}
							>
								{Object.entries(themes).map(([name, theme]) => (
									<li
										key={name}
										onClick={() => {
											if (newHabit.colorTheme !== name) {
												setNewHabit((prev) => ({ ...prev, colorTheme: name }));
											}
											setShowColorDropdown((prev) => !prev);
										}}
										className="bg-bg2 text-base1 hover:bg-bg flex cursor-pointer items-center gap-2 rounded-t-md px-6 py-2 transition duration-150"
									>
										<div
											style={{
												backgroundColor: theme.highlight,
											}}
											className="size-3 rounded-sm"
										></div>
										{name}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="flex justify-end pr-[3%]">
						<button
							onClick={handleSave}
							className="bg-primary cursor-pointer rounded-md px-10 py-3 font-semibold text-black transition duration-200 hover:brightness-110"
						>
							Create Habit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
