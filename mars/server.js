const path = require('path');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('../marf/dist/marf'));

app.get('/', (req, res) => {
    const rootPath = env === 'development' ? path.join(__dirname, '../marf/src/index.html') : path.join(__dirname, '../marf/dist/marf');

    const options = {
        root: rootPath
    };

    return res.sendFile('index.html', options);
});

app.post('/', (req, res) => {
    runDotProduct(req.body.list1, req.body.list2).then((value) => {
        res.status(200).json(value)
    })
    .catch((error) => {
        res.status(500).json(error.message);
    });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

/*
To test it, run server, then run the following in PowerShell:

$params = @{"name"="nathan"; "list1"=@(1,2,3); "list2"=@(2,3,4)} // Will generate valid response
$params = @{"name"="nathan"; "list1"=@(1,2,'asdf'); "list2"=@(2,3,4)} // Will generate invalid response
Invoke-WebRequest -Uri http://localhost:3000/ -Method POST -Body ($params|ConvertTo-Json) -ContentType "application/json"
*/

function runDotProduct(list1, list2) {
    return new Promise((resolve, reject) => {
        let value = {
            data: null, 
            message: null
        };

        const spawn = require('child_process').spawn;
        const pythonProcess = spawn('python', ['./dotproduct.py', list1, list2])

        pythonProcess.stdout.on('data', (data) => {
            let formattedData = parseFloat(data);
    
            // If formatted data is not a number, then there wasn't a result, so we attach the caught error message
            if (isNaN(formattedData)) {
                value.message = data.toString();
            }
            else {
                value.data = formattedData;
            }
        })
    
        pythonProcess.on('exit', (code) => {
            if (code === 0) {
                resolve(value);
            }
            else {
                reject(value);
            }
        })
    });
}