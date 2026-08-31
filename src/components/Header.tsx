import { Cog8ToothIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <div className="relative flex items-center justify-end px-10 py-4">
      <div className="absolute top-0 left-10 flex flex-col leading-0.5">
        <img src="/maple-purple.png" alt="" className="size-24" />
        <span className="text-center">Maple</span>
      </div>

      <Cog8ToothIcon
        className="size-6 cursor-pointer transition duration-200 hover:text-purple-600"
        title="settings"
      />
    </div>
  );
};

export default Header;
