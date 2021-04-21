export enum OrderStatus{
    PENDING, CONCLUSED
}


export type Event = {
    id?: number;
    name: string;
    price: number;
    tickets: number;
    address: string;
    latitude: number;
    longitude: number;
    date: Date;
    description: string;
    imageUri: string;
    status: OrderStatus;
}