import * as fs from 'fs';
import { KNN } from './models/KNN';

(() => {

    fs.readFile('datas.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Erreur lors de la lecture du fichier:', err);
          return;
        }
        let parsed = JSON.parse(data);
        let knn = new KNN(parsed);
        console.log(knn.away_possession);
    })

})()