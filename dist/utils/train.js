"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Train = void 0;
const KNN_1 = require("../models/KNN");
const trainKNearestNeighbors = (model) => {
};
// Entrainement utilisable à tout les modèle d'apprentissage
const Train = (model) => {
    if (model instanceof KNN_1.KNN) {
        return trainKNearestNeighbors(model);
    }
};
exports.Train = Train;
//# sourceMappingURL=train.js.map