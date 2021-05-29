import "./Header.scss";
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { observer, useObserver } from "mobx-react";
import { FormattedMessage } from 'react-intl';
import { Menu } from 'antd';
import useStore from '@/context/useStore';
import menus from '@/router/menu.ts'

const { SubMenu } = Menu;

const ContentComponent: React.FC = observer((props) => {
    const [theme, setTheme] = useState('light');
    const [defaultKey, setOpenKey] = useState<string>('0');
    const [selectKey, setSelectKey] = useState<string>(`${window.location.hash.slice(1)}`)
    const [collapsed, setCollapsed] = useState(false)
    const { MenuStore } = useStore();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };

    const changeOpenKey = (menu: any[]) => {
        let index: string = "0";
        menu.forEach((item, i) => {
            item.children.forEach((value: any) => {
                if (value.path === window.location.hash.slice(1) + "") {
                    index = i + "";
                }
            })
        })
        return index;
    }

    useEffect(() => {
        setOpenKey(changeOpenKey(menus))
    }, [changeOpenKey(menus)])

    // Tood: 在tag标签切换时 页面不能监听到视图更新 menu高亮不切换
    // useEffect(() => { 
    //     setSelectKey(`${window.location.hash.slice(1)}`)
    //     console.log('0000')
    //     return () => { }
    // }, [window.location.href])

    const OpenClickMenu = (obj: any) => {
        setOpenKey(obj.keyPath[1])
        setSelectKey(`${window.location.hash.slice(1)}`)
    }

    const OpenChangeMenu = (openKeys: any) => {
        setOpenKey(openKeys[1] ? openKeys[1] : '0')
    }

    function getMenu() {
        return menus && menus.map((item: any, index: number) => {
            return <SubMenu key={index} title={<FormattedMessage id={item.meta.name} defaultMessage={item.meta.name}></FormattedMessage>} icon={<item.meta.icon />}   >
                {
                    item.children && item.children.map((child: any) => {
                        if ((child.meta as any).show) {
                            return <Menu.Item key={child.path} onClick={() => { MenuStore.setTagTitle({ path: child.path, name: child.meta.name }) }}>
                                <Link to={child.path} ><FormattedMessage id={child.meta.name} defaultMessage={child.meta.name}></FormattedMessage></Link>
                            </Menu.Item>
                        }
                    })
                }
            </SubMenu>
        })
    }
    return useObserver(() => (
        <Fragment>
            {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button> */}
            <Menu
                selectedKeys={[selectKey]}
                openKeys={[defaultKey]}
                onClick={({ item, key, keyPath, domEvent }) => { OpenClickMenu({ item, key, keyPath, domEvent }) }}
                onOpenChange={(openKeys: any) => { OpenChangeMenu(openKeys) }}
                defaultOpenKeys={[`${window.location.hash.slice(1)}`]}
                mode={MenuStore.mode === 'vertical' ? 'inline' : MenuStore.mode}
                theme="dark"
            // inlineCollapsed={collapsed}
            >
                {
                    getMenu()
                }
            </Menu>
        </Fragment >
    ))
})
export default ContentComponent