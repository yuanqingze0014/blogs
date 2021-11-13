import React from 'react'
import PdfRender from '@components/PdfRender/PdfRender'
import "./index.css"

export default function Index() {
  const goBack = () => {

  }
  return (
    <div className="book-container">
      <div className="md-back-btn" onClick={goBack}>
        <i className="iconfont">&#xe653;</i>
      </div>
      <PdfRender url="https://daishengloda.github.io/review/dist/static/pdf/b3.pdf" />
    </div>
  )
}
