import React, { useContext } from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { Layout, Breadcrumb, Row, Col, Menu, Popconfirm, Tag } from 'antd'
import { Icon as LegacyIcon } from '@ant-design/compatible'
import { CopyrightOutlined, GithubOutlined, ExportOutlined, FacebookOutlined } from '@ant-design/icons'
import { ISettingProps } from '@models/settingModels'
import { settingStateSelector } from '@recoil/selector/settingSelector'
import { menus, findActiveMenu } from '@router/index'
import { FormattedMessage } from 'react-intl' /* react-intl imports */
import zhCN from '@language/zh'
import enUS from '@language/en'
const message = {
  en: enUS,
  zh: zhCN
}
const { Sider, Content } = Layout
const { SubMenu } = Menu
import './Index.css'

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

  const toggleLanguage = () => {
    const locale = setting.locale === 'zh' ? 'en' : 'zh'
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
          <Popconfirm placement="leftBottom" title={<FormattedMessage id={'logout'} defaultMessage={'logout'}></FormattedMessage> } onConfirm={handleLogout} okText="Yes" cancelText="No">
            <ExportOutlined />
          </Popconfirm>
        </div>
      </Sider>
      <Layout className="main">
        <header>
          <Row gutter={24}>
            <Col span={8}>
              <LegacyIcon className="trigger" type={setting.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggleCollapse} />
            </Col>
            <Col span={8}>
              <Tag icon={<FacebookOutlined />} color="#3b5999" onClick={() => toggleLanguage()}>
                <FormattedMessage id={setting.locale} defaultMessage={setting.locale}></FormattedMessage>
              </Tag>
            </Col>
            <Col span={8} style={{ textAlign: 'right' }}>
              <div className="info">
                <a className="github" href="https://github.com/fantasticit/wipi" target="_blank" rel="noreferrer">
                  <GithubOutlined />
                </a>
                {/* <UserInfo /> */}
              </div>
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
          <main>
            {children}
            <footer>
              <ul className="icons">
                <li>
                  <a className="github" href="https://github.com/fantasticit/wipi" target="_blank" rel="noreferrer">
                    <GithubOutlined />
                  </a>
                </li>
              </ul>
              <div className="copyright">
                <p>
                  Copyright <CopyrightOutlined /> {new Date().getFullYear()} Designed by
                  {/* <a href="https://github.com/fantasticit/wipi" target="_blank" rel="noreferrer">
                    Fantasticit.
                  </a> */}
                </p>
              </div>
            </footer>
          </main>
        </Content>
      </Layout>
    </Layout>
  )
}
