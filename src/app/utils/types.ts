export type ResLocation = {
    type: string;
    coordinates: [number, number];
};

export type Address = {
    city: string;
    firstLine: string;
    postalCode: string;
    location: ResLocation;
};

export type Rating = {
    count: number;
    starRating: number;
    userRating: number | null;
};

export type DeliveryEtaMinutes = {
    rangeLower: number;
    rangeUpper: number;
};

export type Availability = {
    delivery: {
        isOpen: boolean;
        canPreOrder: boolean;
        isTemporarilyOffline: boolean;
        nextAvailability: {
            from: string;
        };
        etaMinutes: DeliveryEtaMinutes;
    };
};

export type Cuisine = {
    name: string;
    uniqueName: string;
};

export type Restaurant = {
    id: string;
    name: string;
    uniqueName: string;
    address: Address;
    rating: Rating;
    isNew: boolean;
    driveDistanceMeters: number;
    openingTimeLocal: string;
    deliveryOpeningTimeLocal: string;
    deliveryEtaMinutes: DeliveryEtaMinutes;
    isCollection: boolean;
    isDelivery: boolean;
    isOpenNowForCollection: boolean;
    isOpenNowForDelivery: boolean;
    isOpenNowForPreorder: boolean;
    isTemporarilyOffline: boolean;
    deliveryCost: number;
    minimumDeliveryValue: number;
    defaultDisplayRank: number;
    isTemporaryBoost: boolean;
    isPremier: boolean;
    logoUrl: string;
    isTestRestaurant: boolean;
    deals: any[]; // Change this to a more specific type if available
    tags: any[]; // Change this to a more specific type if available
    cuisines: Cuisine[];
    availability: Availability;
};