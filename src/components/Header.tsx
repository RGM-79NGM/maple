import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4 pt-2 pl-5">
      <div className="flex flex-col leading-0.5">
        <img src="/logo.png" alt="" className="size-16" />
      </div>

      <Icon
        className="hover:text-primary size-6 cursor-pointer transition duration-100"
        icon="mdi:settings"
      />
    </div>
  );
};

export default Header;
