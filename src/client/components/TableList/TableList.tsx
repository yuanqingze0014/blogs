import React, { Children, useState } from 'react'
import { Button, Col, Dropdown, Menu, Pagination, Row, Table, Tooltip, Checkbox, Divider, Popover } from 'antd'
import { ColumnHeightOutlined, ReloadOutlined, SettingOutlined } from '@ant-design/icons'
import { FormattedMessage } from 'react-intl' /* reßact-intl imports */
import HeaderDropdown from '@components/HeaderDown'

const CheckboxGroup = Checkbox.Group

interface Iprops {
  defaultSize: 'default' | 'middle' | 'small' | undefined
  columns: any[]
  data: any[]
  buttonColumns: {
    label: string
    value: string
    type?: 'default' | 'link' | 'text' | 'ghost' | 'primary' | 'dashed' | undefined
    click: () => void
  }[]
  scroll: any
  loading: boolean
  total: number
  page: number
  pageSize: number
  rowSelection: {
    selectedRowKeys: number[]
    onChange: (selectedRowKeys: number[], selectedRows: any) => void
    selections?: any[]
  }
  reloadCallback: () => void
  paginationCallback: (page: number, pageSize?: number | undefined) => void
  tableChangeCallback: (
    pagination,
    filters,
    sorter: {
      column: { title: string; dataIndex: string; sortDirections: ['descend', 'ascend']; sortOrder: string; sorter: Function }
      columnKey: any
      field: string
      order: string
    },
    extra
  ) => void
}

export const TableList: React.FC<Iprops> = props => {
  const { columns = [], data = [], buttonColumns = [], total = 0, page = 1, defaultSize = 'default', pageSize = 10, loading = false, scroll = {}, rowSelection = {} } = props
  const [size, setSize] = useState<'default' | 'middle' | 'small' | undefined>(defaultSize)
  const [checkedList, setCheckedList] = useState<string[]>(columns.map(v => v.dataIndex))
  const [indeterminate, setIndeterminate] = useState<boolean>(false)
  const [checkAll, setCheckAll] = useState<boolean>(true)

  const onChange = (page: number, pageSize?: number | undefined): void => {
    props.paginationCallback(page, pageSize)
  }

  const onShowSizeChange = (current: number, size: number) => {
    console.log(`%c 🧟‍♂️ 🚀 : onShowSizeChange -> size `, `font-size:14px;background-color:#4087f9;color:white;`, size)
    console.log(`%c 🧟‍♂️ 🚀 : onShowSizeChange -> current `, `font-size:14px;background-color:#6f1bab;color:white;`, current)
  }
  const handleColumnMenuClick = ({ key }: any) => {
    setSize(key)
  }

  const handleChangeGroup = (list: any) => {
    setCheckedList(list)
    setIndeterminate(!!list.length && list.length < props.columns.length)
    setCheckAll(list.length === props.columns.length)
  }

  const onCheckAllChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    setCheckedList(e.target.checked ? props.columns.map(v => v.dataIndex) : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  const handleTableChange = (pagination, filters, sorter, extra) => {
    props.tableChangeCallback(pagination, filters, sorter, extra)
  }

  // 刷新
  const handleReload = () => {
    props.reloadCallback()
  }

  // 处理列设置反选数据
  const formaterCloumns = () => {
    let result: any[] = []
    for (let i = 0; i < checkedList.length; i++) {
      const isHas = columns.find(v => {
        return v.dataIndex === checkedList[i]
      })
      if (isHas) {
        result.push(isHas)
      }
    }
    return result
  }
  const columnMenu = (
    <Menu onClick={handleColumnMenuClick}>
      {[
        {
          label: 'density.default',
          value: 'default'
        },
        {
          label: 'density.middle',
          value: 'middle'
        },
        {
          label: 'density.small',
          value: 'small'
        }
      ].map(item => {
        return (
          <Menu.Item key={item.value}>
            <FormattedMessage id={item.label} defaultMessage={item.label}></FormattedMessage>
          </Menu.Item>
        )
      })}
    </Menu>
  )

  const seetingContent = (
    <>
      <Row align={'middle'} justify={'space-between'}>
        <Col span={18}>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            列展示
          </Checkbox>
        </Col>
        <Col span={4}>
          <Button
            type="link"
            onClick={() => {
              setCheckedList([])
              setCheckAll(false)
            }}
          >
            重置
          </Button>
        </Col>
      </Row>
      <Divider />
      <Checkbox.Group value={checkedList} onChange={handleChangeGroup}>
        <Row align={'middle'}>
          {props.columns.map(target => {
            return (
              <Col flex={24} key={target.dataIndex}>
                <Checkbox value={target.dataIndex}>{target.title}</Checkbox>
              </Col>
            )
          })}
        </Row>
      </Checkbox.Group>
    </>
  )

  return (
    <Row>
      <Col span={24}>
        <Row justify={'end'} align={'middle'} style={{ padding: '8px 0' }}>
          <Col flex={'80px'}>
            {buttonColumns.map(target => {
              return (
                <Button type={target.type || 'primary'} key={target.label} onClick={target.click}>
                  {target.label}
                </Button>
              )
            })}
          </Col>
          <Col flex={'30px'}>
            <Tooltip placement="top" title={<FormattedMessage id={'table.reload'} defaultMessage={'table.reload'}></FormattedMessage>}>
              <ReloadOutlined onClick={() => handleReload()}></ReloadOutlined>
            </Tooltip>
          </Col>
          <Col flex={'30px'}>
            <Tooltip placement="top" title={<FormattedMessage id={'table.density'} defaultMessage={'table.density'}></FormattedMessage>}>
              <Dropdown overlay={columnMenu} trigger={['click']}>
                <ColumnHeightOutlined />
              </Dropdown>
              {/* <span>
                <HeaderDropdown restProps={{ overlay: menu, trigger: ['click'] }} elementText={<ColumnHeightOutlined />} />
              </span> */}
            </Tooltip>
          </Col>
          <Col flex={'30px'}>
            <Tooltip placement="top" title={<FormattedMessage id={'table.setting'} defaultMessage={'table.setting'}></FormattedMessage>}>
              <Popover placement="bottomRight" content={seetingContent} title="" trigger="click">
                <SettingOutlined></SettingOutlined>
              </Popover>
            </Tooltip>
          </Col>
        </Row>
        <Table
          rowKey={record => record.id}
          size={size}
          pagination={false}
          scroll={scroll}
          rowSelection={rowSelection}
          columns={formaterCloumns()}
          dataSource={data}
          loading={loading}
          onChange={handleTableChange}
        />
        <Row justify={'end'} align={'middle'} style={{ padding: '16px 0' }}>
          <Col>
            <Pagination
              total={total}
              size={size}
              showSizeChanger
              showQuickJumper
              showTotal={total => `Total ${total} items`}
              onChange={onChange}
              onShowSizeChange={onShowSizeChange}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
