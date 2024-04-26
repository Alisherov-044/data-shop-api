import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { CreateCategoryDto } from "./dto/create.dto";
import { UpdateCategoryDto } from "./dto/update.dto";
import { CategoryEntityDto } from "./dto/entity.dto";

@Injectable()
export class CategoriesService {
    constructor(private readonly database: DatabaseService) {}

    async findAll(): Promise<CategoryEntityDto[]> {
        try {
            return await this.database.category.findMany();
        } catch {
            throw new NotFoundException("Categories not found");
        }
    }

    async findOne(id: number): Promise<CategoryEntityDto> {
        try {
            const category = await this.database.category.findUnique({
                where: { id },
            });

            if (!category) {
                throw new NotFoundException("Category not found");
            }

            return category;
        } catch {
            throw new NotFoundException("Category not found");
        }
    }

    async create(category: CreateCategoryDto): Promise<CategoryEntityDto> {
        try {
            return await this.database.category.create({ data: category });
        } catch {
            throw new BadRequestException("Could not create category");
        }
    }

    async update(
        id: number,
        category: UpdateCategoryDto,
    ): Promise<CategoryEntityDto> {
        try {
            return await this.database.category.update({
                where: { id },
                data: category,
            });
        } catch {
            throw new BadRequestException("Could not update category");
        }
    }

    async delete(id: number): Promise<CategoryEntityDto> {
        try {
            const category = await this.database.category.findUnique({
                where: { id },
            });

            if (!category) {
                throw new NotFoundException("Category not found");
            }

            await this.database.category.delete({
                where: { id },
            });

            return category;
        } catch {
            throw new BadRequestException("Could not delete category");
        }
    }
}
