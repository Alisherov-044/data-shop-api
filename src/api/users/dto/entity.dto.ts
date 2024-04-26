import { ApiProperty } from "@nestjs/swagger";
import {
    IsDate,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsUUID,
} from "class-validator";

export class UserEntityDto {
    @IsUUID()
    @IsNumber()
    @ApiProperty({
        title: "id",
        example: 1,
        type: Number,
        description: "User ID",
    })
    id: number;

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

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        title: "createdAt",
        example: "2022-01-01T00:00:00.000Z",
        type: Date,
        description: "User created timestamp",
    })
    createdAt: Date;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        title: "updatedAt",
        example: "2022-01-01T00:00:00.000Z",
        type: Date,
        description: "User updated timestamp",
    })
    updatedAt: Date;
}
