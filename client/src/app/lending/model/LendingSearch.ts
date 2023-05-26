import { Pageable } from "src/app/core/model/page/Pageable";

export class LendingSearch {
    pageable: Pageable;
    game: number;
    client: number;
    date: Date;
}