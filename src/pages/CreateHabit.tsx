import { useState } from 'react';
import { themes } from '../constants/themes';
import { Icon } from '@iconify/react';

interface Habit {
	name?: string;
	colorTheme?: string;
}

export const CreateHabit = () => {
	const [newHabit, setNewHabit] = useState<Habit>({
		colorTheme: Object.keys(themes)[0],
	});
	const [showDropdown, setShowDropdown] = useState(false);
	const [errors, setErrors] = useState({
		name: '',
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
	}

	return (
		<div className="flex w-full flex-1 justify-center p-2">
			<div className="flex w-[90%] flex-col items-center py-5 lg:w-[70%]">
				<h1 className="text-3xl">Create a new habit to track</h1>

				{/* Fields */}
				<div className="flex w-full flex-col gap-5 p-[5%]">
					<div className="relative flex flex-col gap-1">
						Enter a title for your habit
						<input
							value={newHabit?.name}
							onChange={(e) => setNewHabit((prev) => ({ ...prev, name: e.target.value }))}
							type="text"
							onFocus={() => setErrors((prev) => ({ ...prev, name: '' }))}
							className="bg-bg2 text-base1 rounded-md px-1 py-2"
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
						<button
							onClick={() => setShowDropdown((prev) => !prev)}
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
						<div
							className={`${showDropdown ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 bg-transparent opacity-0'} bg-bg2 border-bg2 rounded-md border transition duration-200`}
						>
							{Object.entries(themes).map(([name, theme]) => (
								<li
									key={name}
									onClick={() => {
										if (newHabit.colorTheme !== name) {
											setNewHabit((prev) => ({ ...prev, colorTheme: name }));
										}
										setShowDropdown((prev) => !prev);
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
