import React, { useRef, useState } from 'react'
import { Upload, Modal, Space, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import UpLoadImage1 from './UpLoadImage1'
import './index.css'
let viewer: any = null

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

export default function UpLoadImage() {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')

  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error'
    }
  ])
  const pictureDiv = useRef()

  const handleChange = async obj => {
    const file = obj.file.originFileObj
    file.preview = await getBase64(file)
    setFileList([...fileList, file])
  }

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewVisible(true)
    setPreviewImage(file.url || file.preview)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }

  const handleCancel = () => setPreviewVisible(false)

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <div>
      <div className="wrapper" ref={pictureDiv}>
        {fileList.map((item, index) => {
          console.log(`%c 🌒 🚀 : UpLoadImage -> item `, `font-size:14px;background-color:#3f9b5f;color:white;`, item)
          return (
            <div
              className="item-image"
              onClick={() => {
                handlePreview(item.preview)
              }}
            >
              <img src={item.preview} key={index} />
            </div>
          )
        })}
      </div>
      <Upload action="" listType="picture-card" fileList={fileList} onChange={handleChange} onPreview={handlePreview}>
        uploadButton
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel} width={'80%'} bodyStyle={{ height: '80%' }} >
        <UpLoadImage1 src={previewImage} />
      </Modal>
    </div>
  )
}
