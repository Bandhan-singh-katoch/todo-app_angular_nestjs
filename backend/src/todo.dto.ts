import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class TodoDto{
    @IsNotEmpty()
    title:string;

    @IsNotEmpty()
    completed: boolean;

}