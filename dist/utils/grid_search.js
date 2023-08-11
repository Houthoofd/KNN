"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridSearch = void 0;
const matrice_1 = require("../utils/matrice");
function GridSearch(model) {
    let result = 0;
    let squareResult = 0;
    let Arr = [];
    let array = (0, matrice_1.PrepareMatrice)(model);
    for (let index = 0; index < array.length; index++) {
        let first_member = Math.pow(array[index][0][0] - array[index][0][1], 2);
        let second_member = Math.pow(array[index][0][1] - array[index][0][0], 2);
        let third_member = Math.pow(array[index][1][0] - array[index][1][1], 2);
        let fourth_member = Math.pow(array[index][1][1] - array[index][1][0], 2);
        let squareResult = first_member + second_member + third_member + fourth_member;
        Arr.push(Math.sqrt(squareResult));
    }
    Arr.sort((a, b) => a - b);
    console.log(Arr);
}
exports.GridSearch = GridSearch;
//# sourceMappingURL=grid_search.js.map