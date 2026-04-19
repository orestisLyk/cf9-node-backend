import { RoleDTO } from "./role.dto";

export interface IPhone {
    type: string;
    number: string;
}

export interface CreateUserDTO {
    username: string;
    password: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    address?: {
        area?: string;
        street?: string;
        number?: string;
        po?: string;
        municipality?: string;
    };
    phone?: IPhone[];
    roles?: string[]; // Array of role IDs as strings
}

export interface UpdateUserDTO {

    password?: string;
    firstname?: string;
    lastname?: string;
    address?: {
        area?: string;
        street?: string;
        number?: string;
        po?: string;
        municipality?: string;
    };
    phone?: IPhone[];
    roles?: string[]; // Array of role IDs as strings
}

export interface UserResponseDTO {
    id: string;
    username: string;
    password: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    address?: {
        area?: string;
        street?: string;
        number?: string;
        po?: string;
        municipality?: string;
    };
    phone?: IPhone[];
    roles?: string[]; // Array of role IDs as strings
}