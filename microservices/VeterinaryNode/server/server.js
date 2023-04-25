var PROTO_PATH = __dirname + '/protos/dogVeterinary.proto';
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
// Suggested options for similarity to existing grpc.load behavior
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
var grpcObject = grpc.loadPackageDefinition(packageDefinition);
// The protoDescriptor object has the full package hierarchy
var vetPackage = grpcObject.vetPackage;

var server = new grpc.Server();
server.bindAsync("0.0.0.0:6000", grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});
//zdaj bomo dodali serverju service ki smo definirali
server.addService(vetPackage.VetService.service, {
    "createVetVisit": createVetVisit,
    "returnVetVisit": returnVetVisit
});


const vetVisit = [];
//tukaj bomo mapirali metode specificirane metode v proto-filu
//metode vedno vzamejo dva parametra, to sta: call (klic ki se naredi) in callback(se uporabi da pošlješ nazaj response na clienta)
function createVetVisit(call, callback) {
    const vetVisitItem = {
        "id": vetVisit.length + 1,
        "dogName": call.request.dogName,
        "dogId": call.request.dogId,
        "ownerId": call.request.ownerId,
        "dateOfCheck": call.request.dateOfCheck
    }
    vetVisit.push(vetVisitItem)
    //Sedaj kličemo clienta nazaj
    callback(null, vetVisitItem)
}

function returnVetVisit(call, callback) {
    callback(null, {"visits": vetVisit})
}

