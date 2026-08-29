import { useState } from 'react';
import HeatMap from '../components/heat-map/HeathMap';
import Modal from '../components/Modal';
import CreateHabit from '../components/create-habit/CreateHabit';
import { createStickyWindow } from '../components/StickWindow';

const Core = () => {
  const [entries, setEntries] = useState([]);
  const [average, setAverage] = useState();
  const [total, setTotal] = useState();
  const [openCreateHabitModal, setOpenCreateHabitModal] = useState(false);
  console.log('⬜ - Core - openCreateHabitModal:', openCreateHabitModal);

  // const paddedDays = [
  //   ...Array.from({ length: firstDayOffset }, () => null),
  //   ...days,
  // ];

  return (
    <>
      <div className="flex flex-col justify-center">
        <h3 className="flex w-full items-baseline justify-center pt-5 text-center text-4xl font-bold">
          <span className="w-36 text-center">Habits</span>
          <span
            // onClick={createStickyWindow}
            onClick={() => setOpenCreateHabitModal(true)}
            className="material-icons flex cursor-pointer items-center justify-center rounded-sm bg-gray-800 p-0.5 text-[20px]! transition duration-200 hover:bg-gray-900"
          >
            add
          </span>
        </h3>
        <div className="mt-7 flex h-full w-full justify-center">
          <HeatMap />
        </div>
      </div>

      {openCreateHabitModal && <Modal content={<CreateHabit />} />}
    </>
  );
};

export default Core;
