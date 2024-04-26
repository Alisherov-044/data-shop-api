import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class JwtRefreshDto {
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
