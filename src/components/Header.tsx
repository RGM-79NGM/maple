import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();

	return (
		<div className="border-base2 flex items-center justify-between border-b px-10 py-4 pt-2 pl-5">
			<button
				onClick={() => navigate('/')}
				className="flex cursor-pointer flex-col leading-0.5"
			>
				<img src="/logo.png" alt="" className="size-16" />
			</button>

			<Icon
				onClick={() => navigate('/settings')}
				className="hover:text-primary cursor-pointer transition duration-100 sm:size-4.5 md:size-5 lg:size-5.5 xl:size-5.5"
				icon="mdi:settings"
			/>
		</div>
	);
};
