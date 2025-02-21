const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const path = require("path");
const db = require("./db/dbConfig");
const port = 3002;
const routes = require("./routes/transactionRoute");


app.use(bodyparser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
}); 

