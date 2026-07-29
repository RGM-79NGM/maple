import { useState } from 'react';

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
    const labels = [];

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
    <div className="rounded-lg border border-[#1e1e1f] p-3">
      <label className="flex w-full items-center justify-between pr-1 text-[18px] font-medium text-gray-200">
        <span>Save $5,000.00</span>
        <div className="flex h-full items-center gap-2 p-0.5">
          <span className="text-[11px] font-normal">2026</span>
          <span className="material-icons cursor-pointer rounded-md p-0.5 text-[15px]! transition duration-150 hover:bg-gray-800">
            calendar_today
          </span>
          <span className="material-icons cursor-pointer rounded-md p-0.5 text-[15px]! transition duration-150 hover:bg-gray-800">
            more_vert
          </span>
          <span
            onClick={() => setIsCollapsed((prev) => !prev)}
            className="material-icons cursor-pointer rounded-md p-0.5 text-[15px]! transition duration-150 hover:bg-gray-800"
          >
            keyboard_arrow_down
          </span>
        </div>
      </label>
      <div className="mt-5 flex w-full gap-2 align-top">
        <div className="flex w-full gap-1 rounded-sm py-1">
          <div className="relative">
            {/* Month labels */}
            <div className="mb-1 grid auto-cols-[10.8px] grid-flow-col gap-0.75">
              {/* empty cell for weekday column */}
              <div className="w-2.5" />

              {monthLabels.map((m, i) => (
                <div
                  key={i}
                  className="text-[11px]"
                  style={{
                    gridColumnStart: m.column + 2, // +1 for label column, +1 for grid index
                  }}
                >
                  {m.label}
                </div>
              ))}
            </div>

            {/* Main grid */}
            <div
              className="grid grid-flow-col gap-0.75"
              style={{
                gridTemplateRows: 'repeat(7, 10px)',
                gridTemplateColumns: '24px repeat(53, 10px)',
              }}
            >
              {/* weekday labels */}
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
                <div
                  key={i}
                  className="flex w-6 items-center justify-end pr-1 text-[9px]"
                >
                  {d}
                </div>
              ))}

              {/* offset */}
              {Array.from({ length: firstDayOffset }, (_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {/* days */}
              {days.map((day, i) => (
                <div
                  key={i}
                  title={day.yearDayName}
                  className="h-2.5 w-2.5 cursor-pointer rounded-[1.8px] bg-[#1e1e1f]"
                />
              ))}
            </div>
            <div
              className={`${
                isCollapsed ? 'max-h-0 opacity-0' : 'max-h-125 opacity-100'
              } mt-4 flex items-center justify-between px-2 transition-all duration-150`}
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
