var PROTO_PATH = __dirname + '/protos/dogVeterinary.proto';
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
// Suggested options for similarity to existing grpc.load behavior
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
var grpcObject = grpc.loadPackageDefinition(packageDefinition);

const express = require('express')
const app = express()
app.use(express.json());

var vetPackage = grpcObject.vetPackage;


const client = new vetPackage.VetService('grpc-server:6000', grpc.credentials.createInsecure());

app.post('/vetVisit', (req,res) => {
    //ko kličeš funkcijo vzame dva paramtra, kaj se pošlje v tem primeru json in potem error in response
    if(req.body.id == null || req.body.dogName == null || req.body.dogId == null || req.body.ownerId == null || req.body.dateOfCheck == null) {
        res.send({"error": "Missing fields"});
    } else {
        if(req.body.id == '' || req.body.dogName == '' || req.body.dogId == '' || req.body.ownerId == '' || req.body.dateOfCheck == '') {
            res.send({"error": "Fields are empty"});
            } else {
                client.createVetVisit( req.body, (err, response) => {
                    res.send({"success": "Vet visit reserved"});
                });
            }
    }
})
app.get('/getAllVisits', (req,res) => {
    client.returnVetVisit({}, (err, response) => {
        res.send(JSON.stringify(response));
    })
});

app.get('/test', (req,res) => {
    res.send("test")
})
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

module.exports = app;
