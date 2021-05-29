import { Button } from 'antd';
import React from 'react'

export default function index() {
    // const getTheme = (color: any) => {
    //     (window as any).less.modifyVars({
    //         '@primary-color': color,
    //         '@layout-header-padding': '0px'
    //     }).then(() => {
    //         console.log(color);
    //     }).catch((error: any) => {
    //         console.log(error);
    //     });
    // };

    return (
        <div>
            <Button onClick={() => { }}>点我</Button>
        </div>
    )
}
