export type Car = {
    color: string;
    brand: string;
    tankFillPercentage: number;
    putGaz: (params:{amountEur: number;}) => {change: number};
    drive: (params: {distanceKm: number}) => void;
};