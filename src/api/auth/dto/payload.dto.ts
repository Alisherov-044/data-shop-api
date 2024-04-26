import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class AuthPayloadDto {
    @IsUUID()
    @IsNumber()
    @ApiProperty({
        title: "User ID",
        example: 1,
        type: Number,
        description: "Unique User ID",
    })
    id: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "User name",
        example: "John Doe",
        type: String,
        description: "User name",
    })
    username: string;

    @IsNumber()
    @ApiProperty({
        title: "Issued at",
        example: 1653424324,
        type: Number,
        description: "Issued at",
    })
    iat: number;

    @IsNumber()
    @ApiProperty({
        title: "Expires at",
        example: 1653424324,
        type: Number,
        description: "Expires at",
    })
    exp: number;
}
