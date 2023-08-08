import { DataType } from "./datas";
interface IKNN {
    /** looool */
    intercept: number;
}
export declare class KNN implements IKNN {
    intercept: number;
    slope: number;
    data: DataType;
    constructor(data: DataType);
    get home_possession(): number[];
    get away_possession(): number[];
    get home_shots(): number[];
    get away_shots(): number[];
    get result(): number[];
    Train: () => void;
}
export {};
