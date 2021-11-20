import React, { useEffect, useState } from 'react'
import { Drawer as AntdDrawer, Button, Space } from 'antd'
import { DrawerProps } from 'antd/es/drawer'

interface IProps {
  title: string
  visible: boolean
  forceRender:boolean
  width: number
  size: 'default' | 'large'
  placement: 'right' | 'top' | 'bottom' | 'left'
  extra: React.ReactNode
  footer: React.ReactNode
  handleCloseDrawer: () => void
}

export const Drawer: React.FC<IProps> = props => {
  const onClose = () => {
    props.handleCloseDrawer()
  }

  const { title,visible, size = 'default', width = 736, placement = 'right', extra, footer } = props

  return (
    <>
      <AntdDrawer title={title} placement={placement} forceRender={true} width={width} size={size} onClose={onClose} visible={visible} extra={extra} footer={footer}>
       <div>
         
       </div>
      </AntdDrawer>
    </>
  )
}
