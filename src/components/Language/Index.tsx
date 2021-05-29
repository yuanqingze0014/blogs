import React, { Fragment } from 'react'
import { observer, useObserver } from "mobx-react";
import { Menu, Dropdown, Button, MenuInfo } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import useStore from '@/context/useStore';

const defaultMenuList = [
  {
    label: 'zh',
    value: 'default.zh'
  },
  {
    label: 'en',
    value: 'default.en'
  }
]

const Language: React.FC = observer(() => {

  const { LanguageStore } = useStore();

  const menu = (
    <Menu>
      {
        defaultMenuList.map(item => {
          return <Menu.Item className={item.label === LanguageStore.locale ? 'active' : ''} key={item.label} onClick={(e: MenuInfo) => { LanguageStore.changeLanguage(e.key) }}>
            <FormattedMessage id={item.value} ></FormattedMessage>
          </Menu.Item>
        })
      }
    </Menu>
  );

  return (
    <Fragment>
      <Dropdown overlay={menu} placement="bottomRight" arrow trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          {<FormattedMessage id={`default.${LanguageStore.locale}`} ></FormattedMessage>} <DownOutlined />
        </a>
      </Dropdown>
    </Fragment>
  )

})

export default Language