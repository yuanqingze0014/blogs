import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Space, Tooltip, Table } from 'antd'
import { TableList } from '@components/TableList/TableList'
import { InfoCircleOutlined } from '@ant-design/icons'

const VisitPage: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([])
  const [sortedInfo, setSortedInfo] = useState({
    columnKey: 'age',
    order: 'descend'
  })

  const handlePaginationCallback = (page: number, pageSize?: number | undefined) => {
    console.log(page, pageSize)
    setLoading(false)
  }

  const handleReloadCallback = () => {
    console.log('刷新了')
  }

  const handleTableChangeCallback = (pagination, filters, sorter, extra) => {
    setSortedInfo({
      columnKey: 'age',
      order: sorter.order
    })
  }

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changableRowKeys.filter((key: any, index: number) => {
            if (index % 2 !== 0) {
              return false
            }
            return true
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys: any[]) => {
          let newSelectedRowKeys = []
          newSelectedRowKeys = changableRowKeys.filter((key: any, index: number) => {
            if (index % 2 !== 0) {
              return true
            }
            return false
          })
          setSelectedRowKeys(newSelectedRowKeys)
        }
      }
    ]
  }

  return (
    <div>
      visit
      <TableList
        paginationCallback={handlePaginationCallback}
        tableChangeCallback={handleTableChangeCallback}
        reloadCallback={handleReloadCallback}
        loading={loading}
        total={100}
        page={1}
        pageSize={10}
        rowSelection={rowSelection}
        scroll={{ x: 1300 }}
        columns={[
          {
            title: (
              <div>
                标题&nbsp;
                <Tooltip placement="top" title={'我该显示点啥'}>
                  <InfoCircleOutlined />
                </Tooltip>
              </div>
            ),
            fixed: 'left',
            dataIndex: 'url'
          },
          {
            title: 'Ip',
            dataIndex: 'ip'
          },
          {
            title: '浏览器',
            dataIndex: 'browser'
          },
          {
            title: '内核',
            dataIndex: 'engine'
          },
          {
            title: '操作系统',
            dataIndex: 'os'
          },
          {
            title: '设备',
            dataIndex: 'device'
          },
          {
            title: '地址',
            dataIndex: 'address'
          },
          {
            title: '访问量',
            dataIndex: 'count'
          },
          {
            title: '访问时间',
            dataIndex: 'updateAt',
            sortDirections: ['descend', 'ascend'],
            sorter: () => {
              return true
            },
            sortOrder: sortedInfo.order
          },
          {
            title: '操作',
            dataIndex: 'action',
            width: 150,
            align: 'center',
            fixed: 'right',
            render: () => {
              return (
                <Space>
                  <a>删除</a>
                </Space>
              )
            }
          }
        ]}
        data={[
          {
            id: '0e51b119-3dfa-4803-8401-ff2a4319ac48',
            ip: '66.23.193.243',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36',
            url: 'http://www.humanweaknesses.com:5003/view',
            count: 1,
            address: '美国 加利福尼亚',
            browser: 'Chrome 96.0.4664.55',
            engine: 'Blink 96.0.4664.55',
            os: 'Mac OS 10.15.7',
            device: '',
            createAt: '2021-11-26T03:58:53.053Z',
            updateAt: '2021-11-26T03:58:53.053Z'
          },
          {
            id: '7ea5fe30-6c80-4df5-ad27-a5fdc2d1ecac',
            ip: '66.23.193.242',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36',
            url: 'http://www.humanweaknesses.com:5003/view',
            count: 1,
            address: '美国 加利福尼亚',
            browser: 'Chrome 96.0.4664.55',
            engine: 'Blink 96.0.4664.55',
            os: 'Mac OS 10.15.7',
            device: '',
            createAt: '2021-11-26T03:57:45.443Z',
            updateAt: '2021-11-26T03:57:45.443Z'
          },
          {
            id: 'a5d98740-e744-4b50-939d-ad329336c5db',
            ip: '66.23.193.244',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36',
            url: 'http://www.humanweaknesses.com:5003/login',
            count: 1,
            address: '美国 加利福尼亚',
            browser: 'Chrome 96.0.4664.55',
            engine: 'Blink 96.0.4664.55',
            os: 'Mac OS 10.15.7',
            device: '',
            createAt: '2021-11-26T03:57:01.769Z',
            updateAt: '2021-11-26T03:57:01.769Z'
          },
          {
            id: '6a575719-3941-4857-8df2-f3f06dc8e8a3',
            ip: '66.23.193.243',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36',
            url: 'http://www.humanweaknesses.com:5003/',
            count: 1,
            address: '美国 加利福尼亚',
            browser: 'Chrome 96.0.4664.55',
            engine: 'Blink 96.0.4664.55',
            os: 'Mac OS 10.15.7',
            device: '',
            createAt: '2021-11-26T03:56:56.041Z',
            updateAt: '2021-11-26T03:56:56.041Z'
          },
          {
            id: '838ba2e7-60cd-4497-b381-8fdaa8461248',
            ip: '114.242.250.252',
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
            url: 'http://81.70.87.115:5003/file',
            count: 2,
            address: '中国 北京 北京市 联通',
            browser: 'Mobile Safari 15.0',
            engine: 'WebKit 605.1.15',
            os: 'iOS 15.0.1',
            device: 'Apple iPhone mobile',
            createAt: '2021-11-25T11:09:34.707Z',
            updateAt: '2021-11-25T11:09:37.000Z'
          },
          {
            id: 'bbd20ff6-5112-4a39-9ac8-8ded53aa6a35',
            ip: '114.242.250.252',
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
            url: 'http://81.70.87.115:5003/serviceManage/smsManage',
            count: 4,
            address: '中国 北京 北京市 联通',
            browser: 'Mobile Safari 15.0',
            engine: 'WebKit 605.1.15',
            os: 'iOS 15.0.1',
            device: 'Apple iPhone mobile',
            createAt: '2021-11-25T11:09:25.254Z',
            updateAt: '2021-11-25T11:09:42.000Z'
          },
          {
            id: '28a670b9-573c-48e0-8b8a-ef0cf4b89433',
            ip: '211.95.50.8',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
            url: 'http://humanweaknesses.com:5003/',
            count: 1,
            address: '中国 上海 上海市 联通',
            browser: 'Chrome 87.0.4280.88',
            engine: 'Blink 87.0.4280.88',
            os: 'Mac OS 11.0.0',
            device: '',
            createAt: '2021-11-24T07:54:56.328Z',
            updateAt: '2021-11-24T07:54:56.328Z'
          },
          {
            id: 'c7bbaa23-6ddf-45c2-b0ee-43ee21735f8e',
            ip: '43.224.45.108',
            userAgent:
              'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63040026)',
            url: 'http://www.humanweaknesses.com:5003/articles/0495b4e8-6a32-418c-9a79-c2eb72bac85a',
            count: 1,
            address: '中国 北京 北京市 皓宽网络',
            browser: 'WeChat 7.0.20.1781',
            engine: 'Blink 81.0.4044.138',
            os: 'Windows 7',
            device: '',
            createAt: '2021-11-24T06:55:12.558Z',
            updateAt: '2021-11-24T06:55:12.558Z'
          },
          {
            id: '4537ed66-ffce-4b39-9b59-1a2089f28e90',
            ip: '43.224.45.108',
            userAgent:
              'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63040026)',
            url: 'http://www.humanweaknesses.com:5003/',
            count: 1,
            address: '中国 北京 北京市 皓宽网络',
            browser: 'WeChat 7.0.20.1781',
            engine: 'Blink 81.0.4044.138',
            os: 'Windows 7',
            device: '',
            createAt: '2021-11-24T06:54:51.705Z',
            updateAt: '2021-11-24T06:54:51.705Z'
          },
          {
            id: '2c0a4bdf-d1fd-4a63-abf7-43fe8183965c',
            ip: '27.115.124.38',
            userAgent:
              'Mozilla/5.0 (Linux; U; Android 8.1.0; zh-CN; EML-AL00 Build/HUAWEIEML-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 baidu.sogo.uc.UCBrowser/11.9.4.974 UWS/2.13.1.48 Mobile Safari/537.36 AliApp(DingTalk/4.5.11) com.alibaba.android.rimet/10487439 Channel/227200 language/zh-CN',
            url: 'http://www.humanweaknesses.com:5003/',
            count: 1,
            address: '中国 上海 上海市 联通',
            browser: 'Android Browser 4.0',
            engine: 'Blink 57.0.2987.108',
            os: 'Android 8.1.0',
            device: 'Huawei EML-AL00 mobile',
            createAt: '2021-11-24T02:49:14.523Z',
            updateAt: '2021-11-24T02:49:14.523Z'
          }
        ]}
        buttonColumns={[
          {
            label: '新建',
            value: 'create',
            click: e => {
              console.log(e, 'e....')
            }
          }
        ]}
      />
    </div>
  )
}
export default VisitPage
