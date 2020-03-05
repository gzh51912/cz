//需求：连接mongo实现一个接口
// const mongodb = require('mongodb'); //{MongoClient : xxx}
// const MongoClient = mongodb.MongoClient;
const {
    MongoClient
} = require('mongodb');
let DBurl = 'mongodb://localhost:27017';
let DBname = '1996';
//连接mongodb数据库

// MongoClient.connect(DBurl, async (err, client) => {
//     //err 连接错误信息，client连接成功的客户端
//     if (err) throw err;
//     let db = client.db('h51912');//连接数据库，里面写的是数据库名字。有就是连接，没有就是创建新的数据库
//     //有则连接，无则创建集合
//     


//     //关闭数据库连接
//     // client.close();
// });

//连接数据库
function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(DBurl, (err, client) => {
            if (err) reject(err);
            let db = client.db(DBname);
            resolve({
                db,
                client
            })
        });
    })
}

//------------------------------------------------------
//数据的查询接口
async function find(query) {
    try {
        //1.连接数据库
        let {
            db,
            client
        } = await connect(); //调用connect方法可以得到一个promise对象,await是可以获取到resolve返回的结果
        //2.连接集合
        let col = db.collection('one');
        //3.对集合进行crud
        let data = await col.find(query).toArray(); //toArray() 只有查询时候才需要
        console.log(data);
        //4.关闭数据库
        client.close();
        //返回数据
        return data;
    } catch (err) { //有错误就捕捉错误，reject处理的异常这里可以捕获
        console.log(err);
    }

    // client.close(); 不能写在return后面
}

//测试查找数据接口
// find({name:"lubao"});

//------------------------------------------------------
//数据的删除接口
async function remove(query) {
    try {
        //1.连接数据库
        let {
            db,
            client
        } = await connect(); //调用connect方法可以得到一个promise对象,await是可以获取到resolve返回的结果
        //2.连接集合
        let col = db.collection('one');
        //3.对集合进行crud
        let data = await col.deleteMany(query);
        // console.log(data);
        let result = '';
        if (data.deletedCount) {
            console.log('删除成功');
            result = {
                type: 1,
                msg: '删除成功'
            }
        } else {
            console.log('删除失败');
            result = {
                type: 0,
                msg: '删除失败'
            }
        }
        //4.关闭数据库
        client.close();
        //返回数据
        return result;
    } catch (err) { //有错误就捕捉错误，reject处理的异常这里可以捕获
        console.log(err);
    }

    // client.close(); 不能写在return后面
}

//测试接口
// remove({ name: "lubao111"});

//------------------------------------------------------
// 增加数据
async function adds(query) {
    try {
        //1.连接数据库
        let {
            db,
            client
        } = await connect(); //调用connect方法可以得到一个promise对象,await是可以获取到resolve返回的结果
        //2.连接集合
        let col = db.collection('one');
        //3.对集合进行crud
        let data = await col.insertMany(query);
        // console.log(data);
        let result = '';
        if (data.insertedCount) {
            console.log('添加成功');
            result = {
                type: 1,
                msg: '添加成功'
            }
        } else {
            console.log('添加失败');
            result = {
                type: 0,
                msg: '添加失败'
            }
        }
        //4.关闭数据库
        client.close();
        //返回数据
        return result;
    } catch (err) { //有错误就捕捉错误，reject处理的异常这里可以捕获
        console.log(err);
    }
}

//测试接口
// adds([{
//     "name": "lubao1111122",
//     "password": "123456"
// }]);

//------------------------------------------------------
// 数据修改
async function alters(query,news) {
    try {
        //1.连接数据库
        let {
            db,
            client
        } = await connect(); //调用connect方法可以得到一个promise对象,await是可以获取到resolve返回的结果
        //2.连接集合
        let col = db.collection('one');
        //3.对集合进行crud
        let data = await col.updateMany(query,news);
        // console.log(data);
        let result = '';
        if (data.modifiedCount) {
            console.log('修改成功');
            result = {
                type: 1,
                msg: '修改成功'
            }
        } else {
            console.log('修改失败');
            result = {
                type: 0,
                msg: '修改失败'
            }
        }
        //4.关闭数据库
        client.close();
        //返回数据
        return result;
    } catch (err) { //有错误就捕捉错误，reject处理的异常这里可以捕获
        console.log(err);
    }
}

//测试接口
// alters({
//     "name": "罗妙",
// }, {
//     $set: {
//         "password": "666666"
//     }
// });


module.exports = {
    find,
    remove
}