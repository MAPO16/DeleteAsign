const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "mobasign"
});

connection.connect();


app.delete('/rest/asignacion', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `Asig_Mobi` WHERE `Id_Asignacion`=?', [req.body.Id_Asignacion], function (error, results, fields) {
    if (error) throw error;
    res.end('Record has been deleted!');
  });
});

app.listen(9843, function () {
 console.log('Node app is running on port 9843');

});