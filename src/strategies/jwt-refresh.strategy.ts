import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "src/api/auth/auth.service";
import { AuthPayloadDto } from "src/api/auth/dto/payload.dto";

export class JwtRefreshStrategy extends PassportStrategy(
    Strategy,
    "jwt-refresh",
) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromBodyField("refreshToken"),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: AuthPayloadDto) {
        return payload;
    }
}
