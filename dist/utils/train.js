"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Train = void 0;
const KNN_1 = require("../models/KNN");
const utils_1 = require("../utils");
const trainKNearestNeighbors = (model) => {
    const x = model.home_possession;
    const y = model.result;
    // calcul de la covariance de x et y //
    let covariance = (0, utils_1.Covariance)(x, y);
    // calcul de la variance de x //
    let varianceX = (0, utils_1.Variance)(x);
    // calcul du coefficient de la pente (m) //
    const slope = covariance / varianceX;
    // calcul du coefficient d'interception(b) //
    const meanX = model.Average(x);
    const meanY = model.Average(y);
    const intercept = meanY - slope * meanX;
    model.intercept = intercept;
    model.slope = slope;
};
// Entrainement utilisable à tout les modèle d'apprentissage
const Train = (model) => {
    if (model instanceof KNN_1.KNN) {
        return trainKNearestNeighbors(model);
    }
};
exports.Train = Train;
//# sourceMappingURL=train.js.map