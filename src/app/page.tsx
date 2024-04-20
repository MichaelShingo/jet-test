import RestaurantTable from './components/RestaurantTable';

export default function Home() {
	return (
		<>
			<div className="bg-image fixed -z-50 h-full w-full bg-[url('/foodBackground.jpg')] bg-cover bg-center"></div>
			<RestaurantTable />
		</>
	);
}
