import { KNN } from "../models/KNN";
import { Covariance, Variance } from "../utils";

const trainKNearestNeighbors = ( model:KNN ):void => {

    const x = model.home_possession;
    const y = model.result;

    // calcul de la covariance de x et y //
    let covariance = Covariance(x,y);

    // calcul de la variance de x //
    let varianceX = Variance(x);

    // calcul du coefficient de la pente (m) //
    const slope = covariance / varianceX;
    
    // calcul du coefficient d'interception(b) //
    const meanX = model.Average(x);
    const meanY = model.Average(y);
    const intercept = meanY - slope * meanX;

    model.intercept = intercept;
    model.slope = slope;
}


// Entrainement utilisable à tout les modèle d'apprentissage
export const Train = ( model:KNN ):void => {
    if(model instanceof KNN){
        return trainKNearestNeighbors( model );
    }
}