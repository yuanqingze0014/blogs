import React, { useEffect, useState } from 'react'
import { Button, Space, Divider } from 'antd'
/* react-intl imports */
import { FormattedMessage } from 'react-intl'
// Components
import { DraggerUpLoad } from '@components/DraggerUpLoad/DraggerUpLoad'
import { SkeletonCard } from '@components/SkeletonCard/SkeletonCard'
import { Drawer } from '@components/Drawer/Drawer'

import './index.css'

const FileIndexPage: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState<any[]>([])

  const DrawerFooter = (
    <Space>
      <Divider />
      <Button type="primary" size="large" onClick={() => setVisible(false)}>
        <FormattedMessage id={'button.close'} defaultMessage={'button.close'}></FormattedMessage>
      </Button>
      <Button type="dashed" size="large" danger onClick={() => handleDelete}>
        <FormattedMessage id={'button.delete'} defaultMessage={'button.delete'}></FormattedMessage>
      </Button>
    </Space>
  )

  useEffect(() => {
    setData([
      {
        id: 'c035dc12-7e14-4d26-8727-47ed3331cdf3',
        originalname: '第四范式能力标准-前端开发.xlsx',
        filename: '/2021-10-09/第四范式能力标准-前端开发.xlsx',
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        size: 55096,
        url: 'https://picture-1302857231.cos.ap-beijing.myqcloud.com/2021-10-09/%E7%AC%AC%E5%9B%9B%E8%8C%83%E5%BC%8F%E8%83%BD%E5%8A%9B%E6%A0%87%E5%87%86-%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91.xlsx',
        createAt: '2021-10-09T07:34:22.757Z'
      },
      {
        id: '425d9b90-79ab-4a32-9c73-31837193cd0f',
        originalname: 'config-new.json',
        filename: '/2021-10-09/config-new.json',
        type: 'application/json',
        size: 9677,
        url: 'https://picture-1302857231.cos.ap-beijing.myqcloud.com/2021-10-09/config-new.json',
        createAt: '2021-10-09T07:01:59.207Z'
      },
      {
        id: '6ec61c74-12c8-494e-ace6-82b7465a6452',
        originalname: 'IMG_0556.PNG',
        filename: '/2021-09-16/IMG_0556.PNG',
        type: 'image/png',
        size: 10146652,
        url: 'https://picture-1302857231.cos.ap-beijing.myqcloud.com/2021-09-16/IMG_0556.PNG',
        createAt: '2021-09-16T07:53:57.043Z'
      },
      {
        id: 'eaa542fe-13e7-4897-b276-cba1b7c522cf',
        originalname: 'image.png',
        filename: '/2021-09-05/5PF365T5UICX6FNE2V3WB8/image.png',
        type: 'image/png',
        size: 383680,
        url: 'https://picture-1302857231.cos.ap-beijing.myqcloud.com/2021-09-05/5PF365T5UICX6FNE2V3WB8/image.png',
        createAt: '2021-09-05T15:09:39.303Z'
      },
      {
        id: '0cc56b51-ab02-44a2-bed2-ea72680ae76c',
        originalname: 'bg-lion.jpeg',
        filename: '/2021-09-03/bg-lion.jpeg',
        type: 'image/jpeg',
        size: 67015,
        url: 'https://picture-1302857231.cos.ap-beijing.myqcloud.com/2021-09-03/bg-lion.jpeg',
        createAt: '2021-09-02T16:29:18.336Z'
      },
      {
        id: 'ee91d402-9289-410c-a6e4-a8aa72ef77ca',
        originalname: 'bg-react.webp',
        filename: '/2021-09-03/bg-react.webp',
        type: 'image/webp',
        size: 17312,
        url: 'https://picture-1302857231.cos.ap-beijing.myqcloud.com/2021-09-03/bg-react.webp',
        createAt: '2021-09-02T16:28:22.870Z'
      },
      {
        id: '21434cd3-e861-4fc3-bc40-29820984e9b9',
        originalname: 'bg-eagle.webp',
        filename: '/2021-09-03/bg-eagle.webp',
        type: 'image/webp',
        size: 7196,
        url: 'https://picture-1302857231.cos.ap-beijing.myqcloud.com/2021-09-03/bg-eagle.webp',
        createAt: '2021-09-02T16:27:23.854Z'
      },
      {
        id: '81b80b1e-1743-4bf4-bd76-15d8f90c0c59',
        originalname: 'image.png',
        filename: '/2021-09-01/IXARIEXB2UILCZ5HA4RNBQ/image.png',
        type: 'image/png',
        size: 20613,
        url: 'https://picture-1302857231.cos.ap-beijing.myqcloud.com/2021-09-01/IXARIEXB2UILCZ5HA4RNBQ/image.png',
        createAt: '2021-08-31T16:24:07.074Z'
      },
      {
        id: 'e6af39bb-72ea-453e-af0a-2348c8ba898e',
        originalname: 'es-next.webp',
        filename: '/2021-08-30/es-next.webp',
        type: 'image/webp',
        size: 4138,
        url: 'https://picture-1302857231.cos.ap-beijing.myqcloud.com/2021-08-30/es-next.webp',
        createAt: '2021-08-30T15:38:35.554Z'
      },
      {
        id: '7d4a19ff-1364-4b4c-bdda-aa88c7cd87eb',
        originalname: '555A314C-D39B-491D-8709-DDE7E08ACB39.jpeg',
        filename: '/2021-08-30/555A314C-D39B-491D-8709-DDE7E08ACB39.jpeg',
        type: 'image/jpeg',
        size: 173261,
        url: 'https://picture-1302857231.cos.ap-beijing.myqcloud.com/2021-08-30/555A314C-D39B-491D-8709-DDE7E08ACB39.jpeg',
        createAt: '2021-08-30T15:10:04.399Z'
      }
    ])
  }, [])
  const handleSubmit = () => {}
  const handleDelete = () => {
    setVisible(false)
  }

  const handleSetting = (file) => {
    console.log(`%c 🔱 🚀 : handleSetting -> file `, `font-size:14px;background-color:#a544f0;color:white;`, file);
    setVisible(true)
  }

  const handleCloseDrawer = () => {
    setVisible(false)
  }

  return (
    <div className="file-container">
      <DraggerUpLoad />
      <SkeletonCard cardList={data} handleSetting={handleSetting} />
      <Drawer
        title={<FormattedMessage id={'drawer.title'} defaultMessage={'drawer.title'}></FormattedMessage>}
        visible={visible}
        footer={DrawerFooter}
        handleCloseDrawer={handleCloseDrawer}
      />
    </div>
  )
}
export default FileIndexPage
