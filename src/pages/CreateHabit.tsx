import { useState } from 'react';
import { themes } from '../constants/themes';

interface Habit {
	name: string;
	colorTheme: string;
}

export const CreateHabit = () => {
	const [newHabit, setNewHabit] = useState<Habit>();
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<div className="flex w-full flex-1 justify-center p-2">
			<div className="flex w-[90%] flex-col items-center py-5">
				<h1 className="text-3xl">Create a new habit to track</h1>

				{/* Fields */}
				<div className="flex w-full flex-col gap-5 p-[5%]">
					<div className="flex flex-col gap-1">
						Enter a title for you habit
						<input
							value={newHabit?.name}
							onChange={(e) => setNewHabit((prev) => ({ ...prev, name: e.target.value }))}
							type="text"
							className="bg-bg2 text-base1 rounded-md px-1 py-2"
						/>
					</div>

					<div className="flex flex-col gap-1">
						<button
							onClick={() => setShowDropdown((prev) => !prev)}
							className="bg-bg2 flex cursor-pointer gap-1 rounded-md px-5 py-2"
						>
							Pick a color
						</button>

						<div
							className={`${showDropdown ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 bg-transparent opacity-0'} bg-bg2 border-bg2 rounded-md border transition duration-200`}
						>
							{Object.entries(themes).map(([name, theme]) => (
								<li
									key={name}
									onClick={() => setNewHabit((prev) => ({ ...prev, colorTheme: name }))}

									className="bg-bg2 text-base1 hover:bg-bg flex items-center gap-2 rounded-t-md px-6 py-2 transition duration-150"
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

							<li
								value="rose"
								className="bg-bg2 text-base1 hover:bg-bg flex items-center gap-2 px-6 py-2 transition duration-150"
							>
								<div className="size-3 rounded-sm bg-rose-500"></div>
								Rose
							</li>
							<li
								value="indigo"
								className="bg-bg2 text-base1 hover:bg-bg flex items-center gap-2 rounded-b-md px-6 py-2 transition duration-150"
							>
								<div className="size-3 rounded-sm bg-indigo-500"></div>
								Indigo
							</li>
						</div>
					</div>

					<div className="flex justify-end pr-[3%]">
						<button className="bg-primary cursor-pointer rounded-md px-10 py-3 font-semibold text-black transition duration-200 hover:brightness-110">
							Create Habit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
