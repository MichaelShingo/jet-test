'use client';
import { useEffect, useState } from "react";
import { fetchFirstTenRestaurants } from "../utils/getData";
import { Restaurant } from "../utils/types"


const RestaurantTable = () => {
    const [data, setData] = useState<Restaurant[]>([]);

    const fetchData = async () => {
        const data: Restaurant[] = await fetchFirstTenRestaurants();
        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    return ( 
        <div className="py-15 flex h-fit min-h-10 w-[80%] flex-col items-center justify-center rounded-lg bg-white px-5">
            {data ? data.map((restaurant) => <RestaurantItem key={restaurant.id} restaurant={restaurant}/>) :  <></>}
        </div> 
        );
}
 
interface RestaurantItemProps {
    restaurant: Restaurant;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({restaurant}) => {
    return (
        <div className="my-3 min-h-20 w-[90%] bg-orange-500">
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.rating.starRating}</h3>
            <div className="flex flex-row">
                {restaurant.cuisines.map((cuisine) => {
                    return <Cuisine key={cuisine.uniqueName} name={cuisine.name} />
                })} 
            </div>
        </div>
    )
}

interface CuisineProps {
    name: string;
}

const Cuisine: React.FC<CuisineProps> = ({name}) => {
    return (
        <div className="m-5 h-10 w-fit rounded-sm bg-white">{name}</div>
    )
}

export default RestaurantTable;