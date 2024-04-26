import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import { CategoriesModule } from "./api/categories/categories.module";
import { AuthModule } from './api/auth/auth.module';

@Module({
    imports: [
        DatabaseModule,
        CategoriesModule,
        ConfigModule.forRoot({ envFilePath: ".env" }),
        AuthModule,
    ],
})
export class AppModule {}
