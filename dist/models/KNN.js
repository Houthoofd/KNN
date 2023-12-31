"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KNN = void 0;
const utils_1 = require("../utils");
class KNN {
    constructor(data) {
        this.intercept = 0;
        this.slope = 0;
        this.PrepareMatrice = () => { return (0, utils_1.PrepareMatrice)(this); };
        this.GridSearch = () => { return (0, utils_1.GridSearch)(this); };
        this.Train = () => { return (0, utils_1.Train)(this); };
        this.data = data;
    }
    // Caractéristiques //
    get home_possession() {
        return Array.from(Object.values(this.data), (value, key) => {
            return value["possession_home"];
        });
    }
    // Caractéristiques //
    get away_possession() {
        return Array.from(Object.values(this.data), (value, key) => {
            return value["possession_away"];
        });
    }
    // Caractéristiques //
    get home_shots() {
        return Array.from(Object.values(this.data), (value, key) => {
            return value["shots_home"];
        });
    }
    // Caractéristiques //
    get away_shots() {
        return Array.from(Object.values(this.data), (value, key) => {
            return value["shots_away"];
        });
    }
    // Etiquettes //
    get result() {
        return Array.from(Object.values(this.data), (value, key) => {
            return value["result"];
        });
    }
}
exports.KNN = KNN;
//# sourceMappingURL=KNN.js.map