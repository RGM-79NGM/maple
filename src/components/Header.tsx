import { Cog8ToothIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4 pt-2 pl-5">
      <div className="flex flex-col leading-0.5">
        <img src="/logo.png" alt="" className="size-16" />
      </div>

      <Cog8ToothIcon
        className="hover:text-primary size-6 cursor-pointer transition duration-100"
        title="settings"
      />
    </div>
  );
};

export default Header;
