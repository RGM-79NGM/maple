const Core = () => {
  const yearDays = Array.from({ length: 365 }, (_, i) => i + 1);
  // console.log('⬜ - Core - yearDays:', yearDays);

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

  const paddedDays = [
    ...Array.from({ length: firstDayOffset }, () => null),
    ...days,
  ];

  return (
    <div>
      <div className="pl-5 p-10 mx-5 my-10 border border-[#1e1e1f] rounded-lg">
        <label className="text-gray-200 text-[21px]  font-extrabold">
          Save for my car
        </label>
        <div className="mt-10 w-full align-top  flex gap-2">
          <div className="w-full py-1 rounded-sm flex gap-1 ">
            <div className="relative">
              {/* Month labels */}
              <div className="grid grid-flow-col auto-cols-[12px] gap-1 mb-1">
                {/* empty cell for weekday column */}
                <div className="w-6" />

                {monthLabels.map((m, i) => (
                  <div
                    key={i}
                    className="text-[10px]"
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
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                  (d, i) => (
                    <div
                      key={i}
                      className="text-[9px] w-6 flex items-center justify-end pr-1"
                    >
                      {d}
                    </div>
                  ),
                )}

                {/* offset */}
                {Array.from({ length: firstDayOffset }, (_, i) => (
                  <div key={`empty-${i}`} />
                ))}

                {/* days */}
                {days.map((day, i) => (
                  <div
                    key={i}
                    title={day.yearDayName}
                    className="bg-[#1e1e1f] cursor-pointer h-3 w-3 rounded-[1.5px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core;
