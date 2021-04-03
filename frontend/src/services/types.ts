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
}


export type Order = {
    id?: number;
	moment: Date;
    price: number;
	qtd: number;
	total: number;
	status: OrderStatus;
}