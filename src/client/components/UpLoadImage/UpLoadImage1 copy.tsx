import { Button, Space } from 'antd'
import React, { PureComponent } from 'react'

let params = {
  zoomVal: 1,
  left: 0,
  top: 0,
  currentX: 0,
  currentY: 0,
  flag: false
}

export default class PhotoPreview extends PureComponent {
  componentDidMount() {
    this.startDrag(document.getElementById('img'), document.getElementById('img'))
  }

  //图片缩放
  onWheel = () => {
    // eslint-disable-next-line no-restricted-globals
    params.zoomVal += event.wheelDelta / 1200
    if (params.zoomVal >= 0.2) {
      this.imgDom.style.transform = 'scale(' + params.zoomVal + ')'
    } else {
      params.zoomVal = 0.2
      this.imgDom.style.transform = 'scale(' + params.zoomVal + ')'
      return false
    }
  }

  //获取相关CSS属性
  getCss = (o, key) => {
    return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key]
  }

  //拖拽的实现
  startDrag = (bar, target, callback) => {
    if (this.getCss(target, 'left') !== 'auto') {
      params.left = this.getCss(target, 'left')
    }
    if (this.getCss(target, 'top') !== 'auto') {
      params.top = this.getCss(target, 'top')
    }
    //o是移动对象
    bar.onmousedown = event => {
      params.flag = true
      if (!event) {
        event = window.event
        //防止IE文字选中
        bar.onselectstart = () => {
          return false
        }
      }
      var e = event
      params.currentX = e.clientX
      params.currentY = e.clientY
    }

    document.onmouseup = () => {
      params.flag = false
      if (this.getCss(target, 'left') !== 'auto') {
        params.left = this.getCss(target, 'left')
      }
      if (this.getCss(target, 'top') !== 'auto') {
        params.top = this.getCss(target, 'top')
      }
    }

    document.onmousemove = event => {
      var e = event ? event : window.event

      if (params.flag) {
        var nowX = e.clientX,
          nowY = e.clientY
        var disX = nowX - params.currentX,
          disY = nowY - params.currentY
        target.style.left = parseInt(params.left, 10) + disX + 'px'
        target.style.top = parseInt(params.top, 10) + disY + 'px'

        if (typeof callback === 'function') {
          callback((parseInt(params.left, 10) || 0) + disX, (parseInt(params.top, 10) || 0) + disY)
        }

        if (event.preventDefault) {
          event.preventDefault()
        }
        return false
      }
    }
  }

  handleLeft = () => {}

  handleRight = () => {}

  handleBig = () => {
    console.log(this.imgDom.style)
  }

  handleSmall = () => {}

  render() {
    const { src } = this.props
    return (
      <div
        onWheel={this.onWheel}
        style={{
          width: '100%',
          height: '60vh',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <Space size={'small'}>
          <Button type="primary" onClick={() => this.handleBig()}>
            放大
          </Button>
          <Button onClick={() => this.handleSmall()}>缩小</Button>
          <Button type="dashed" onClick={() => this.handleLeft()}>
            左转
          </Button>
          <Button type="link" onClick={() => this.handleRight()}>
            右转
          </Button>
        </Space>
        <img
          id="img"
          border="0"
          src={src}
          alt={src}
          ref={dom => {
            this.imgDom = dom
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: 'auto',
            cursor: 'move'
          }}
        />
      </div>
    )
  }
}
