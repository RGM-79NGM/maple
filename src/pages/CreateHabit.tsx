export const CreateHabit = () => {
	return (
		<div className="flex w-full flex-1 justify-center p-2">
			<div className="flex w-[90%] flex-col items-center py-5">
				<h1 className="text-3xl">Create a new habit to track</h1>

				{/* Fields */}
				<div className="flex w-full flex-col gap-5 p-[5%]">
					<div className="flex flex-col gap-1">
						Enter a title for you habit
						<input
							type="text"
							placeholder="test"
							className="bg-bg2 text-base1 rounded-md px-1 py-2"
						/>
					</div>
					<div className="flex flex-col gap-1">
						Pick a color
						<select className="bg-bg2 rounded-md px-1 py-2">
							<option value="green" className="bg-bg2 text-base1">
								Green
							</option>
							<option value="rose" className="bg-bg2">
								Rose
							</option>
							<option value="indigo" className="bg-bg2">
								Indigo
							</option>
						</select>
						{/* <input type="" placeholder="test" /> */}
					</div>

					<div className="flex justify-end pr-[3%]">
						<button className="bg-primary rounded-md px-10 py-3 font-semibold text-black">
							Create Habit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
