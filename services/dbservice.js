var MongoClient=require('mongodb').MongoClient;
exports.createConnection=function(){
  MongoClient.connect("mongodb://siriusworkshop:yuganthi123@ds247047.mlab.com:47047/projector1").then(function(client){
    console.log("connected to mongodb");
    // client.db("projector1");
  exports.database=client.db("projector1");
  });

}
