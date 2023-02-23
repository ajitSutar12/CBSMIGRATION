import { PaginationResultInterface } from "./pagination.option.result.interface";
import { USERDEFINATION } from '../entity/user-defination.entity';

export class Pagination<PaginationEntity> {
    public data: USERDEFINATION[];
    public recordsFiltered: number;
    public recordsTotal: number;

    constructor(paginationResults: PaginationResultInterface) {

        this.data = paginationResults.data;
        this.recordsFiltered = paginationResults.data.length;
        this.recordsTotal = paginationResults.recordsTotal;

    }
}