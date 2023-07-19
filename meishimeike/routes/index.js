var fs = require('fs')
var $ = require('cheerio')
var mysql = require('../public/javascripts/mysql.js')
var echarts = require('echarts')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\views\index.html`)
});

router.get('/dashboard', function (req, res, next) {
  res.sendFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\views\dashboard.html`)
});

router.get('/search', function (req, res, next) {
  res.sendFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\views\search_result.html`)
});



var search_option = {
  0: ['url_shop', 'shop_name', 'score', 'leixing', 'renjun', 'dizhi', 'pics', '_text', '_time', 'fensi', 'author_dizhi', 'laiyuan'],
  1: ['shop_name', '_text', 'leixing'],
  2: ['dizhi', '_text'],
  3: ['shop_name']
}
var items = 'url_shop, shop_name, score, renjun, dizhi, leixing, pics, _text, _time, fensi,laiyuan'

router.get('/search00', function (req, res, next) {
  let idx = 0
  // res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' }); //设置res编码为utf-8
  var keyword = " '%" + req.query.keyword + "%' "

  //sql字符串和参数
  var fetchSql = `select ${items} from fetches where `
  let len = search_option[idx].length
  for (let t = 0; t < len - 1; t++) {
    fetchSql += (`${search_option[idx][t]} like ${keyword} or `)
  }
  fetchSql += (`${search_option[idx][len - 1]} like ${keyword};`)
  mysql.query(fetchSql, function (err, result, fields) {
    let result_len = result.length
    for (let ri = 0; ri < result_len; ri++) {
      let index = result[ri]['_text'].indexOf(req.query.keyword);
      let start = Math.max(0, index - 10);
      let end = Math.min(result[ri]['_text'].length, index + keyword.length + 10);
      result[ri]['matches'] = '...' + result[ri]['_text'].substring(start, end) + '...';
      // console.log(result[ri]['matches'])
    }
    // console.log(result)
    let sqlres = JSON.stringify(result);
    // 读取 search_result.html 文件内容
    fs.readFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\views\search_result.html`, 'utf8', function (err, data) {
      if (err) {
        console.error('Error reading search_result.html:', err);
        return res.status(500).send('Error reading file.');
      }

      // 将 sqlres 数据插入到 HTML 文件相应位置
      let modifiedData = data.replace("'<!-- REPLACE_THIS_WITH_SQLRES -->'", sqlres);

      // 将修改后的内容写入新的 HTML 文件
      fs.writeFile('modified_search_result.html', modifiedData, 'utf8', function (err) {
        if (err) {
          console.error('Error writing modified_search_result.html:', err);
          return res.status(500).send('Error writing file.');
        }

        // 发送新生成的 HTML 文件给客户端
        res.sendFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\modified_search_result.html`);
      });
    });
  });
})


router.get('/search01', function (req, res, next) {
  let idx = 1
  // res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });

  var keyword = " '%" + req.query.keyword + "%' ";
  var fetchSql = `select ${items} from fetches where ${search_option[idx][0]} like ${keyword} or ${search_option[idx][1]} like ${keyword} or ${search_option[idx][2]} like ${keyword};`

  mysql.query(fetchSql, function (err, result, fields) {
    let result_len = result.length
    for (let ri = 0; ri < result_len; ri++) {
      let index = result[ri]['_text'].indexOf(req.query.keyword);
      let start = Math.max(0, index - 10);
      let end = Math.min(result[ri]['_text'].length, index + keyword.length + 10);
      result[ri]['matches'] = '...' + result[ri]['_text'].substring(start, end) + '...';
      // console.log(result[ri]['matches'])
    }
    // console.log(result)
    let sqlres = JSON.stringify(result);
    // 读取 search_result.html 文件内容
    fs.readFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\views\search_result.html`, 'utf8', function (err, data) {
      if (err) {
        console.error('Error reading search_result.html:', err);
        return res.status(500).send('Error reading file.');
      }

      // 将 sqlres 数据插入到 HTML 文件相应位置
      let modifiedData = data.replace("'<!-- REPLACE_THIS_WITH_SQLRES -->'", sqlres);

      // 将修改后的内容写入新的 HTML 文件
      fs.writeFile('modified_search_result.html', modifiedData, 'utf8', function (err) {
        if (err) {
          console.error('Error writing modified_search_result.html:', err);
          return res.status(500).send('Error writing file.');
        }

        // 发送新生成的 HTML 文件给客户端
        res.sendFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\modified_search_result.html`);
      });
    });
  });
});

router.get('/search02', function (req, res, next) {
  let idx = 2
  // res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' }); //设置res编码为utf-8
  var keyword = " '%" + req.query.keyword + "%' "

  //sql字符串和参数
  var fetchSql = `select ${items} from fetches where `
  let len = search_option[idx].length
  for (let t = 0; t < len - 1; t++) {
    fetchSql += (`${search_option[idx][t]} like ${keyword} or `)
  }
  fetchSql += (`${search_option[idx][len - 1]} like ${keyword};`)
  console.log(fetchSql)
  mysql.query(fetchSql, function (err, result, fields) {
    let result_len = result.length
    for (let ri = 0; ri < result_len; ri++) {
      let index = result[ri]['_text'].indexOf(req.query.keyword);
      let start = Math.max(0, index - 10);
      let end = Math.min(result[ri]['_text'].length, index + keyword.length + 10);
      result[ri]['matches'] = '...' + result[ri]['_text'].substring(start, end) + '...';
      // console.log(result[ri]['matches'])
    }
    // console.log(result)
    let sqlres = JSON.stringify(result);
    // 读取 search_result.html 文件内容
    fs.readFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\views\search_result.html`, 'utf8', function (err, data) {
      if (err) {
        console.error('Error reading search_result.html:', err);
        return res.status(500).send('Error reading file.');
      }

      // 将 sqlres 数据插入到 HTML 文件相应位置
      let modifiedData = data.replace("'<!-- REPLACE_THIS_WITH_SQLRES -->'", sqlres);

      // 将修改后的内容写入新的 HTML 文件
      fs.writeFile('modified_search_result.html', modifiedData, 'utf8', function (err) {
        if (err) {
          console.error('Error writing modified_search_result.html:', err);
          return res.status(500).send('Error writing file.');
        }

        // 发送新生成的 HTML 文件给客户端
        res.sendFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\modified_search_result.html`);
      });
    });
  });
})


router.get('/search03', function (req, res, next) {
  let idx = 3
  // res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' }); //设置res编码为utf-8
  var keyword = " '%" + req.query.keyword + "%' "

  //sql字符串和参数
  var fetchSql = `select ${items} from fetches where `
  let len = search_option[idx].length
  for (let t = 0; t < len - 1; t++) {
    fetchSql += (`${search_option[idx][t]} like ${keyword} or `)
  }
  fetchSql += (`${search_option[idx][len - 1]} like ${keyword};`)
  console.log(fetchSql)
  mysql.query(fetchSql, function (err, result, fields) {
    let result_len = result.length
    for (let ri = 0; ri < result_len; ri++) {
      let index = result[ri]['_text'].indexOf(req.query.keyword);
      let start = Math.max(0, index - 10);
      let end = Math.min(result[ri]['_text'].length, index + keyword.length + 10);
      result[ri]['matches'] = '...' + result[ri]['_text'].substring(start, end) + '...';
      // console.log(result[ri]['matches'])
    }
    // console.log(result)
    let sqlres = JSON.stringify(result);
    // 读取 search_result.html 文件内容
    fs.readFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\views\search_result.html`, 'utf8', function (err, data) {
      if (err) {
        console.error('Error reading search_result.html:', err);
        return res.status(500).send('Error reading file.');
      }

      // 将 sqlres 数据插入到 HTML 文件相应位置
      let modifiedData = data.replace("'<!-- REPLACE_THIS_WITH_SQLRES -->'", sqlres);

      // 将修改后的内容写入新的 HTML 文件
      fs.writeFile('modified_search_result.html', modifiedData, 'utf8', function (err) {
        if (err) {
          console.error('Error writing modified_search_result.html:', err);
          return res.status(500).send('Error writing file.');
        }

        // 发送新生成的 HTML 文件给客户端
        res.sendFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\modified_search_result.html`);
      });
    });
  });
})

router.get('/searchwordcloud', function (req, res, next) {
  var keyword = " '%" + req.query.keyword + "%' "

  //sql字符串和参数
  var fetchSql = `select keywords from fetches where `
  let len = search_option[0].length
  for (let t = 0; t < len - 1; t++) {
    fetchSql += (`${search_option[0][t]} like ${keyword} or `)
  }
  fetchSql += (`${search_option[0][len - 1]} like ${keyword};`)
  mysql.query(fetchSql, function (err, result, fields) {
    var keywordCounts = {}; // 创建一个空对象用于存储关键词计数

    for (var i = 0; i < result.length; i++) {
      var keywords = result[i].keywords.split(','); // 假设关键词以逗号分隔存储在result的keywords字段中

      for (var j = 0; j < keywords.length; j++) {
        var kw = keywords[j].trim(); // 去除关键词首尾的空格
        if (isNaN(parseInt(kw))) {
          if (kw in keywordCounts) {
            keywordCounts[kw]++; // 关键词已存在，计数加一
          } else {
            keywordCounts[kw] = 1; // 关键词不存在，计数设为一
          }
        }
      }
    }

    // console.log(keywordCounts)
    let sqlres = JSON.stringify(keywordCounts);
    fs.readFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\public\javascripts\dashboard_searchwdversion.js`, 'utf8', function (err, data) {
      if (err) {
        console.error('Error reading search_result.html:', err);
        return res.status(500).send('Error reading file.');
      }

      // 将 sqlres 数据插入到 HTML 文件相应位置
      let modifiedData = data.replace("'<!-- REPLACE_THIS_WITH_SQLRES -->'", sqlres);
      // 将修改后的内容写入新的 HTML 文件
      fs.writeFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\public\javascripts\modified_dashboard_searchwdversion.js`, modifiedData, 'utf8', function (err) {
        if (err) {
          console.error('Error writing dashboard_searchwdversion.js:', err);
          return res.status(500).send('Error writing file.');
        }

        // 发送新生成的 HTML 文件给客户端
        res.sendFile(String.raw`E:\mydesk\Romio\ECNU period\课程\Web编程\project_code\meishimeike\dashboard_searchwdversion.html`);
      });
    });


    // console.log(keywordCounts);

  })
});



module.exports = router;
