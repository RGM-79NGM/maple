export const CreateHabit = () => {
	return (
		<div className="flex w-full flex-1 justify-center bg-zinc-800 p-2">
			<div className="flex w-[90%] flex-col items-center bg-orange-700">
				<h1 className="text-3xl">Create a new habit to track</h1>

				<div className="flex flex-col gap-1">
					Name
					<input type="text" placeholder="test" />
				</div>
			</div>
		</div>
	);
};
