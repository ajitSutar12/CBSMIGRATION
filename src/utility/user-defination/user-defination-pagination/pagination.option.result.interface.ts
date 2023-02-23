import { USERDEFINATION } from '../entity/user-defination.entity';
export interface PaginationResultInterface {

    data: USERDEFINATION[];
    recordsTotal: number;
    next?: string;
    previous?: string;

};