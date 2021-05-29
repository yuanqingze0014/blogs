import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
// import rightimg from '../../assets/image/1.jpg'
// import logo from '../../assets/image/3.jpg'
import { useHistory } from "react-router-dom";
import useStore from '@/context/useStore';
import { loginApi, verifyCode } from '../../service/login'
import './Login.scss'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const tailLayouts = {
    wrapperCol: { offset: 6, span: 8 },
};

const Login: React.FC = () => {
    const [svg, setsvg] = useState('')
    const [svgid, setsvgid] = useState('')
    const history = useHistory();
    const { UserStore } = useStore();

    const onFinish = (values: any) => {
        loginApi({ ...values, verifyCodeId: svgid }).then(res => {
            if (res.data.code == 200) {
                history.push("/main");
                UserStore.setToken(res.data.data)
            }
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const onReset = () => {
        history.push("/registry");
    };
    useEffect(() => {
        getcode()
        //   return () => {
        //       cleanup
        //   }
    }, [])
    async function getcode() {
        const res: any = await verifyCode();
        if (res.data.code == 200) {
            setsvg(res.data.data.data)
            setsvgid(res.data.data.verifyCodeId)
            return
        }


    }
    return (
        <div className='loginbox'>
            <div className='leftbox'>
                <div className='lefttop'>
                    <div className='logodiv'>
                        <img src={'logo'} alt="" />
                    </div>
                    <div className='logintext'>
                        IT的Paradise
                    </div>
                </div>
                <div className='leftmain'>
                    <div className='enter'>
                        <div className='topdiv'>
                            <h3>登录<b>Paradise</b></h3>
                            <p>美好的一天从现在开始，欢迎您的来到</p>
                        </div>
                        <Form
                            {...layout}
                            // style={{width:'100%',background: 'red',height: '200px',marginTop:'10%'}}

                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="手机号"
                                name="user_phone"
                                rules={[{ required: true, message: '请输入手机号!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name="user_pwd"
                                rules={[{ required: true, message: '请输入密码!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                {...tailLayouts}
                                name="verifyCode"
                                rules={[{ required: true, message: '请输入验证码!' }]}
                            >
                                <div className='yzmbox'>
                                    <Input className='iptbox' />
                                    <div dangerouslySetInnerHTML={{ __html: svg }}>
                                    </div>
                                </div>

                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    登录
          </Button>
                                <a className='zcbtn' onClick={onReset}>
                                    注册
          </a>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
            <div className='rightbox'>
                <img src={''} alt="" />
            </div>
        </div>
    )
}
export default Login