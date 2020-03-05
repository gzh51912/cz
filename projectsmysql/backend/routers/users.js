//子路由
const express = require('express');
const query = require('../db/mysql'); //自定义一个模块
// console.log(query);
const Router = express.Router(); //路由设置  Router==app
//提取body请求体数据用到的中间件，需要配置参数才能使用
const bodyParser = require('body-parser'); //第三方中间件：在express里面使用
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

const {
    create,
    verify
} = require("./token.js")

//获取页数以及要显示的条数渲染(查询所有的用户信息)
Router.get("/all", async (req, res) => {
    let { page, num } = req.query;
    page = page || 1;//设置默认参数
    num = num || 3;
    let index = (page - 1) * num;
    let sql1 = `SELECT * FROM user LIMIT ${index},${num}`;
    let data1 = await query(sql1);
    let sql2 = `SELECT * FROM user`;
    let data2 = await query(sql2);
    let result = {};

    //获取页码
    if (data1.length) {
        // 长度不为0
        let pages = Math.ceil(data2.length / num);
        result = {
            type: 1,
            msg: "success",
            page,
            num,
            pages,
            datalist: data1
        }
    }
    else {
        //失败返回数据
        result = {
            type: 0,
            msg: "fail",
            datalist: []
        }
    }
    res.send(result);

});

//验证用户名是否存在
Router.get('/checkname', async (req, res) => {
    //接受前端数据
    let { phone } = req.query;
    // console.log(username);
    if (phone) {
        let sql = `SELECT * FROM user WHERE phone="${phone}"`;
        let data = await query(sql);
        let resultA = {};

        if (data.length) {
            resultA = {
                type: 0,
                msg: "不能注册",
                data
            }
        } else {
            resultA = {
                type: 1,
                msg: "可以注册",
                data
            };
        };
        res.send(resultA);
    }
    res.send("数据不能为空");
});

//登录
Router.get('/login', async (req, res) => {
    //接受前端数据
    // let { phone, password, keep } = req.query;
    let { phone, password } = req.query;
    // console.log(username);
    if (phone, password) {
        let sql = `SELECT * FROM user WHERE phone = '${phone}' and password='${password}'`;
        let data = await query(sql);
        // console.log(data);
        let result = {};
        if (data.length) {
            let token = '';
            // if (keep == 'true') {
            //     //7天免登录，后端生成token发送给前端
            //     // token = create(password);此处是把前端传来的密码进行了加密处理 但是每次生成的token都是不一样的
            // }
            result = {
                type: 1,
                msg: "登录成功",
                token
            }
        } else {
            result = {
                type: 0,
                msg: "登录失败",
                token: ''
            }
        };
        res.send(result);
    }
    res.send("数据不能为空");
});

//注册功能
Router.post("/reg", express.json(), urlencodedParser, async (req, res) => {
    let { phone, password } = req.body;
    // console.log(phone, password);
    if (phone && password) {
        let sql = `INSERT INTO user(phone,password) VALUES('${phone}','${password}')`;
        let data = await query(sql);
        let result = {};
        if (data.affectedRows) {
            result = {
                type: 1,
                msg: "注册成功"
            }
        } else {
            result = {
                type: 0,
                msg: "注册失败"
            }

        } res.send(result);
    }
    res.send("请填写全部数据");
});

//删除单个用户
//http://localhost:2020/users/del/2
Router.delete("/del/:uid", async (req, res) => {
    let { uid } = req.params;
    if (uid) {
        let sql = `DELETE FROM user where uid=${uid}`;
        let data = await query(sql);
        let result = {};
        if (data.affectedRows) {
            result = {
                type: 1,
                msg: "删除成功"
            }
        } else {
            result = {
                type: 0,
                msg: "删除失败"
            }
        }
        res.send(result);
    }
    res.send("请填写全部数据");

});

//修改用户信息
Router.put("/update/:uid", express.urlencoded(), async (req, res) => {
    let { uid } = req.params;
    let obj = req.body;//拿到的obj是一个对象 {name : '杰克',psw:'666'}
    let msg = '';
    //UPDATE  user SET username="aaaaaa",password="123455" WHERE id=1
    for (let key in obj) {
        msg += key + "=" + `'${obj[key]}'` + ",";
    };
    // console.log(msg);//name='aaaaaa',password='123456',
    msg = msg.slice(0, -1);
    // console.log(msg);
    //name='aaaaaa',password='123456'
    let sql = `UPDATE user SET ${msg} WHERE uid=${uid}`;
    //动态路由的id应该是由前端传过来的
    let data = await query(sql);
    let result = {};
    if (data.affectedRows) {
        result = {
            type: 1,
            msg: "修改成功"
        }
    }
    else {
        result = {
            type: 0,
            msg: "修改失败"
        }
    }
    res.send(result);
});
//校验：token 1\是否被串改 2、是否存在有效期
Router.get("/verify", (req, res) => {
    let { token } = req.query;
    let result = verify(token);
    let data = {};
    if (result) {
        data = {
            type: 1,
            msg: "校验通过"
        }
    } else {
        data = {
            type: 0,
            msg: "校验失败"
        }
    }
    res.send(data);
})

module.exports = Router;