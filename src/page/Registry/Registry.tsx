import './Registry.scss'
import React, { useEffect, useState } from 'react'
// import rightimg from '../../assets/image/zc.jpg'
// import logo from '../../assets/image/3.jpg'
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { regeditApi, verifyCode } from '@/service/login.ts'

const Registry = () => {
    const [form] = Form.useForm();
    const [svg, setsvg] = useState('');
    const [svgid, setsvgid] = useState('')
    let history = useHistory();
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
    const onFinish = (values: any) => {
        regeditApi({ ...values, verifyCodeId: svgid }).then((res) => {
            if (res.data.code == 200 || res.data.code == 0) {
                onReset()
            }
            console.log('====================================');
            console.log(res);
            console.log('====================================');
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const onReset = () => {
        history.push("/login");
        resetFields()
    };
    const resetFields = () => {
        form.resetFields();
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
            console.log('====================================');
            console.log(res.data.data.data);
            setsvgid(res.data.data.verifyCodeId)
            console.log('====================================');
            return
        }


    }
    console.log('====================================');
    console.log();
    console.log('====================================');
    return (
        <div className='loginbox'>
            <div className='rightbox'>
                <img src={'rightimg'} alt="" />
            </div>
            <div className='leftbox'>
                {/* <div className='lefttop'>
                    <div className='logodiv'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='logintext'>
                        IT的Paradise
                    </div>
                </div> */}
                <div className='leftmain'>
                    <div className='enter'>
                        <div className='topdiv'>
                            <h3>注册<b>Paradise</b></h3>
                            <p>“比寻找温暖更重要的是，让自己成为一盏灯火”</p>
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
                                label="邮箱"
                                name="user_email"
                                rules={[{ required: true, message: '请输入邮箱!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="个人信息"
                                name="user_information"
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
                                    注册
          </Button>
                                {/* <a className='zcbtn' onClick={onReset}>
                                    注册
          </a> */}
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Registry