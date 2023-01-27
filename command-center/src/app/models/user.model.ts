import { Iuser } from "../interfaces/Iuser.interface";

export class User implements Iuser{
    id!: number;
    username!: string;
    password!: string;
    email!: string;
    firstName!: string;
    lastName!: string;
}
