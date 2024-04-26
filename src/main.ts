import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule } from "@nestjs/swagger";
import { swaggerConfig } from "./config/swagger.config";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule);
        app.setGlobalPrefix("api");
        app.useGlobalPipes(new ValidationPipe());
        app.enableCors({
            origin: "http://localhost:5173",
            methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
        });

        SwaggerModule.setup(
            "docs",
            app,
            SwaggerModule.createDocument(app, swaggerConfig),
        );

        await app.listen(process.env.PORT);
    } catch (error) {
        console.error(error.message);
    }
}
bootstrap();
