var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ambika@2004",
    database: "appon"
});

con.connect(function(err) {
    if (err) throw err;

    console.log("Connected!");

    con.query("DROP TABLE alia", function(err, result) {
        if (err) throw err;

        console.log("Table dropped");
        console.log(result);

        con.end();
    });
});