import { KNN } from "../models/KNN";

export function PrepareMatrice(model:KNN):number[][][]{
  let Array = [];


  // possession //
  for(let index = 0; index < model.home_possession.length; index++){
    Array.push([[model.home_possession[index]]]);
  }
  // possession //
  for(let index = 0; index < model.away_possession.length; index++){
    for(let i = 0; i < Array[index].length; i++){
      Array[index][i].push(model.away_possession[index]);
    }
  }

  // shots //
  for(let index = 0; index < model.home_shots.length; index++){
    Array[index].push([model.home_shots[index]]);
  }
  // shots //
  for(let index = 0; index < model.away_shots.length; index++){
    Array[index][1].push(model.away_shots[index]);
  }
  return Array;
}