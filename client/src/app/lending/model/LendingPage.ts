import { Pageable } from "src/app/core/model/page/Pageable";
import { Lending } from "./Lending";

export class LendingPage {
    content: Lending [];
    pageable: Pageable;
    totalElements: number;
}