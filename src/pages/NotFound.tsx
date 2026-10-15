import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="grid h-full w-full grid-cols-2 items-center gap-20 p-3 px-[10%] pt-[10%]">
			<div>
				<img src="/not_found_meme.jpg" alt="" className="rounded-md" />
			</div>

			<div className="flex w-100 flex-col items-center justify-center gap-2.5">
				<h1 className="text-primary mb-2 text-7xl">404</h1>
				<span>Uh-oh, it seems you hit a wall.</span>
				<button
					onClick={() => navigate('/')}
					className="bg-bg2 hover:bg-base1 hover:text-bg flex cursor-pointer items-center justify-center gap-3 rounded-lg px-6 py-3 text-lg transition duration-150"
				>
					<Icon icon="mdi:home" />
					Go Home
				</button>
			</div>
		</div>
	);
};
