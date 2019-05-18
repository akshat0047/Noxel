var express = require("express");
var myParser = require("body-parser");
var app = express();
var cors = require("cors");
var fs = require("fs");
var url = require("url");
const request = require("request");
var i = 0;

app.use(myParser.urlencoded({ extended: true }));
app.use(myParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get("/:pixelId/pixel.png", function(request, response) {
  
  i++;
  fs.writeFile(
    "./dataClient/client" + i + ".json",
    JSON.stringify(url.parse(request.url, true).query),
    () => {
      console.log("client file");
    }
  );
  
  //Sending back a pixel
  var img = fs.readFileSync('./public/pixel.png');
  response.writeHead(200, {'Content-Type': 'image/png' });
  response.end(img, 'binary');

  makeRequest(
    request.protocol + "://" + request.get("host") + "/serverone" + request.originalUrl
  );
});

function makeRequest(d) {
  console.log(d);
  request.get(d,
    (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      console.log("sent");
      console.log(err);
     
    }
  );
}

app.get("/serverone/:pixelId/pixel.png", function(request, response) {
  fs.writeFile(
    "./dataServer/server" + i + ".json",
    JSON.stringify(url.parse(request.url, true).query),
    () => {
      console.log("server file");
    }
  );
});

app.listen(4000);
