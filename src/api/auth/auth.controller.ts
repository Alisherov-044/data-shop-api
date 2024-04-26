import type { Request } from "express";
import { AuthSignUpDto } from "./dto/signup.dto";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { LocalAuthGuard } from "src/guards/local-auth.guard";
import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    UseGuards,
} from "@nestjs/common";
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from "@nestjs/swagger";
import { AuthEntityRefreshDto, AuthEntitySignDto } from "./dto/entity.dto";
import { AuthLoginDto } from "./dto/login.dto";
import { JwtRefreshGuard } from "src/guards/jwt-refresh.guard";
import { JwtRefreshDto } from "./dto/refresh.dto";
import { Payload } from "src/docorators/jwt-payload.decorator";
import { AuthPayloadDto } from "./dto/payload.dto";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("signup")
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ type: AuthEntitySignDto, status: HttpStatus.CREATED })
    @ApiOperation({ summary: "Sign up" })
    async signup(@Body() body: AuthSignUpDto) {
        return await this.authService.signup(body);
    }

    @Post("refresh")
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ type: AuthEntityRefreshDto, status: HttpStatus.CREATED })
    @ApiOperation({ summary: "Refresh token" })
    @UseGuards(JwtRefreshGuard)
    async refreshToken(
        @Body() _: JwtRefreshDto,
        @Payload() payload: AuthPayloadDto,
    ) {
        return await this.authService.refreshToken(payload);
    }

    @Get("check")
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ type: AuthPayloadDto, status: HttpStatus.OK })
    @ApiOperation({ summary: "Check token" })
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth("jwt-auth")
    async check(@Payload() payload: AuthPayloadDto) {
        return payload;
    }

    @Post("login")
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ type: AuthEntitySignDto, status: HttpStatus.OK })
    @ApiOperation({ summary: "Log in" })
    @UseGuards(LocalAuthGuard)
    async login(@Body() _: AuthLoginDto, @Req() req: Request) {
        return req.user;
    }

    @Get("profile")
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth("jwt-auth")
    async profile(@Req() req: Request) {
        return req.user;
    }
}
