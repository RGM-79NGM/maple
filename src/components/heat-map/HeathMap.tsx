import { useState } from 'react';
import { Icon } from '@iconify/react';

const HeatMap = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function generateYearDays(year: any) {
    const days = [];

    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const date = new Date(d);

      days.push({
        date,
        weekday: (date.getDay() + 6) % 7, // Monday = 0
        yearDayName: date.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }),
      });
    }

    return days;
  }

  function getMonthLabels(days: any, offset: any) {
    const labels: any = [];

    days.forEach((day: any, i: any) => {
      if (day.date.getDate() === 1) {
        const column = Math.floor((i + offset) / 7);

        labels.push({
          label: day.date.toLocaleString('en-US', { month: 'short' }),
          column,
        });
      }
    });

    return labels;
  }

  const days = generateYearDays(2026);
  const firstDayOffset = days[0].weekday;
  const monthLabels = getMonthLabels(days, firstDayOffset);

  return (
    <div className="bg-background-secondary w-[clamp(200px,90vw,800px)] rounded-lg border border-[#1e1e1f] p-3">
      <header className="flex w-full items-center justify-between pr-1 text-[18px] font-medium text-gray-200">
        <span className="text-sm text-[#48494b] lg:text-base">5,000 KMs</span>
        <div className="flex h-full items-center gap-2 p-0.5">
          <Icon
            onClick={() => setIsCollapsed((prev) => !prev)}
            icon="mdi:keyboard-arrow-down"
            className="text-txt-primary text-lg"
          />
        </div>
      </header>
      <div className="mt-5 flex w-full gap-2">
        <div className="flex w-full gap-1 rounded-sm">
          <div className="flex w-full min-w-0 flex-col">
            {/* Month labels */}
            {/* <div></div> */}
            {/* <div className="grid auto-cols-[10.8px] grid-flow-col gap-0.75"> */}
            {/* empty cell for weekday column */}
            {/* <div className="w-2.5 " /> */}
            {/* </div> */}

            {/* GRID */}
            <div
              className="grid grid-flow-col grid-cols-[repeat(53,8px)] grid-rows-[repeat(7,8px)] gap-px sm:grid-cols-[repeat(53,10px)] sm:grid-rows-[repeat(7,10px)] sm:gap-0.5 lg:grid-cols-[repeat(53,12px)] lg:grid-rows-[repeat(7,12px)] lg:gap-0.75" // style={{
            >
              {/* offset */}
              {/* {Array.from({ length: firstDayOffset }, (_, i) => (
                <div className="bg-amber-950" key={`empty-${i}`} />
              ))} */}

              {/* CELLS */}
              {days.map((day, i) => (
                <div
                  key={i}
                  title={day.yearDayName}
                  className="bg-primary aspect-square w-full cursor-pointer rounded-[1.6px]"
                />
              ))}
            </div>

            {/* BOTTOM INFO */}
            <div
              className={`${
                isCollapsed ? 'max-h-0 opacity-0' : 'mt-4 max-h-125 opacity-100'
              } flex items-center justify-between bg-blue-300 px-2 transition-all duration-150`}
            >
              <div className="flex flex-col gap-0 text-[12px]">
                <span>Number of entries: 4</span>
                <span>Average: 87.75 R$s</span>
                <span>Total: 351.00 R$s</span>
              </div>

              <div className="flex max-h-25 min-h-7.5 gap-2 rounded-sm border border-gray-800 px-2 py-1 text-[13px]">
                Today: 10 R$s
                <span className="material-icons cursor-pointer rounded-md p-0.5 text-[14px]! transition duration-150 hover:text-gray-800">
                  edit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;
