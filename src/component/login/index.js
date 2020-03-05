import React, { Component } from 'react'
import "./login.scss"
import Title from "@/component/title/index.js"
import { Checkbox } from 'antd-mobile';
export default class Login extends Component {
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

        }
    }
    qh = () => {
        this.setState({
            visible: !this.state.visible,

        })
    }
    render() {

        return (
            <>
                {/* 标题 */}
                <Title title={this.state.visible ? "短信验证码登录" : "账号密码登录"} />
                <div className="content" style={{ marginTop: "80px" }}>
                    {/* 3个选项框 */}
                    <div className="common-form">
                        <li className="country-region">
                            <div className="input">
                                {/* <span class="icon"><i>国家和地区</i></span> */}
                                <span className="cr">国家和地区</span>
                                <span role="button" className="country ng-binding" ng-bind="country">阿尔巴尼亚</span>
                            </div>
                        </li>
                        <li className="username">
                            <div className="input">
                                <span className="ccc ng-binding" >355</span>
                                <label htmlFor="mobile" className="placeholder indent">手机号</label>
                                <input className="indent" type="text" name="mobile" />
                            </div>
                        </li>
                        {/* 手机验证码显示以下状态 */}
                        <li className="verification" style={{ display: this.state.visible ? "block" : "none" }}>
                            <div className="input invalid">
                                <label htmlFor="verification" className="placeholder">短信验证码</label>
                                <input type="text" name="verification" className="ng-pristine" />
                            </div>
                            <div className="btn btn-default disabled" ><a role="button" >获取验证码</a></div>
                        </li>
                        {/* 账号密码登录 */}
                        <li className="password" style={{ display: this.state.visible ? "none" : "block" }}>
                            <div className="input">
                                <label htmlFor="password" className="placeholder">密码</label>
                                <input type="password" className="password" />

                            </div>
                        </li>
                    </div>
                    {/* 国家例表 */}
                    <div className="country-list" >
                        <span className="delta-country"></span>
                        <ul>
                            {
                                this.state.country.map((item) => {
                                    return <li className="ng-binding ng-scope">{item.name}</li>
                                })
                            }
                        </ul></div>
                    {/* 登录按钮 */}
                    <div className="btn-wrapper">
                        <div className="btn btn-primary disabled">
                            <a role="button">登录</a></div></div>
                    {/* 验证码登录的时候显示 */}
                    <p style={{ display: this.state.visible ? "block" : "none" }}><span className="registercloud">未注册的手机号验证后将自动注册</span>
                        <span className="gl" onClick={this.qh}>账号密码登录</span></p>
                    {/* 账号密码登录时显示 */}
                    <p style={{ display: this.state.visible ? "none" : "block" }}>
                        <Checkbox>
                            <span className="checkbox-on m-blue-checkbox-new">
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
