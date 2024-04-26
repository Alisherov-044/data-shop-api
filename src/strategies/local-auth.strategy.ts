import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "src/api/auth/auth.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(username: string, password: string) {
        return this.authService.validateUser({ username, password });
    }
}
