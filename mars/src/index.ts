import { IDotProduct } from '../../interfaces/IDotProduct';

import express from 'express';
import firebase from 'firebase';

require('firebase/functions');

firebase.initializeApp({
    apiKey: 'AIzaSyDz24hxc95eYVochROjQ80onRmgRnA1G6g',
    projectId: 'multi-algorithm-runner',
});

// Initialize Cloud Functions through Firebase
const functions = require('firebase-functions');

const app = express();

app.use(express.json());

app.use(express.static(__dirname + 'public/'));

app.post('/api/dotproduct', (req: any, res: any) => {
    console.log('DotProduct endpoint hit.');
    const runDotProduct = firebase.functions().httpsCallable('dot_product');
    runDotProduct({ list1: req.body.list1, list2: req.body.list2 }).then((value: IDotProduct) => {
        res.status(200).json(value);
    })
    .catch((error: IDotProduct) => {
        console.log('Error occured.');
        console.log(error);

        if (error) {
            if (error.message) {
                console.log('Error message found.');
                console.log(error.message);
                res.status(500).json(error.message);
                return;
            }

            console.log('General error found.');
            console.log(error);
            res.status(500).json(error);
            return;
        } 
    });
});

app.post('/api/findprimes', (req: any, res: any) => {
    console.log('FindPrimes endpoint hit.');
    const findPrimes = firebase.functions().httpsCallable('find_primes');

    // TODO: Create interface for findPrimes object
    findPrimes({ list1: req.body.list }).then((value) => {
        res.status(200).json(value);
    })
    .catch((error) => {
        console.log('Error occurred.');
        console.log(error);

        if (error) {
            if (error.message) {
                console.log('Error message found.');
                console.log(error.message);
                res.status(500).json(error.message);
                return;
            }

            console.log('General error found.');
            console.log(error);
            res.status(500).json(error);
            return;
        }
    });
});

if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
}
else {
    exports.app = functions.https.onRequest(app);
}
