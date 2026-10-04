interface HabitData {
  name?: string;
  entries?: { day?: string; quantity?: number }[];
}

export function CalculatePallet(habitData: HabitData) {
  let entryQttSum = 0;
  let average = 0;

  for (let y = 0; y <= habitData?.entries.length; y++) {
    entryQttSum += Number(habitData.entries[y].quantity || 0);
  }

  average = entryQttSum / 2;
  const roundedAverage = average - (average % 1);

  return roundedAverage;
}
