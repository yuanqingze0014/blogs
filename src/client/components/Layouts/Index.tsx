import React, { useContext } from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'
import { Icon as LegacyIcon } from '@ant-design/compatible'
import { CopyrightOutlined, GithubOutlined, ExportOutlined, FacebookOutlined, DownOutlined, GlobalOutlined } from '@ant-design/icons'
import { Layout, Breadcrumb, Row, Col, Menu, Popconfirm, Tag, Dropdown } from 'antd'
import { FormattedMessage } from 'react-intl' /* reßact-intl imports */
import { useRecoilState } from 'recoil'
import { ISettingProps } from '@models/settingModels'
import { settingStateSelector } from '@recoil/selector/settingSelector'
import { menus, findActiveMenu } from '@router/index'

// Components
import HeaderDropdown from '@components/HeaderDown'

import zhCN from '@language/zh'
import enUS from '@language/en'
const message = {
  en: enUS,
  zh: zhCN
}
const { Sider, Content } = Layout
const { SubMenu } = Menu
import './Index.css'
import { Components } from 'antd/lib/date-picker/generatePicker'

export const Layouts: React.FC<{ headerAppender?: React.ReactNode }> = props => {
  const { headerAppender, children } = props
  const [setting, setSettingAction] = useRecoilState<ISettingProps>(settingStateSelector)
  const location = useLocation()
  const history = useHistory()
  const { pathname } = location
  const [activeMenu, breadcrumbs] = findActiveMenu(pathname)
  // const { collapsed, toggleCollapse } = useContext(GlobalContext);
  const toggleCollapse = () => {
    setSettingAction({
      ...setting,
      collapsed: !setting.collapsed
    })
  }

  const toggleLanguage = (key: string) => {
    const locale = key === 'zh' ? 'zh' : 'en'
    setSettingAction({
      ...setting,
      locale,
      langauge: message[locale]
    })
  }

  const handleLogout = (): void => {
    history.replace(`/`)
  }

  const renderMenuItem = (menu: myMenu.MenuItem) => {
    return (
      <Menu.Item key={menu.path} onClick={() => history.push(menu.path)}>
        <Link to={menu.path}>
          <span className={activeMenu && activeMenu.path === menu.path ? 'active' : ''}>
            <LegacyIcon type={menu.meta.icon} />
            <span>
              <FormattedMessage id={menu.meta.title} defaultMessage={menu.meta.title}></FormattedMessage>
            </span>
          </span>
        </Link>
      </Menu.Item>
    )
  }

  const MenuContent = (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[activeMenu && activeMenu.path]}>
      {menus
        .filter((m: myMenu.MenuItem) => !m.ignore)
        .map((menu: myMenu.MenuItem) => {
          return menu.children ? (
            <SubMenu
              key={menu.path}
              icon={<LegacyIcon type={menu.meta.icon} />}
              title={<FormattedMessage id={menu.meta.title} defaultMessage={menu.meta.title}></FormattedMessage>}
            >
              {menu.children.filter(m => !m.ignore).map(v => renderMenuItem(v))}
            </SubMenu>
          ) : (
            renderMenuItem(menu)
          )
        })}
    </Menu>
  )

  const onClick = ({ key }: any) => {
    toggleLanguage(key)
  }

  const languageMenu = (
    <Menu onClick={onClick}>
      {[
        { label: '中文', value: 'zh' },
        { label: '英文', value: 'en' }
      ].map(item => {
        return (
          <Menu.Item key={item.value} className={setting && setting.locale === item.value && 'ant-dropdown-menu-item-selected'}>
            <FormattedMessage id={item.value} defaultMessage={item.value}></FormattedMessage>
          </Menu.Item>
        )
      })}
    </Menu>
  )

  return (
    <Layout className="container">
      <Sider className="asider" trigger={null} collapsible={true} collapsed={setting.collapsed}>
        <div className="logo">
          {setting.systemFavicon && <img src={setting.systemFavicon} />}
          {!setting.collapsed && (
            <span style={{ marginLeft: 4 }}>
              <FormattedMessage id={'systemTitle'} defaultMessage={'systemTitle'}></FormattedMessage>
            </span>
          )}
        </div>
        {MenuContent}
        <div className="logout">
          <Popconfirm
            placement="leftBottom"
            title={<FormattedMessage id={'logout'} defaultMessage={'logout'}></FormattedMessage>}
            onConfirm={handleLogout}
            okText="Yes"
            cancelText="No"
          >
            <ExportOutlined />
          </Popconfirm>
        </div>
      </Sider>
      <Layout className="main">
        <header>
          <Row gutter={24} style={{ width: '100%' }}>
            <Col span={2}>
              <LegacyIcon className="trigger" type={setting.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggleCollapse} />
            </Col>
            <Col span={21}></Col>
            <Col span={1} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="info">
                <a className="github" href="https://github.com/fantasticit/wipi" target="_blank" rel="noreferrer">
                  <GithubOutlined />
                </a>
                {/* <UserInfo /> */}
              </div>
              <Dropdown overlay={languageMenu} placement={'bottomRight'} arrow>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  <svg viewBox="0 0 24 24" focusable="false" width="20px" height="20px" fill="currentColor" aria-hidden="true">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "></path>
                  </svg>
                </a>
              </Dropdown>
              {/* <HeaderDropdown overlay={languageMenu} trigger={['click']} /> */}
            </Col>
          </Row>
        </header>
        <Content className="content">
          <header>
            <Breadcrumb>
              {breadcrumbs.map((breadcrumb: myMenu.MenuItem) => {
                return (
                  <Breadcrumb.Item key={breadcrumb.path}>
                    <Link to={breadcrumb.path}>
                      <span>
                        <FormattedMessage id={breadcrumb.meta!.title} defaultMessage={breadcrumb.meta!.title}></FormattedMessage>
                      </span>
                    </Link>
                  </Breadcrumb.Item>
                )
              })}
            </Breadcrumb>
            <div className="title">{activeMenu && activeMenu.label}</div>
            {headerAppender && <div>{headerAppender}</div>}
          </header>
          <main>{children}</main>
          <footer>
            <div className="">
              <p>
                Copyright <CopyrightOutlined /> {new Date().getFullYear()} Designed by
                {/* <a href="https://github.com/fantasticit/wipi" target="_blank" rel="noreferrer">
                    Fantasticit.
                  </a> */}
              </p>
            </div>
            <ul className="icons">
              <li>
                <a className="github" href="https://github.com/PeopleWhoListenToStories" target="_blank" rel="noreferrer">
                  <GithubOutlined />
                </a>
              </li>
            </ul>
          </footer>
        </Content>
      </Layout>
    </Layout>
  )
}
