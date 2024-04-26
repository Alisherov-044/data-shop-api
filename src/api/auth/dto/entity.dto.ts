import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthEntitySignDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "Access token",
        example:
            "eyJhbGciOi.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAu.CA7eaHjIHz5NxeIJoFK",
        type: String,
        description: "JWT access token",
    })
    accessToken: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "Refresh token",
        example:
            "sInR5cCI6IkpXVCJ9.bGUuDU3OTYsImV4cCI6MTQ1Og3MjE5Nn0.FK9krLwmMmgI_XiQiIkQ",
        type: String,
        description: "JWT refresh token",
    })
    refreshToken: string;
}

export class AuthEntityRefreshDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        title: "Access token",
        example:
            "eyJhbGciOi.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAu.CA7eaHjIHz5NxeIJoFK",
        type: String,
        description: "JWT access token",
    })
    accessToken: string;
}
