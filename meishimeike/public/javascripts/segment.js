var fs = require('fs')
var mysql = require('./mysql.js')
var text = "";
fetchSql = 'SELECT _text, shop_name, dizhi from fetches'
mysql.query(fetchSql, function (err, result, fields) {
    // console.log(result);
    text = JSON.stringify(result)
});
// text = '没想到下楼取个快递也能顺便买个蛋糕，新开的蛋糕店，品种也在持续更新，这年头喜欢吃甜品的宝子们太多了'
fs.writeFileSync('../segtext.txt', text);