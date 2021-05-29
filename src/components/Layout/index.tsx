import "./Index.scss";
import React, { Fragment, useState } from 'react';
import { observer, useObserver } from "mobx-react";
import { Layout } from 'antd';
import { FormattedMessage } from 'react-intl';
import Header from './Header'
import Content from './Content'
import TagTitle from './TagTitle'
import RouterView from '@/router/routerView';
import useStore from '@/context/useStore';
import { IRouerItem } from '@/@type/router.ts'

const { Footer } = Layout;

type Iprops = {
    // changeMode: (value: string) => void
    routes: IRouerItem[]
}

const Index: React.FC = observer((props: Iprops) => {
    const { LanguageStore, MenuStore } = useStore();
    return (
        <Fragment>
            <Layout style={{ height: '100%' }}>
                < Header />
                <div className={MenuStore.mode + 'Container'} >
                    <div className={MenuStore.mode + 'Header'} >
                        <Content />
                    </div>
                    {/* <Content className="site-layout" style={{ padding: '0 20px' }}> */}
                    <div className={MenuStore.mode + 'Wrapper'}>
                        <TagTitle />
                        <div className="site-layout-background" >
                            <RouterView routes={props.routes} />
                        </div>
                    </div>
                </div>
                <Footer style={{ textAlign: 'center' }}>{<FormattedMessage id={'footer.title'} ></FormattedMessage>}</Footer>
            </Layout>
        </Fragment>
    )
})
export default Index