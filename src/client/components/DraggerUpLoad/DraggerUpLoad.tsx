import React from 'react'
import { Upload, message } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import { FormattedMessage } from 'react-intl' /* react-intl imports */

const { Dragger } = Upload

const DraggerUpLoad = () => {
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    }
  }
  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          <FormattedMessage id={'upload.text'} defaultMessage={'upload.text'}></FormattedMessage>
        </p>
        <p className="ant-upload-hint">
          <FormattedMessage id={'upload.hint'} defaultMessage={'upload.hint'}></FormattedMessage>
        </p>
      </Dragger>
    </div>
  )
}
export { DraggerUpLoad }
