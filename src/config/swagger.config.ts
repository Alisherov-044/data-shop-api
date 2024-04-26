import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
    .addBearerAuth(
        {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
            name: "JWT",
            description: "Enter JWT token",
            in: "header",
        },
        "jwt-auth",
    )
    .setTitle("E commerce API")
    .setDescription("E commerce API description")
    .setVersion("1.0")
    .build();
