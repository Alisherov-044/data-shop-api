import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
} from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create.dto";
import { UpdateCategoryDto } from "./dto/update.dto";
import { CategoryEntityDto } from "./dto/entity.dto";
import { IsExistPipe } from "src/pipes/is-exict.pipe";
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";

@ApiTags("Categories")
@Controller("categories")
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ type: [CategoryEntityDto], status: HttpStatus.OK })
    @ApiOperation({ summary: "Get all categories" })
    async findAll(): Promise<CreateCategoryDto[]> {
        return await this.categoriesService.findAll();
    }

    @Get(":id")
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ type: CategoryEntityDto, status: HttpStatus.OK })
    @ApiOperation({ summary: "Get category by id" })
    async findOne(
        @Param(
            "id",
            ParseIntPipe,
            new IsExistPipe("category", "Category doesn't exist"),
        )
        id: number,
    ): Promise<CategoryEntityDto> {
        return await this.categoriesService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ type: CategoryEntityDto, status: HttpStatus.CREATED })
    @ApiOperation({ summary: "Create category" })
    @ApiBearerAuth("jwt-auth")
    @UseGuards(JwtAuthGuard)
    async create(
        @Body() category: CreateCategoryDto,
    ): Promise<CategoryEntityDto> {
        return await this.categoriesService.create(category);
    }

    @Patch(":id")
    @HttpCode(HttpStatus.ACCEPTED)
    @ApiResponse({ type: CategoryEntityDto, status: HttpStatus.ACCEPTED })
    @ApiOperation({ summary: "Update category" })
    @ApiBearerAuth("jwt-auth")
    @UseGuards(JwtAuthGuard)
    async update(
        @Param(
            "id",
            ParseIntPipe,
            new IsExistPipe("category", "Category doesn't exist"),
        )
        id: number,
        @Body() category: UpdateCategoryDto,
    ): Promise<CategoryEntityDto> {
        return await this.categoriesService.update(id, category);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.ACCEPTED)
    @ApiResponse({ type: CategoryEntityDto, status: HttpStatus.ACCEPTED })
    @ApiOperation({ summary: "Delete category" })
    @ApiBearerAuth("jwt-auth")
    @UseGuards(JwtAuthGuard)
    async delete(
        @Param(
            "id",
            ParseIntPipe,
            new IsExistPipe("category", "Category doesn't exist"),
        )
        id: number,
    ): Promise<CategoryEntityDto> {
        return await this.categoriesService.delete(id);
    }
}
