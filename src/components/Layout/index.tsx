import React, { Fragment } from 'react'
import { Layout, Breadcrumb } from 'antd';
import Header from './Header'

const { Content, Footer } = Layout;
export default function index() {
    return (
        <Fragment>
            <Layout style={{ height: '100%' }}>
                < Header />
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {/* <Breadcrumb.Item>/</Breadcrumb.Item> */}
                        {/* <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24 }}>
                        <div id="subapp-viewport"></div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Ant UED</Footer>
            </Layout>
        </Fragment>
    )
}
