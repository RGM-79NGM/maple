import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();

	return (
		<div className="flex items-center justify-between pr-10 pl-2.5">
			<button
				onClick={() => navigate('/')}
				className="relative flex cursor-pointer flex-col leading-0.5"
			>
				<img src="/logo2.svg" alt="" className="md:w-16 lg:w-27" />

				<span className="text-base1 absolute bottom-5.5 left-[23%] font-semibold lg:text-xl">
					Maple
				</span>
			</button>

			<Icon
				onClick={() => navigate('/settings')}
				className="hover:text-primary cursor-pointer transition duration-100 sm:size-4.5 md:size-5 lg:size-5.5 xl:size-5.5"
				icon="mdi:settings"
			/>
		</div>
	);
};
