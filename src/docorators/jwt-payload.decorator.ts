import {
    ExecutionContext,
    UnauthorizedException,
    createParamDecorator,
} from "@nestjs/common";
import { AuthPayloadDto } from "src/api/auth/dto/payload.dto";

export const Payload = createParamDecorator(
    (_: string, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        const payload: AuthPayloadDto = request.user;

        if (!payload.id || !payload.username) throw new UnauthorizedException();

        return payload;
    },
);
