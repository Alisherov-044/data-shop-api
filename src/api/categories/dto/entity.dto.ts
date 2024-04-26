import { ApiProperty } from "@nestjs/swagger";
import {
    IsDate,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsUUID,
} from "class-validator";

export class CategoryEntityDto {
    @IsUUID()
    @IsNumber()
    @ApiProperty({
        title: "id",
        example: 1,
        type: Number,
        description: "Category ID",
    })
    id: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "name",
        example: "Food",
        type: String,
        description: "Category name",
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "icon",
        example: "<svg></svg>",
        type: String,
        description: "Category icon",
    })
    icon: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "image",
        example: "https://image.url",
        type: String,
        description: "Category image",
    })
    image: string;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        title: "createdAt",
        example: "2022-01-01T00:00:00.000Z",
        type: Date,
        description: "Category created timestamp",
    })
    createdAt: Date;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        title: "updatedAt",
        example: "2022-01-01T00:00:00.000Z",
        type: Date,
        description: "Category updated timestamp",
    })
    updatedAt: Date;
}
