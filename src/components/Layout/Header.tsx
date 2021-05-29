import "./Header.scss";
import React, { useState } from 'react'
import { observer } from "mobx-react";

import { Switch } from 'antd';
import useStore from '@/context/useStore';
import Language from '@/components/Language/Index.tsx'
import logo from '@/favicon.svg';

const HeaderComponent: React.FC = observer((props) => {
    const [collapsed, setCollapsed] = useState(false)
    const { MenuStore } = useStore()

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };

    const changeMode = (value: boolean) => {
        MenuStore.changeShowLayout(value ? 'vertical' : 'horizontal')
    };

    return (
        <header className="Header">
            <div className="Menu-logo">
                <div className="logo" >
                    <img src={logo} className="Header-logo" alt="logo" />
                </div>
                {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button> */}
            </div>
            <div className="language">
                <Switch checkedChildren={"开启"} unCheckedChildren="关闭" defaultChecked={MenuStore.mode === "vertical"} onChange={changeMode} />
                <Language />
            </div>
        </header>
    )
})
export default HeaderComponent