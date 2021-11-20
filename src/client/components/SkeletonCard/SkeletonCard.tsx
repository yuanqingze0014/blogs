import React, { useEffect, useState } from 'react'
import { Skeleton, Card, Avatar, Col, Row } from 'antd'
import { formatDate } from '@utils'
/* react-intl imports */
import { FormattedMessage } from 'react-intl'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

const { Meta } = Card

import './index.css'

export const SkeletonCard = props => {
  const { cardList } = props
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(!loading)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const handleSetting = (file) => {
    props.handleSetting(file)
  }

  return (
    <Row gutter={24}>
      {cardList &&
        cardList.map(file => {
          return (
            <Col key={file.originalname} span={4}>
              <Card
                style={{marginTop: 16 }}
                actions={[
                  <SettingOutlined
                    key="setting"
                    onClick={() => {
                      handleSetting(file)
                    }}
                  />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />
                ]}
              >
                <Skeleton loading={loading} active>
                  <Meta
                    title={file.originalname}
                    description={
                      <>
                        <FormattedMessage id={'card.description'} defaultMessage={'card.description'}></FormattedMessage>
                        {formatDate(file.createAt, 'YYYY-MM-DD hh:mm:ss A')}
                      </>
                    }
                  />
                  <div className="and-card-image">
                    <img src={file.url} />
                  </div>
                  {/* <AntCardImage></AntCardImage> */}
                </Skeleton>
              </Card>
            </Col>
          )
        })}
    </Row>
  )
}

// const AntCardImage = styled.div`
//   & img {
//     width: 100px;
//     height: 100%;
//   }
// `
