import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export const Prototype = () => {
	const year = new Date().getFullYear();
	const firstDay = new Date(year, 0, 1).getDay();
	const lastDay = new Date(year, 11, 31).getDay();
	const totalDays = Array.from({ length: 371 }, (_, i) => i + 1);
	let daysNotIncluded = [];

	const [fullDays, setFullDays] = useState([]);

	// Define the days that are not in the calendar 371 -> 365 = 6 days not in
	function defineExcludedDays() {
		let u = totalDays.length - 1;

		for (let x = lastDay - 1; x > 0; x--) {
			daysNotIncluded = [...daysNotIncluded, totalDays[u]];
			u--;
		}

		for (let x = firstDay - 1; x >= 0; x--) {
			const dayToAdd = x === 0 ? 0 : totalDays[x - 1];
			daysNotIncluded = [...daysNotIncluded, dayToAdd];
		}
	}

	// Generate full days
	useEffect(() => {
		function generateFullDays() {
			const r = Array.from({ length: 371 }, (_, i) => i).map((item, i) => {
				const isFirstDay = i === firstDay;
				const isNotIncluded = daysNotIncluded.includes(i);

				return {
					dayIndex: i,
					dayNumber: isFirstDay ? 1 : isNotIncluded ? null : i + 1 - firstDay,
					dayLabel: isNotIncluded
						? null
						: dayjs(`${year}-01-01`).add(i, 'day').format('MMMM DD, YYYY'),
				};
			});
			return r;
		}

		const fDays = generateFullDays();
		setFullDays(fDays);
	}, []);

	defineExcludedDays();

	return (
		<div className="flex flex-1 justify-center pt-20">
			<div className="flex h-50 items-center justify-center rounded-md border border-gray-700 p-2">
				<div className="grid grid-flow-col grid-cols-[repeat(53,20px)] grid-rows-[repeat(7,20px)] gap-0.75 p-1">
					{fullDays.map((day, i) => {
						return (
							<div
								key={i}
								title={day?.dayLabel}
								style={{
									backgroundColor: day.dayNumber === null ? 'black' : 'red',
								}}
								className="flex items-center justify-center rounded-sm bg-rose-600 text-xs text-black"
							>
								{day?.dayNumber || '-'}
							</div>
						);
					})}

					{/* {totalDays.map((day, i) => {
						let calendarDay = 370;
						console.log('🐟 - Prototype - i:', i);
						const notFromCurrentYear = daysNotIncluded.includes(i);

						if (!notFromCurrentYear) {
							calendarDay += 1;
						}

						const date = notFromCurrentYear
							? null
							: dayjs(`${year}-01-01`).add(i, 'day').format('MM-DD-YYYY');
						console.log('🐟 - Prototype - currentDay:', date);
						console.log('🐟 - Prototype - notFromCurrentYear:', notFromCurrentYear);

						return (
							<div
								key={i}
								title={date}
								style={{ backgroundColor: notFromCurrentYear ? 'black' : '' }}
								className="flex items-center justify-center rounded-sm bg-rose-600 text-xs text-black"
							>
								{calendarDay || '-'}
							</div>
						);
					})} */}
				</div>
			</div>
		</div>
	);
};
