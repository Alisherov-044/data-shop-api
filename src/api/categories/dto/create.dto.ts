import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "Category name",
        example: "name",
        type: String,
        description: "The name of the category",
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "Category icon",
        example: "<svg></svg>",
        type: String,
        description: "The icon of the category",
    })
    icon: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "Category image",
        example: "https://image.url",
        type: String,
        description: "The image of the category",
    })
    image: string;
}
