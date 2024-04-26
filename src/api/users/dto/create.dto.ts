import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "Username",
        example: "john doe",
        type: String,
        description: "The username for user",
    })
    username: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "Password",
        example: "john_123",
        type: String,
        description: "The password for user",
    })
    password: string;
}
