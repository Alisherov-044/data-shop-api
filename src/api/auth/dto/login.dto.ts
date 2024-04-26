import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthLoginDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "Username",
        example: "john doe",
        type: String,
        description: "Username for user",
    })
    username: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "Password",
        example: "john_123",
        type: String,
        description: "Password for user",
    })
    password: string;
}
