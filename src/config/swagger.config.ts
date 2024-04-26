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
    .setTitle("Data Shop API")
    .setDescription("Data Shop API description")
    .setVersion("1.0")
    .build();
