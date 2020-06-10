import { IDotProduct } from '../interfaces/IDotProduct';

const path = require('path');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('../marf/dist/marf'));

app.get('/', (req: any, res: any) => {
    const rootPath = env === 'development' ? path.join(__dirname, '../marf/src/index.html') : path.join(__dirname, '../marf/dist/marf');

    const options = {
        root: rootPath
    };

    return res.sendFile('index.html', options);
});

app.post('/api/dotproduct', (req: any, res: any) => {
    runDotProduct(req.body.list1, req.body.list2).then((value: IDotProduct) => {
        res.status(200).json(value);
    })
    .catch((error: IDotProduct) => {
        res.status(500).json(error.message);
    });
});

app.post('/api/primenumberchecker', (req: any, res: any) => {
    checkPrimeNumber(req.body.list).then((value) => {
        res.status(200).json(value);
    })
    .catch((error) => {
        res.status(500).json(error.message);
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

/*
To test it, run server, then run the following in PowerShell:

$params = @{"name"="nathan"; "list1"=@(1,2,3); "list2"=@(2,3,4)} // Will generate valid response
$params = @{"name"="nathan"; "list1"=@(1,2,'asdf'); "list2"=@(2,3,4)} // Will generate invalid response
Invoke-WebRequest -Uri http://localhost:3000/ -Method POST -Body ($params|ConvertTo-Json) -ContentType "application/json"
*/

const runDotProduct = (list1: Array<number>, list2: Array<number>) => {
    return new Promise((resolve, reject) => {
        let value: IDotProduct = <IDotProduct>{};

        const spawn = require('child_process').spawn;
        const pythonProcess = spawn('python', ['./dotproduct.py', list1, list2]);
        
        pythonProcess.stdout.on('data', (data: string) => {
            value = JSON.parse(data);
        });
    
        pythonProcess.on('exit', (code: number) => {
            if (code === 0) {
                resolve(value);
            }
            else {
                reject(value);
            }
        });
    });

}

const checkPrimeNumber = (list: string) => {
    return new Promise((resolve, reject) => {
        let value = {
            data: null,
            message: null
        };

        const spawn = require('child_process').spawn;
        const pythonProcess = spawn('python', ['./JaesScriptName.py', list]);

        pythonProcess.stdout.on('data', (data) => {
            if (Array.isArray(data)) {
                value.data = data;
            }
            else {
                value.message = data.toString();
            }
        });

        pythonProcess.on('exit', (code) => {
            if (code === 0) {
                resolve(value);
            }
            else {
                reject(value);
            }
        });
    });

}