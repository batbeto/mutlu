export enum UserStatus{
    USERATIVO, USERDESATIVADO, USERADM
}

export type User = {
    id?: number;
	nome: string;
	email: string;
	cpf: string;
	pass: string;
	status: UserStatus;
}


type EventId = {
    id: number
}

export type UserPayload = {
    event: EventId[];
} & User;