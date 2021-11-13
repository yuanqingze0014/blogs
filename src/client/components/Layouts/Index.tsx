import React, { useContext } from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { Layout, Breadcrumb, Row, Col, Menu, Popconfirm } from 'antd'
import { Icon as LegacyIcon } from '@ant-design/compatible'
import { CopyrightOutlined, GithubOutlined, ExportOutlined } from '@ant-design/icons'
import { ISettingProps } from '@models/settingModels'
import { settingStateSelector } from '@recoil/selector/settingSelector'
import { menus, findActiveMenu } from '@router/index'
const { Sider, Content } = Layout
const { SubMenu } = Menu
import './Index.css'

export const Layouts: React.FC<{ headerAppender?: React.ReactNode }> = (props) => {
console.log(`%c 🏠 🚀 : props `, `font-size:14px;background-color:#da7df0;color:white;`, props);
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

  const handleLogout = (): void => {
    history.replace(`/`)
  }

  const renderMenuItem = (menu: myMenu.MenuItem) => {
    return (
      <Menu.Item key={menu.path} onClick={() => history.push(menu.path)}>
        <Link to={menu.path}>
          <span className={activeMenu && activeMenu.path === menu.path ? 'active' : ''}>
            <LegacyIcon type={menu.meta.icon} />
            <span>{menu.meta.title}</span>
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
            <SubMenu key={menu.path} icon={<LegacyIcon type={menu.meta.icon} />} title={menu.meta.title}>
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
          {!setting.collapsed && <span style={{ marginLeft: 4 }}>BUG管理系统</span>}
        </div>
        {MenuContent}
        <div className="logout">
          <Popconfirm placement="leftBottom" title={'是否要退出'} onConfirm={handleLogout} okText="Yes" cancelText="No">
            <ExportOutlined />
          </Popconfirm>
        </div>
      </Sider>
      <Layout className="main">
        <header>
          <Row>
            <Col span={12}>
              <LegacyIcon className="trigger" type={setting.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggleCollapse} />
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
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
                      <span>{breadcrumb.meta!.title}</span>
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
