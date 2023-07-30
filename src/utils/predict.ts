import { KNN } from "../models/KNN";
import { Sigmoid } from "../utils/sigmoid";

export const Predict = ( model:KNN ):number[] => {
    const x = model.home_possession
    const y = model.result
    const slope = model.slope;
    const intercept = model.intercept;

    const predictions: number[] = [];

    for (let i = 0; i < x.length; i++) {
      const prediction = slope * x[i] + intercept;
      const sigmoid = Sigmoid(prediction);
      predictions.push(sigmoid);
    }
    return predictions;
}