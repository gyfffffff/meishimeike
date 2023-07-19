// 引入必须模块
var fs = require('fs')
var Request = require('request')  // 发送请求
var Cheerio = require('cheerio')  // 解析
require('date-utils')  // 日期解析
var schedule = require('node-schedule');  // 定时
var mysql = require('../mysql.js')  // 数据库


headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
    'Cookie': 'appmsglist_action_3923520972=card; pgv_pvid=1202540464; RK=ooKheJY7F8; ptcz=cbee24b986ac2bf6beeb8bf34ad6c1927b178d6d0565d3d463d2c07b6eb01b87; pac_uid=0_17c3aac37846d; ua_id=yzTOTqyGp2vJ9LuiAAAAALJo9NpUchOIk17owzDi9ng=; mm_lang=zh_CN; tvfe_boss_uuid=59dba1364b1a352d; iip=0; fqm_pvqid=e7525fdc-8c92-44c2-a0bf-ebc51d897e74; wxuin=89312466693194; uuid=d90d65c96374f832d00b5efb0c7a1210; rand_info=CAESIEIj/dImAk8bRTVpBoFsIgIXLCMJ0F/3maKLSj+uc5r1; slave_bizuin=3923520972; data_bizuin=3923520972; bizuin=3923520972; data_ticket=cfms9MNxZnzWIlHrNtTsEQgTG0iSte3IjYYcJRdZmxsPMWHkQN2G898Ku8zETBPR; slave_sid=WFZpcjRCUEF0cWtydEZ1NzBKeTJWYUJHWEJSckt5Mm1lcHJEMXpGOUZ4S0ZiMmQ1aVhsNms2MEkwU3BLSXBDZkZadEs4RTlFcEVIYUhMTmVnSDM1Sks3YjZnc0VtMkJPVGE0OVpBcjdYRzRwSnRmYXVwaEZ5Ylg5akV0MGZoVmg5RHNMTEFYYnZKMzdJeWRh; slave_user=gh_c44c2a1d1d0b; xid=3d8fdc6f793a84e30d6c5bfeb7846f73; _clck=3923520972|1|fde|0; _clsk=1k9tw3x|1689664885442|5|1|mp.weixin.qq.com/weheat-agent/payload/record'
}
var biz = 'MzU4MzYyMjYxNA=='


for (var begin = 65; begin <= 90; begin += 5) {
    var seedURL = 'https://mp.weixin.qq.com/cgi-bin/appmsg?action=list_ex&begin=' + begin +'&count=5&fakeid=MzU4MzYyMjYxNA==&type=9&query=&token=1635703831&lang=zh_CN&f=json&ajax=1'
    myRequest1(seedURL, "seed")
}

function myRequest1(url, str) {
    let fetch_url_sql = 'select _url from fetches where _url=?'
    let fetch_url_sql_param = [url]
    mysql.query(fetch_url_sql, fetch_url_sql_param, (qerr, vals, fields) => {
        if (vals.length > 0) {
            console.log("duplicate!")
            return
        }
    })
    var options = {
        url: url,
        headers: headers,
        // proxy: 'http://127.0.0.1:10809',
        timeout: 10000,  // 最多等待10秒,
        _biz: biz,
        // action: 'list_ex',
        // begin: 0,
        // count: 5,
        // fakeid: 'MzU4MzYyMjYxNA==',
        // type: 9,
        // query: "",
        // token: 1409400212,
        // lang: "zh_CN",
        // f: 'json',
        // ajax: 1
    }
    Request(options, (err, response, body) => {
        if (!err & response.statusCode == 200) {
            if (!body.includes("内容加载失败")) {
                if (str == "seed") parseSeed(body)
                else if (str == "artical") parseArtical(body, url, pics)
                // else if (str == "item") parseItem(body, url)
            } else {
                console.log("种子页面内容加载失败")
            }
        } else {
            console.log("request failed: " + err, url)
        }
    })
}

function myRequest2(url, str) {
    let fetch_url_sql = 'select _url from fetches where _url=?'
    let fetch_url_sql_param = [url]
    mysql.query(fetch_url_sql, fetch_url_sql_param, (qerr, vals, fields) => {
        if (vals.length > 0) {
            console.log("duplicate!")
            return
        }
    })
    var options = {
        url: url,
        headers: headers,
        // proxy: 'http://127.0.0.1:10809',
        timeout: 10000,  // 最多等待10秒,
        _biz: biz,
        // idx: url.match(/idx=(\d+)/)[1],
        // sn: url.match(/sn=([A-Za-z0-9]+)/)[1],
        // chksm: url.match(/chksm=([A-Za-z0-9]+)/)[1]
    }

    Request(options, (err, response, body) => {
        if (!err) {
            if (!body.includes("内容加载失败")) {
                if (str == "seed") parseSeed(body)
                else if (str == "artical") parseArtical(body, url, pics)
                // else if (str == "item") parseItem(body, url)
            } else {
                console.log("种子页面内容加载失败")
            }
        } else {
            console.log("request failed: " + err, url)
        }
    })
}

var pics = ''
function parseSeed(body) {
    // console.log(body)
    // let $ = Cheerio.load(body, { decodeEntities: true })
    // console.log(body)
    json = JSON.parse(body)
    var len = json['app_msg_list'].length
    for (var idx = 0; idx < len; idx++) {
        pics = json.app_msg_list[idx]["cover"]
        myRequest2(json.app_msg_list[idx]["link"], "artical", pics)

    }
}


function parseArtical(body, url) {
    let $ = Cheerio.load(body, { decodeEntities: true })
    var shop_name = $('#activity-name').text()
    url_shop = url;
    var emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\u200D/g;
    var _text = $('.rich_media_content span, .rich_media_content strong').text().replace(emojiRegex, '')
    if (_text === "") {
        return;
    }
    // if(!_text.includes("店")){
    //     return ;
    // }
    var _time = new Date(body.match(/var createTime = '(\d{4}-\d{2}-\d{2} \d{2}:\d{2})'/)[1]).toFormat("YYYY-MM-DD HH24:MI")
    var author_dizhi = body.match(/countryName:\s*'([^']+)'/)[1]
    var laiyuan = "公众号：ShanghaiBUYBUY"
    var fensi = 10000 // 根据阅读量估计
    var crawltime = new Date().toFormat("YYYY-MM-DD HH24:MI:SS")
    // $('img').each((index, elememt)=>{
    //     pics.push($(elememt).attr('src'))
    //     if(pics.length>32){
    //         return false
    //     }
    // })

    var fetchAddSql = "INSERT INTO fetches(_url,url_shop,shop_name,pics,_text,_time,fensi,author_dizhi,crawltime,laiyuan) VALUES(?,?,?,?,?,?,?,?,?,?)";
    fetchAddSql_Params = [url, url_shop, shop_name, pics, _text, _time, fensi, author_dizhi, crawltime, laiyuan]
    // console.log(fetchAddSql_Params)
    mysql.query(fetchAddSql, fetchAddSql_Params, (qerr, vals, fields) => {
        if (qerr) { console.log(qerr) }
    })
}

