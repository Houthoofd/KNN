import { DataType } from "./datas";
import { Train, PrepareMatrice, GridSearch } from "../utils";

interface IKNN{
    /** looool */
    intercept:number;
}

export class KNN implements IKNN{

    intercept: number = 0;
    slope:number = 0;
    data:DataType;

    constructor(data:DataType){
        this.data = data;
    }
    // Caractéristiques //
    get home_possession(){
        return Array.from(Object.values(this.data),(value,key)=>{
            return value["possession_home"];
        })
    }
    // Caractéristiques //
    get away_possession(){
        return Array.from(Object.values(this.data),(value,key)=>{
            return value["possession_away"];
        })
    }
    // Caractéristiques //
    get home_shots(){
        return Array.from(Object.values(this.data),(value,key)=>{
            return value["shots_home"];
        })
    }
    // Caractéristiques //
    get away_shots(){
        return Array.from(Object.values(this.data),(value,key)=>{
            return value["shots_away"];
        })
    }
    // Etiquettes //
    get result(){
        return Array.from(Object.values(this.data),(value,key)=>{
            return value["result"];
        })
    }
    PrepareMatrice = () => { return PrepareMatrice(this)};
    GridSearch = () => { return GridSearch(this)};
    Train = () => { return Train(this) };
}