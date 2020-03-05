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


// ------------------------------------------------------------------
//查询是否已经把该商品加入购物车
Router.get('/isid', async (req, res) => {
	//接收前端数据
	let {
		ids,
		phones1
	} = req.query; //解构

	if (ids) {
		let sql = `SELECT * FROM sxsxcart WHERE (userid="${ids}") and (phones="${phones1}")`;
		// let sql = `SELECT * FROM sxsxcart WHERE userid="${ids}"`;
		let data = await query(sql);
		// console.log(data.length)
		let result = {};
		if (data.length) {
			//有
			result = {
				type: 1,
				msg: '该商品已存在'
			}
		} else {
			//没有
			result = {
				type: 0,
				msg: '该商品不存在'
			}
		}
		res.send(result);
	} else {
		res.send('没有接收到id');
	};
});


// ------------------------------------------------------------------
// 加入购物车
Router.post('/addshop', urlencodedParser, express.json(), async (req, res) => {
	// console.log(req.body)
	let {
		userid,
		productName,
		specification,
		prices,
		repertorys,
		addcartNum,
		picture,
		phones1
	} = req.body; //解构
	// console.log(req.body)
	let sql =
		`INSERT INTO sxsxcart (userid,productName,specification,prices,repertorys,addcartNum,picture,phones) VALUES ("${userid}","${productName}","${specification}","${prices}","${repertorys}","${addcartNum}","${picture}","${phones1}")`;
	let data = await query(sql);
	console.log(data)
	let result = {};
	if (data.affectedRows) {
		// console.log(1)
		//插入成功
		result = {
			type: 1,
			msg: '添加成功'
		}
	} else {
		// console.log(0)
		//插入失败
		result = {
			type: 0,
			msg: '添加失败'
		}
	}
	res.send(result);
});

// ------------------------------------------------------------------
// 通过id删除购物车内容

Router.delete('/del/:delId', async (req, res) => {
	let {
		delId
	} = req.params; //解构

	let sql = `DELETE FROM sxsxcart WHERE userid='${delId}'`;
	let data = await query(sql);
	let result = {};
	if (data.affectedRows) {
		//插入成功
		result = {
			type: 1,
			msg: '删除成功'
		}
	} else {
		//插入失败
		result = {
			type: 0,
			msg: '删除失败'
		}
	}
	res.send(result);

});

// ------------------------------------------------------------------
// 同一个商品的话就添加数量
Router.put('/upids', urlencodedParser, express.json(), async (req, res) => {

	// console.log(req.body.userid*1)
	let a = req.body.userid * 1
	let b = req.body.token * 1
	
	// let sql = `UPDATE sxsxcart SET addcartNum=addcartNum+1 WHERE userid="${a}"`;
	let sql = `UPDATE sxsxcart SET addcartNum=addcartNum+1 WHERE (userid="${a}") and (phones="${b}")`;
	let data = await query(sql);
	// console.log(data)
	let result = {};
	if (data.affectedRows) {
		//修改成功
		result = {
			type: 1,
			msg: '修改成功'
		}
	} else {
		//修改失败
		result = {
			type: 0,
			msg: '修改失败'
		}
	}
	res.send(result);

});

// ------------------------------------------------------------------
// vuex通过token获取购物车内容
Router.get('/isphones', async (req, res) => {
	//接收前端数据
	let {
		phones1
	} = req.query; //解构
// console.log(phones1)
		let sql = `SELECT * FROM sxsxcart WHERE phones="${phones1}"`;
		let data = await query(sql);
		// console.log(data)
		
		res.send(data);
	
});



module.exports = Router;