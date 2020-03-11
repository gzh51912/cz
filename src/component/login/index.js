import React, { Component } from 'react'
import "./login.scss"
import Title from "@/component/title/index.js"
import { Checkbox } from 'antd-mobile';
import { Toast } from 'antd-mobile';
import { checkPhone, login, reg } from "@/api/request.js"
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 国家加区号
            country: [{
                name: "中国大陆",
                code: 86
            },
            {
                name: "香港",
                code: 852
            },
            {
                name: "澳门",
                code: 853
            },
            {
                name: "台湾",
                code: 886
            },
            {
                name: "阿联酋",
                code: 971
            },
            {
                name: "阿根廷",
                code: 54
            },
            {
                name: "奥地利",
                code: 43
            },
            {
                name: "澳大利亚",
                code: 61
            },
            {
                name: "爱沙尼亚",
                code: 372
            },
            {
                name: "埃及",
                code: 20
            },
            {
                name: "爱尔兰",
                code: 353
            },
            {
                name: "比利时",
                code: 32
            },
            {
                name: "保加利亚",
                code: 359
            },
            {
                name: "巴西",
                code: 55
            },
            {
                name: "巴哈马",
                code: 1242
            },
            {
                name: "白俄罗斯",
                code: 375
            },
            {
                name: "伯利兹",
                code: 501
            },
            {
                name: "巴拿马",
                code: 507
            },
            {
                name: "波兰",
                code: 48
            },
            {
                name: "德国",
                code: 49
            },
            {
                name: "丹麦",
                code: 45
            },
            {
                name: "俄罗斯",
                code: 7
            },
            {
                name: "芬兰",
                code: 358
            },
            {
                name: "法国",
                code: 33
            },
            {
                name: "菲律宾",
                code: 63
            },
            {
                name: "哥伦比亚",
                code: 57
            },
            {
                name: "韩国",
                code: 82
            },
            {
                name: "荷兰",
                code: 31
            },
            {
                name: "加拿大",
                code: 1
            },
            {
                name: "吉尔吉斯斯坦",
                code: 996
            },
            {
                name: "柬埔寨",
                code: 855
            },
            {
                name: "卡塔尔",
                code: 974
            },
            {
                name: "立陶宛",
                code: 370
            },
            {
                name: "卢森堡",
                code: 352
            },
            {
                name: "罗马尼亚",
                code: 40
            },
            {
                name: "摩洛哥",
                code: 212
            },
            {
                name: "蒙古",
                code: 976
            },
            {
                name: "马尔代夫",
                code: 960
            },
            {
                name: "墨西哥",
                code: 52
            },
            {
                name: "马来西亚",
                code: 60
            },
            {
                name: "秘鲁",
                code: 51
            },
            {
                name: "美国",
                code: 1
            },
            {
                name: "尼日利亚",
                code: 234
            },
            {
                name: "挪威",
                code: 47
            },
            {
                name: "南非",
                code: 27
            },
            {
                name: "葡萄牙",
                code: 351
            },
            {
                name: "瑞士",
                code: 41
            },
            {
                name: "日本",
                code: 81
            },
            {
                name: "瑞典",
                code: 46
            },
            {
                name: "斯里兰卡",
                code: 94
            },
            {
                name: "塞尔维亚",
                code: 381
            },
            {
                name: "沙特阿拉伯",
                code: 966
            },
            {
                name: "塞舌尔",
                code: 248
            },
            {
                name: "泰国",
                code: 66
            },
            {
                name: "突尼斯",
                code: 216
            },
            {
                name: "土耳其",
                code: 90
            },
            {
                name: "乌克兰",
                code: 380
            },
            {
                name: "委内瑞拉",
                code: 58
            },
            {
                name: "西班牙",
                code: 34
            },
            {
                name: "希腊",
                code: 30
            },
            {
                name: "匈牙利",
                code: 36
            },
            {
                name: "新西兰",
                code: 64
            },
            {
                name: "新加坡",
                code: 65
            },
            {
                name: "英国",
                code: 44
            },
            {
                name: "印度尼西亚",
                code: 62
            },
            {
                name: "以色列",
                code: 972
            },
            {
                name: "印度",
                code: 91
            },
            {
                name: "意大利",
                code: 39
            },
            {
                name: "约旦",
                code: 962
            },
            {
                name: "英属维尔京群岛",
                code: 1284
            },
            {
                name: "越南",
                code: 84
            },
            {
                name: "智利",
                code: 56
            }
            ],
            visible: true,//默认是短信验证码登录
            visible2: false,//国家例表一开始是隐藏,
            countries: "中国大陆",
            code: 86,
            phone: false,//判断手机号码正则是否通过
            password: false,//判断密码正则是否通过
            xz: "",
            code1: []


        }


    }
    componentDidMount() {
        this.GetVerifiCode();

    }

    GetVerifiCode = () => {
        this.setState({
            code1: this.genRandomString(4)
        });
    }
    genRandomString = len => {
        const text = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const rdmIndex = text => Math.random() * text.length | 0;
        let rdmString = '';
        for (; rdmString.length < len; rdmString += text.charAt(rdmIndex(text)));
        console.log(rdmString);
        return rdmString;
    }


    qh = () => {//切换短信密码验证和手机号验证。
        this.setState({
            visible: !this.state.visible,
        })
    }
    gjqh = () => {//国家显示或隐藏
        this.setState({
            visible2: !this.state.visible2
        })
    }
    gjqhfh(item) {//例表隐藏 更新国家或区域号
        this.setState({
            visible2: !this.state.visible2,
            countries: item.name,
            code: item.code
        })
    }
    phone = (e) => {
        let reg = /^1[3-9]\d{9}$/;
        if (!reg.test(e.target.value)) {
            Toast.info('请输入正确的手机号码', 2);
        } else {
            this.setState({
                phone: true
            })
        }
    }
    password = (e) => {
        let reg = /^\w{6,20}$/;
        if (!reg.test(e.target.value)) {
            Toast.info('请输入6位数以上任意数字字母下划线组合的字符', 1);
        } else {
            this.setState({
                password: true
            })
        }
    }
    //点击登录
    login = () => {
        let { code, visible, phone, password } = this.state;
        let uid = "";
        let users = "";
        // console.log(this.refs.yzm.value)
        //短信验证应先查询该号码
        if (visible === true && phone === true && this.refs.yzm.value === this.state.code1) {
            // login()
            let loginPhone = code + this.refs.phone.value
            checkPhone(loginPhone).then((res) => {
                if (res.msg === "不能注册") {
                    uid = res.data[0].uid;
                    users = res.data[0].phone;
                    sessionStorage.setItem("phone", users);
                    sessionStorage.setItem("uid", uid);
                } else {//可以注册 
                    reg(loginPhone, "123456").then((res) => {
                        // console.log(res);//显示注册成功与否
                        if (res.msg === "注册成功") {
                            checkPhone(loginPhone).then((res) => {
                                users = res.data[0].phone;
                                uid = res.data[0].uid;
                                sessionStorage.setItem("phone", users);
                                sessionStorage.setItem("uid", uid);
                            })
                        } else {
                            console.log("注册失败")
                        }
                    })
                }

                setTimeout(() => {
                    if (this.props.location.state != undefined) {
                        this.props.history.push(this.props.location.state.pathname)
                    } else if (sessionStorage.getItem("path")) {
                        this.props.history.push(sessionStorage.getItem("path"))
                    }
                    else {
                        this.props.history.push("/")
                    }
                }, 300);




            })

        }
        //手机密码登录
        else if (visible === false && phone === true && password === true) {
            let loginPhone = code + this.refs.phone.value;//手机号
            let passwordA = this.refs.password.value;//密码
            let { xz } = this.state;//keep是否自动登录
            login(loginPhone, passwordA, xz).then((res) => {
                if (res.msg === "登录失败") {
                    Toast.info('您输入的信息有误,请输入正确的登录信息', 2);
                } else {
                    let uid = res.data[0].uid;
                    let users = res.data[0].phone;
                    if (res.token) {
                        sessionStorage.setItem("token", res.token);
                    }
                    sessionStorage.setItem("uid", uid);
                    sessionStorage.setItem("phone", users);
                    setTimeout(() => {
                        if (sessionStorage.getItem("path")) {
                            this.props.history.push(sessionStorage.getItem("path"))
                        }
                        else if (this.props.history.goBack()) {
                            // this.props.history.push(this.props.location.pathname)
                            this.props.history.goBack();
                        }
                        else {
                            console.log(this.props.history.goBack())
                            this.props.history.push("/")
                        }
                    }, 300);
                }

            })
        } else {
            Toast.info('请完善正确的信息', 1);
        }
    }
    check = (e) => {
        this.setState({
            xz: e.target.checked + ""
        })
    }
    render() {


        // console.log(this.props)
        let { countries, country, code, visible, visible2 } = this.state;
        return (
            <>
                {/* 标题 */}
                <Title title={visible ? "短信验证码登录" : "账号密码登录"} />
                <div className="content" style={{ marginTop: "80px", padding: "0 15px" }}>
                    {/* 3个选项框 */}
                    <div className="common-form">
                        <li className="country-region">
                            <div className="input">
                                {/* <span class="icon"><i>国家和地区</i></span> */}
                                <span className="cr">国家和地区</span>
                                <span className="country ng-binding" onClick={this.gjqh}  >{countries}</span>
                            </div>
                        </li>
                        <li className="username">
                            <div className="input">
                                <span className="ccc ng-binding" >{code}</span>
                                <label htmlFor="mobile" className="placeholder indent"></label>
                                <input className="indent" type="text" name="mobile" placeholder="手机号" onBlur={this.phone} ref="phone" />
                            </div>
                        </li>
                        {/* 手机验证码显示以下状态 */}
                        <li className="verification" style={{ display: visible ? "block" : "none" }}>
                            <div className="input invalid">
                                <label htmlFor="verification" className="placeholder"></label>
                                <input type="text" name="verification" className="ng-pristine" placeholder="请输入右方的验证码" ref="yzm" />
                            </div>
                            <div className="btn btn-default disabled" ><a role="button" onClick={this.GetVerifiCode}>{this.state.code1}</a></div>
                        </li>
                        {/* 账号密码登录 */}
                        <li className="password" style={{ display: visible ? "none" : "block" }}>
                            <div className="input">
                                <label htmlFor="password" className="placeholder"></label>
                                <input type="password" className="password" placeholder="密码" ref="password" onBlur={this.password} />

                            </div>
                        </li>
                    </div>
                    {/* 国家例表 */}
                    <div className="country-list" style={{ display: visible2 ? "block" : "none" }} >
                        <span className="delta-country"></span>
                        <ul>
                            {
                                country.map((item, index) => {
                                    return <li className="ng-binding ng-scope" key={index} onClick={this.gjqhfh.bind(this, item)}>{item.name}</li>
                                })
                            }
                        </ul></div>
                    {/* 登录按钮 */}
                    <div className="btn-wrapper">
                        <div className="btn btn-primary disabled" onClick={this.login}>
                            <a role="button">登录</a></div></div>
                    {/* 验证码登录的时候显示 */}
                    <p style={{ display: visible ? "block" : "none" }}><span className="registercloud">未注册的手机号验证后将自动注册 </span>
                        <span className="gl" onClick={this.qh}>账号密码登录</span></p>
                    <p>初始密码 123456</p>
                    {/* 账号密码登录时显示 */}
                    <p style={{ display: visible ? "none" : "block" }}>
                        <Checkbox onChange={this.check}>
                            <span className="checkbox-on m-blue-checkbox-new" >
                            </span></Checkbox>
                        <span className="registercloud">自动登录</span>
                        <span className="registercloud" onClick={this.qh}>短信验证码登录</span>
                        <span className="registercloud">忘记密码</span></p>
                </div>
                <div className="lbottom">
                    <p>
                        <span className="iconfont iconxinlangweibo"></span>
                        <span className="iconfont iconqq"></span>
                    </p>
                    <p>登录代表你已同意 <span className="gl">用户协议</span>和<span className="gl">隐私政策</span></p>
                </div>
            </>
        )
    }
}
export default withRouter(Login)