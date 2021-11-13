// import React, { useState, useMemo, useRef, useCallback } from 'react'
// import { Document, Page, Outline } from 'react-pdf/dist/esm/entry.webpack'
// import Loading from '@components/Loading/loading'
// import { useViewport } from '../../hooks'
// import './pdfRender.css'

// interface IProps {
//   url: string
// }

// const PdfRender: React.FC<IProps> = props => {
//   const { wh, ww } = useViewport()

//   const [numPages, setNumPages] = useState(null)
//   // const [pageNumber, setPageNumber] = useState(1)
//   const [hasOutline, setHasOutline] = useState(true)
//   let [pageNum, setPageNum] = useState(1)
//   const pageNumRef = useRef(pageNum)
//   pageNumRef.current = pageNum
//   const numPagesRef = useRef(numPages)
//   numPagesRef.current = numPages
//   // pdf信息callback
//   const onDocumentLoadSuccess = ({ numPages }: any) => {
//     setNumPages(numPages)
//   }

//   const handlPrevClick = useCallback(() => {
//     if (pageNumRef.current <= 1) return
//     setPageNum(pageNum => --pageNum)
//   }, [])
//   const handlNextClick = useCallback(() => {
//     if (pageNumRef.current >= numPagesRef.current) return
//     setPageNum(pageNum => ++pageNum)
//   }, [])

//   const pdfParams = useMemo(() => {
//     return {
//       url: props.url
//       // httpHeaders: { xs: sign },
//     }
//   }, [])

//   return (
//     <div
//       className="pdf-render-con"
//       style={{
//         height: wh - 166 + 'px'
//       }}
//     >
//       <div className="pdf-page-btn">
//         <div className={`prev ${pageNum <= 1 ? 'disable' : ''}`} onClick={handlPrevClick}>
//           上一页
//         </div>
//         <div className="current-page-num">
//           {pageNum}/{numPages}
//         </div>
//         <div className={`next ${pageNum >= numPages ? 'disable' : ''}`} onClick={handlNextClick}>
//           下一页
//         </div>
//       </div>
//       <Document file={pdfParams} loading={<Loading />} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page renderAnnotationLayer={false} renderTextLayer={false} pageNumber={pageNum} width={ww * 0.8} className={`${hasOutline ? '' : 'react-pdf-page-custom'}`} />
//       </Document>
//     </div>
//   )
// }
// export default React.memo(PdfRender)
