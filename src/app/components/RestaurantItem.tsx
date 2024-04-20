import { ReactNode } from 'react';
import { Restaurant } from '../utils/types';

interface RestaurantItemProps {
	restaurant: Restaurant;
}

const roundToNearestQuarter = (num: number): number => {
	if (num > 0.7) {
		return Math.floor(num * 4) / 4;
	}
	return Math.ceil(num * 4) / 4;
};

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
	let fullAddress = `${restaurant.address.firstLine}+${restaurant.address.city}+${restaurant.address.postalCode}`;
	fullAddress = fullAddress.replace(' ', '+');

	const generateStarRating = (): ReactNode[] => {
		const res: ReactNode[] = [];
		const floatRating: number = restaurant.rating.starRating;
		const intRating = Math.floor(floatRating);
		const decimalRating: number = roundToNearestQuarter(floatRating - intRating);

		for (let i = 0; i < intRating; i++) {
			res.push(<img key={i} className="" src="/star-solid.svg" />);
		}

		if (decimalRating > 0) {
			res.push(
				<>
					<img src="/star-solid.svg" />
					<div
						className="h-8 w-8 bg-orange-primary"
						style={{ transform: `translateX(${-1 * (-26 * decimalRating + 26)}px)` }}
					></div>
				</>
			);
		}
		return res;
	};

	return (
		<div className="relative my-3 flex min-h-20 w-[90%] flex-row rounded-xl bg-orange-primary p-3 transition-all hover:scale-[102%]">
			<div className="flex w-[60%] flex-col gap-2">
				<h2 className="text-3xl font-extrabold">{restaurant.name}</h2>
				<div className="flex flex-row">
					<h3 className="text-2xl font-bold">{restaurant.rating.starRating}/5</h3>
					<div className="ml-2 mt-[3px] flex h-6 w-full flex-row">
						{generateStarRating()}
					</div>
				</div>

				<div className="flex flex-row flex-wrap">
					{restaurant.cuisines.map((cuisine) => {
						return (
							<div
								key={cuisine.name}
								className="my-2 mr-4 flex h-8 w-fit items-center justify-center rounded-md bg-white px-2 text-orange-primary"
							>
								<h4>{cuisine.name}</h4>
							</div>
						);
					})}
				</div>
			</div>
			<div className="flex flex-col text-lg font-bold">
				{restaurant.address.firstLine}
				<br></br>
				{restaurant.address.city}
				<br></br>
				{restaurant.address.postalCode}
				<a
					target="_blank"
					href={`https://www.google.com/maps?q=${fullAddress}`}
					rel="noreferrer"
					className="h-fit w-fit"
				>
					<button className="bottom-0 right-0 mt-3 h-5 w-5">
						<img className="" src="/map-pin-solid.svg" />
					</button>
				</a>
			</div>
		</div>
	);
};

export default RestaurantItem;
