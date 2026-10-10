import { useState } from 'react';
import HeatMap from '../components/heat-map/HeathMap';
import Modal from '../components/Modal';
import CreateHabit from '../components/create-habit/CreateHabit';
import Header from '../components/Header';

const MainPage = () => {
  // const [entries, setEntries] = useState([]);
  // const [average, setAverage] = useState();
  // const [total, setTotal] = useState();
  const [openCreateHabitModal, setOpenCreateHabitModal] = useState(false);
  console.log('⬜ - Core - openCreateHabitModal:', openCreateHabitModal);

  // const paddedDays = [
  //   ...Array.from({ length: firstDayOffset }, () => null),
  //   ...days,
  // ];

  return (
    <>
      <div className="flex flex-col justify-center">
        <Header />

        <h3 className="flex w-full items-center justify-center gap-2 pt-5 text-3xl">
          <span className="text-center font-semibold">HABITS</span>
          <span
            // onClick={createStickyWindow}
            onClick={() => setOpenCreateHabitModal(true)}
            className="material-icons bg-background-secondary flex cursor-pointer items-center justify-center rounded-sm p-0.5 px-2 text-[20px]! transition duration-200 hover:bg-gray-900"
          >
            +
          </span>
        </h3>
        <div className="mt-7 flex h-full w-full justify-center p-2">
          <HeatMap />
        </div>
      </div>

      {/* CREATE HABIT */}
      {openCreateHabitModal && <Modal content={<CreateHabit />} />}
    </>
  );
};

export default MainPage;
