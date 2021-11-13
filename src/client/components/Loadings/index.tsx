import React from 'react'
interface Iprops {
  height?: string
  tip?: string
}

const Loading: React.FunctionComponent<Iprops> = ({ height = '50px', tip = '' }) => (
  <div className="common-loading" style={{ lineHeight: height, height }}>
    {tip}
  </div>
)

export default Loading
