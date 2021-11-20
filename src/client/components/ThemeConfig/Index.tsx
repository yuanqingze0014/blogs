import React, { useEffect, useState } from 'react'
import { SettingOutlined, CloseOutlined } from '@ant-design/icons'
import { Drawer, Switch } from 'antd'
import DynamicAntdTheme from 'dynamic-antd-theme'

import './Index.css'

export const ThemeConfig = () => {
  const [visible, setVisible] = useState(false)
  const [theme, setTheme] = useState('')

  useEffect(() => {
    setTheme(localStorage.getItem('custom-antd-primary-color') as string)
  }, [])

  const onClose = () => {
    setVisible(false)
  }

  const handleSetting = () => {
    setVisible(true)
  }

  const handleChange = (e: boolean) => {}

  return (
    <div className="theme-config-container">
      <SettingOutlined onClick={() => handleSetting()} />
      <Drawer title="主题设置" placement="right" onClose={onClose} visible={visible} width={375} bodyStyle={{ position: 'relative' }}>
        <h3>整体风格设置</h3>
        <div className="ant-pro-setting-drawer-box ant-pro-setting-drawer-block-checkbox">
          <Switch
            checkedChildren="亮色"
            unCheckedChildren="暗黑"
            defaultChecked
            onChange={e => {
              handleChange(e)
            }}
          />
        </div>
        <div className="ant-pro-setting-drawer-box">
          <DynamicAntdTheme primaryColor={theme} />
        </div>
        <div
          className="theme-close"
          style={{
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '32px',
            width: '50px',
            height: '50px',
            background: 'var(--primary-color)',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CloseOutlined />
        </div>
      </Drawer>
    </div>
  )
}
