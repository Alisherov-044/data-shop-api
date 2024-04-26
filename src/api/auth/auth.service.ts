import { JwtService } from "@nestjs/jwt";
import { BadRequestException, Injectable } from "@nestjs/common";
import { AuthLoginDto } from "./dto/login.dto";
import { DatabaseService } from "src/database/database.service";
import { AuthSignUpDto } from "./dto/signup.dto";
import { AuthPayloadDto } from "./dto/payload.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly database: DatabaseService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser({ username, password }: AuthLoginDto) {
        try {
            const user = await this.database.user.findUnique({
                where: { username },
            });
            if (user && user.password === password) {
                const { id, username } = user;
                const accessToken = await this.jwtService.signAsync({
                    id,
                    username,
                });
                const refreshToken = await this.jwtService.signAsync(
                    { id, username },
                    {
                        expiresIn: "7d",
                    },
                );
                return { accessToken, refreshToken };
            }
            return null;
        } catch {
            throw new BadRequestException("Could not validate user");
        }
    }

    async refreshToken({ id, username }: AuthPayloadDto) {
        try {
            const accessToken = await this.jwtService.signAsync({
                id,
                username,
            });
            return { accessToken };
        } catch {
            throw new BadRequestException("Could not refresh token");
        }
    }

    async signup({ username, password, confirmPassword }: AuthSignUpDto) {
        if (password !== confirmPassword)
            throw new BadRequestException("Passwords do not match");

        try {
            const user = await this.database.user.create({
                data: { username, password },
            });

            if (!user) throw new BadRequestException("Could not create user");

            return user;
        } catch {
            throw new BadRequestException("Could not create user");
        }
    }
}
