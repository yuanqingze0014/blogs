import React, { Fragment } from 'react'
import { Menu, Dropdown, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import logo from '../../logo.svg';

const { Header } = Layout;


const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="https://www.aliyun.com">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

export default function HeaderCom() {
    return (
        <Fragment>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'grid', gridTemplateColumns: '10% 80% 10%', gridTemplateRows: '100%' }}>
                <div className="logo" >
                    <img src={logo} className="Header-logo" alt="logo" />
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">react 项目</Menu.Item>
                    <Menu.Item key="2">vue 项目</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Click me <DownOutlined />
                    </a>
                </Dropdown>
            </Header>
        </Fragment>
    )
}
