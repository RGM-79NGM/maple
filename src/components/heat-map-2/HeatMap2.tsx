import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { returnColorIntensity, returnColorTheme } from '../../constants/themes';
import { Icon } from '@iconify/react';
import Select from '../heat-map/Select';

export const HeatMap2 = ({ habit }) => {
	console.log('🐟 - HeatMap2 - habit:', habit);
	const [currentHabit, setCurrentHabit] = useState(habit);
	const [changed, setChanged] = useState(false);
	const theme = returnColorTheme(habit.colorTheme);
	const [showDropdown, setShowDropdown] = useState(false);
	// console.log('🐟 - HeatMap2 - theme:', theme);
	// console.log('🐟 - HeatMap2 - habit:', habit);

	useEffect(() => {}, [changed]);

	return (
		<div
			onBlur={() => setShowDropdown(false)}
			className="flex flex-1 justify-center py-20"
		>
			<div className="bg-bg2 flex w-[clamp(200px,90vw,1300px)] flex-col items-center justify-center gap-2 rounded-md p-3">
				<header className="flex w-full items-center justify-between pr-1 text-[18px] font-medium text-gray-200">
					<div className="flex items-center gap-5">
						<Select
							showDropDown={showDropdown}
							setShowDropDown={setShowDropdown}
						/>
						<div className="flex items-center gap-4">
							<span className="text-base1 text-sm lg:text-base xl:text-lg">
								{habit?.name || '-'}
							</span>
							<span className="text-base2 text-sm lg:text-base">{`${habit?.entries?.length || '0'} days`}</span>
						</div>
					</div>
					<div className="flex h-full items-center gap-2 p-0.5">
						<div className="text-base2 flex items-center gap-2">
							less
							<div className="grid grid-flow-col grid-cols-[repeat(5,var(--cell-size))] grid-rows-[repeat(1,var(--cell-size))] justify-center p-1 [--cell-size:12px] min-[450px]:gap-[2px] min-[450px]:[--cell-size:6px] sm:gap-[2px] sm:[--cell-size:9px] md:gap-0.5 md:[--cell-size:11px] lg:gap-[3px] lg:[--cell-size:15px] xl:[--cell-size:18px]">
								{Array.from({ length: 5 }).map((item, i) => (
									<div
										key={i}
										style={{
											backgroundColor: returnColorIntensity(theme, i),
										}}
										className="flex cursor-pointer items-center justify-center rounded-sm text-xs text-white min-[450px]:rounded-[1.7px] xl:rounded-[3.2px]"
									></div>
								))}
							</div>
							more
						</div>
						<Icon
							// onClick={() => setIsCollapsed((prev) => !prev)}
							icon="mdi:keyboard-arrow-down"
							className="text-base1 text-lg"
						/>
					</div>
				</header>

				<main className="grid grid-cols-[auto_1fr] gap-1">
					<div className="text-base2 pointer-events-none hidden items-center text-[15px] leading-1 xl:grid xl:grid-rows-[repeat(7,var(--cell-size))]">
						<div className="opacity-0">sunday</div>
						<div>monday</div>
						<div className="opacity-0">tuesday</div>
						<div>wednesday</div>
						<div className="opacity-0">thursday</div>
						<div>friday</div>
						<div className="opacity-0">saturday</div>
					</div>

					{/* Activity blocks */}
					<div className="grid grid-flow-col grid-cols-[repeat(53,var(--cell-size))] grid-rows-[repeat(7,var(--cell-size))] justify-center p-1 [--cell-size:12px] min-[450px]:gap-[2px] min-[450px]:[--cell-size:6px] sm:gap-[2px] sm:[--cell-size:9px] md:gap-0.5 md:[--cell-size:11px] lg:gap-[3px] lg:[--cell-size:15px] xl:[--cell-size:18px]">
						{currentHabit?.days?.map((day, i) => {
							return (
								<button
									key={i}
									onClick={() => {
										setCurrentHabit((prev) => ({
											...prev,
											days: prev.days.map((d, pdi) => ({
												...d,
												checked: pdi === i ? !d.checked : d.checked,
											})),
										}));
									}}
									title={
										day.dayNumber === null
											? ''
											: dayjs(day?.dayLabel).format('MMMM DD, YYYY')
									}
									style={{
										backgroundColor:
											day.dayNumber === null
												? 'transparent'
												: day?.checked
													? theme?.highlight
													: 'var(--color-bg)',
									}}
									className="flex cursor-pointer items-center justify-center rounded-sm text-xs text-white min-[450px]:rounded-[1.7px] xl:rounded-[3.2px]"
								>
									{/* {day?.dayNumber === null ? '' : day?.dayNumber + 1} */}
								</button>
							);
						})}
					</div>
				</main>
			</div>
		</div>
	);
};
