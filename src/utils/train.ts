import { KNN } from "../models/KNN";

const trainKNearestNeighbors = ( model:KNN ):void => {

}


// Entrainement utilisable à tout les modèle d'apprentissage
export const Train = ( model:KNN ):void => {
    if(model instanceof KNN){
        return trainKNearestNeighbors( model );
    }
}