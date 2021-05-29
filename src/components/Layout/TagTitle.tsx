import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { observer, useObserver } from "mobx-react";
import { FormattedMessage } from 'react-intl';
import { Breadcrumb } from 'antd';
import useStore from '@/context/useStore';
import { HomeOutlined } from '@ant-design/icons'


const TagTitle: React.FC = observer(() => {
    const { LanguageStore, MenuStore } = useStore();
    return (
        <Fragment>
            <Breadcrumb style={{ margin: '8px 24px' }}>
                {
                    MenuStore.tagTitleList.map((tag: any, index: number) => {
                        return <Breadcrumb.Item key={tag.path}>
                            {
                                tag.icon ? <Link to={tag.path} > <HomeOutlined /> </Link> : ''
                            }
                            {
                                !tag.icon && <Link to={tag.path} > {tag.icon ? tag.icon : ''} <FormattedMessage id={tag.name} defaultMessage={tag.name}></FormattedMessage></Link>
                            }
                        </Breadcrumb.Item>
                    })
                }
            </Breadcrumb>
        </Fragment>
    )
})

export default TagTitle
