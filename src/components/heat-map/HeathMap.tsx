const HeatMap = () => {
  function generateYearDays(year) {
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

  function getMonthLabels(days, offset) {
    const labels = [];

    days.forEach((day, i) => {
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
    <div className="rounded-lg border border-[#1e1e1f] p-5">
      <label className="flex w-full items-center justify-between pr-1 text-[21px] font-extrabold text-gray-200">
        <span>Save $5,000.00</span>
        <div className="flex h-full items-center gap-2 p-0.5">
          <span className="text-[12px] font-normal">2026</span>
          <span className="material-icons cursor-pointer rounded-md p-0.5 text-[20px]! transition duration-150 hover:bg-gray-800">
            calendar_today
          </span>
          <span className="material-icons cursor-pointer rounded-md p-0.5 text-[20px]! transition duration-150 hover:bg-gray-800">
            workspaces
          </span>
        </div>
      </label>
      <div className="mt-5 flex w-full gap-2 align-top">
        <div className="flex w-full gap-1 rounded-sm py-1">
          <div className="relative">
            {/* Month labels */}
            <div className="mb-1 grid auto-cols-[12px] grid-flow-col gap-1">
              {/* empty cell for weekday column */}
              <div className="w-6" />

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
            <div className="grid grid-flow-col grid-rows-7 gap-1">
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
                  className="h-3 w-3 cursor-pointer rounded-[1.5px] bg-[#1e1e1f]"
                />
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between px-2">
              <div className="flex flex-col gap-0 text-[14px]">
                <span>Number of entries: 4</span>
                <span>Average: 87.75 R$s</span>
                <span>Total: 351.00 R$s</span>
              </div>

              <div className="flex max-h-25 min-h-7.5 gap-2 rounded-sm border border-gray-800 px-4 py-1.25 text-[14px]">
                Today: 10 R$s
                <span className="material-icons cursor-pointer rounded-md p-0.5 text-[17px]! transition duration-150 hover:text-gray-800">
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
