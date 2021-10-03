const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {createPool} = require('mysql');
const flash = require('express-flash');
app.use(bodyParser.urlencoded({extended: true}));

app.use(flash());



// //MYSQL
const db = require('database');

const pool = createPool({
    host: "127.0.0.1",
    user: "root",
    password: "BCCG",
    database: "accountsdb"
 })
 

app.get('/', function (req, res){
    res.sendFile(__dirname + "/login.html");
})

app.post('/form', function (req, res){
    var email = req.body.email.toLowerCase();
    var password = req.body.password.toLowerCase();
    
    var f = `Select SHA2("TITE",256)`
    
    // var sql = `INSERT INTO cocksizes (cockName, cockSize) VALUES ("${Email}", "${password}")`;
  pool.query(`select Email , Password from users where Email = \"${email}\" AND Password = \"${password}\"` , (err, result) => {
    if (err){
      return console.log(err)
    }
      return console.log(result)
    // console.log('Successfully logged in!');
    // res.redirect('/try.html');
  });
});




app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});



 
//  pool.query('select * from users', (err,result) =>{
//     if(err){
//         return console.log(err);
//     }
//         return console.log(result);
// })

