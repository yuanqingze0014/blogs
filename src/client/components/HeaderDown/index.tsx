import React from 'react'
// import type { DropDownProps } from 'antd/es/dropdown';
import { Dropdown, DropDownProps } from 'antd'
// import './index.css';

export type HeaderDropdownProps = {
  elementText: React.ReactNode
  overlayClassName?: string
  overlay: React.ReactNode | (() => React.ReactNode) | any
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomCenter'
} & Omit<DropDownProps, 'overlay'>

const HeaderDropdown: React.FC<HeaderDropdownProps> = props => {
  console.log(`%c 😉 🚀 : restProps `, `font-size:14px;background-color:#e8d0b3;color:black;`, props)
  // return <Dropdown {...restProps}></Dropdown>
  return <Dropdown {...props} >{props.elementText}</Dropdown>
}

export default HeaderDropdown
