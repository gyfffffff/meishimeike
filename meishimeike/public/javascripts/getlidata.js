// var mysql = require("mysql");
var countsql = 'SELECT COUNT(*) AS row_count FROM fetches;'
console.log("!!")
mysql.query(countsql, [], (qerr, vals, fields) => {
    if (qerr) {
        console.log('Error:', qerr);
        return;
    }
    console.log(vals)
    $(function () {
        $('.no-bd .li1').text(vals[0].row_count);
    });
})