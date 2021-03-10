const express = require('express');
var app = express();
const path = require('path');
const bodyparser = require("body-parser");
const cors = require('cors');
var ProductRouter = require('./routes/product.routes');

var originsWhitelist = [
  'http://localhost:4200',      //this is my front-end url for development

];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.use(cors(corsOptions));
// body parser parses the body of a get request and sends it to us so we can use the information
app.use(bodyparser.json());    
app.use(bodyparser.urlencoded({ extended: true }));




  // routing leads to the controllers 
  app.get("/", (req,res)=>{
    res.send("homepage")
  });
  app.use('/Products', ProductRouter);


// app.get('/*', (request, res)=>{
//     res.sendFile(path.join(__dirname))
// });

const PORT = process.env.PORT || 8080;
//require("./src/app/routes/DataEntries.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});