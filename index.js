import express from "express";
import bodyParser from 'body-parser';

// import inquirer from 'inquirer';
import qr from "qr-image"
import fs from "fs";

//
import { dirname } from "path";     // so that when we host the complete location of the files can be located
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
//

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))   // every request will now have body and we are now able to access it 
var qrl ="";

function qrrr(req, res, next){
  console.log(req.body);

  next();

}

app.use(qrrr);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  // console.log(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const qrl  = req.body["url"];
  var qr_png = qr.image(qrl);
  qr_png.pipe(fs.createWriteStream("output.png"));
  res.sendFile(__dirname + "/output.png");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
