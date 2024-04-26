import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class IsExistPipe extends DatabaseService implements PipeTransform {
    constructor(
        private readonly table: string,
        private readonly exeception?: string,
    ) {
        super();
    }

    async transform(id: number): Promise<number> {
        try {
            const data = await this[this.table].findUnique({
                where: { id },
            });

            if (!data) {
                throw new NotFoundException(this.exeception ?? "Not found");
            }

            return id;
        } catch {
            throw new NotFoundException(this.exeception ?? "Not found");
        }
    }
}
