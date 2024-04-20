'use client';
import React, { useEffect, useState } from 'react';
import { fetchFirstTenRestaurants } from '../utils/getData';
import { Restaurant } from '../utils/types';
import RestaurantItem from './RestaurantItem';

const RestaurantTable = () => {
	const [data, setData] = useState<Restaurant[]>([]);

	const fetchData = async () => {
		const data: Restaurant[] = await fetchFirstTenRestaurants();
		setData(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="flex h-fit min-h-[100vh] w-[80%] flex-col items-center justify-center rounded-lg bg-white px-5 py-12">
			{data.length > 0 ? (
				data.map((restaurant) => (
					<RestaurantItem key={restaurant.id} restaurant={restaurant} />
				))
			) : (
				<img className="scale-50" src="/orangeLoader.gif" />
			)}
		</div>
	);
};

export default RestaurantTable;
