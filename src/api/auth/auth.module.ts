import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { LocalAuthStrategy } from "src/strategies/local-auth.strategy";
import { JwtAuthStrategy } from "src/strategies/jwt-auth.strategy";
import { JwtRefreshStrategy } from "src/strategies/jwt-refresh.strategy";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: {
                expiresIn: "5s",
            },
        }),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        LocalAuthStrategy,
        JwtAuthStrategy,
        JwtRefreshStrategy,
    ],
})
export class AuthModule {}
