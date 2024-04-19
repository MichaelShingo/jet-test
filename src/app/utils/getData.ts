const endpoint: string = 'https://corsproxy.io/?https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF';
import { Restaurant } from "./types";

export const fetchFirstTenRestaurants = async (): Promise<Restaurant[]> => {
    const res: Response = await fetch(endpoint);
    const restaurantData = await res.json();
    const firstTen: Restaurant[] = restaurantData.restaurants.slice(0, 10);
    return firstTen;
}