import { fabric } from 'fabric'

interface IOpt {
  text?: string
  x?: number
  h?: number
  w?: number
  bgColor?: string
  textColor?: string
  link?: string
  process?: string
  tag?: string
  children: Function
}

interface IItem {
  text: string
  x: number
  y: number
  tag: string
  link: string
  process: number
  children: Array<any>
}

// 卡片的默认配置
export const CARD_CONFIG = {
  width: 140,
  height: 40,
  bgColor: ['#ea5455', '#f07b3f', '#ffd460'],
  subCardMargin: 10,
  lineColor: '#fff',
  textColor: '#444',
  strokeColor: '#3A7AF2'
}

export function c(text: string, x: number, w: number = 200, opt?: IOpt, children?: any): IOpt {
  const { h = 40, bgColor, textColor, link, process, tag } = opt || {}
  let temp: IOpt = {
    text,
    w,
    h,
    children,
    bgColor,
    textColor,
    link,
    process,
    tag
  }
  typeof x === 'number' ? (temp.x = x) : (temp = { ...temp, x })
  return temp
}

let canvas: any = null

// 生成子树的连接线（横向的）
export function makeSubLine(c1: fabric.Group, c2: fabric.Group) {
  const line: fabric.Path = new fabric.Path('M 65 0 Q 100, 100, 200, 0', {
    fill: '',
    stroke: CARD_CONFIG.lineColor,
    strokeWidth: 2,
    objectCaching: false
  })
  line.strokeDashArray = [5, 5]
  line.path[0][1] = c1.left + c1.width
  line.path[0][2] = c1.top + c1.height / 2

  if (c1.left > c2.left) {
    line.path[1][1] = c2.left - (c1.left - c2.left) / 2
    line.path[1][2] = c1.top + (c2.top - c1.top) / 2
  } else if (c1.left < c2.left) {
    line.path[1][1] = c1.left + (c2.left + c1.width - c1.left) / 2
    line.path[1][2] = c1.top + (c2.top - c1.top) / 2
  }
  line.path[1][3] = c2.left
  line.path[1][4] = c2.top + c2.height / 2
  // 线条在方块下面
  line.globalCompositeOperation = 'destination-over'
  return line
}

// 生成一个带文字的卡片
export function makeTextSquare(
  text: string,
  {
    x,
    // mt,  // marginTop 离上一个卡片的距离
    y,
    depth = 1,
    w = CARD_CONFIG.width,
    h = CARD_CONFIG.height,
    bgColor = CARD_CONFIG.bgColor[depth - 1],
    textColor = CARD_CONFIG.textColor,
    isMain,
    isEnd,
  }: { x: number; y: number; depth?: number; text?: string; tag?: string; link?: string; process?: number; children?: any[] }
) {
  const Square = new fabric.Rect({
    fill: bgColor,
    width: w,
    height: h,
    originX: "center",
    originY: "center",
    rx: 4,
    ry: 4,
    shadow: "rgba(0,0,0,0.3) 2px 2px 4px",
    hasControls: false, // 关掉拖拉控制
  });
  const Text = new fabric.Text(text, {
    fontSize: 15,
    fill: textColor,
    originX: "center",
    originY: "center",
    fontFamily:
      " Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif",
    fontWeight: "500",
  });
  const group = new fabric.Group([Square, Text], {
    left: x,
    top: y,
    lockMovementX: true,
    lockMovementY: true, // 禁止xy轴拖动
  });
  group.hasControls = false;

  return group;
}

// 生成一个带文字的卡片
// export function makeTextSquare(
//   text: string,
//   {
//     x,
//     // mt,  // marginTop 离上一个卡片的距离
//     y,
//     depth = 1,
//     w = CARD_CONFIG.width,
//     h = CARD_CONFIG.height,
//     bgColor = CARD_CONFIG.bgColor[depth - 1],
//     textColor = CARD_CONFIG.textColor,
//     isMain,
//     isEnd
//   }: any
// ) {
//   const Square = new fabric.Rect({
//     fill: bgColor,
//     width: w,
//     height: h,
//     originX: 'center',
//     originY: 'center',
//     rx: 4,
//     ry: 4,
//     shadow: 'rgba(0,0,0,0.3) 2px 2px 4px',
//     hasControls: false // 关掉拖拉控制
//   })
//   const Text = new fabric.Text(text, {
//     fontSize: 15,
//     fill: textColor,
//     originX: 'center',
//     originY: 'center',
//     fontFamily: " Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif",
//     fontWeight: '500'
//   })
//   const group = new fabric.Group([Square, Text], {
//     left: x,
//     top: y,
//     lockMovementX: true,
//     lockMovementY: true // 禁止xy轴拖动
//   })
//   group.hasControls = false

//   return group
// }

// 控制主轴曲线来回扭
let lineDirection = 'left'

// 生成主轴卡片之间的连接线（竖向的）
export function makeLine(c1: fabric.Group, c2: fabric.Group) {
  const line = new fabric.Path('M 65 0 Q 100, 100, 200, 0', {
    fill: '',
    stroke: CARD_CONFIG.lineColor,
    strokeWidth: 3,
    objectCaching: false
  })
  line.path[0][1] = c1.left + CARD_CONFIG.width / 2
  line.path[0][2] = c1.top + CARD_CONFIG.height / 2

  line.path[1][1] = lineDirection === 'left' ? c1.left - CARD_CONFIG.width / 3 : c1.left + CARD_CONFIG.width
  lineDirection = lineDirection === 'left' ? 'right' : 'left'
  line.path[1][2] = c1.top + (c2.top - c1.top) / 2

  line.path[1][3] = c2.left + CARD_CONFIG.width / 2
  line.path[1][4] = c2.top + CARD_CONFIG.height / 2
  line.globalCompositeOperation = 'destination-over'
  return line
}

export function makeTag(tag: string, instance: fabric.Group, isleft?: boolean) {
  const Text = new fabric.Text(`${tag}`, {
    fontSize: 14,
    fill: '#fff',
    originX: 'center',
    originY: 'center',
    fontFamily: " Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif",
    fontWeight: '500'
  })
  const group = new fabric.Group([Text], {
    left: isleft ? instance.left - 5 : instance.left + instance.width - 6,
    top: instance.top - 4,
    lockMovementX: true,
    lockMovementY: true, // 禁止xy轴拖动
    globalCompositeOperation: 'source-over'
  })
  group.hasControls = false
  return group
}

export default function drawRoadmap(id: string, dataMap: any, isShowTag = true) {
  const canvasOptions = {
    containerClass: 'roadmap-canvas',
    selection: false,
    // interactive: false,
    // enableRetinaScaling: false,
    hoverCursor: 'pointer'
  }
  // canvas = new fabric.Canvas(id, canvasOptions)
  // canvas.add(
  //   makeTextSquare('VsCode', { x: 111, y: 222 })
  // )
  if (canvas) {
    canvas.clear()
    if ((window as any).__GO_TO_MARKDOWN__) {
      canvas = new fabric.Canvas(id, canvasOptions)
      ;(window as any).__GO_TO_MARKDOWN__ = false
    }
  } else {
    canvas = new fabric.Canvas(id, canvasOptions)
  }
  let prevP: fabric.Group | null = null // 记录上一个节点
  let lines: Array<fabric.Line | fabric.Path> = []
  let arr: Array<fabric.Group> = []
  dataMap.forEach((target: IItem) => {
    let p: fabric.Group | null = null
    if (target.process === 1) {
      p = makeTextSquare(target.text, { x: target.x, y: target.y })
    } else {
      p = makeTextSquare(target.text, { x: target.x, y: target.y })
    }
    
    arr.push(p);
    if (target.tag && isShowTag) {
      const tag = makeTag(target.tag, p)
      arr.push(tag)
    }
    if (prevP) {
      // 两个卡片连线
      lines.push(makeLine(prevP, p))
    }
    prevP = p
    // 递归遍历children,和主轴相连
    function recursiveChildren(parentInstance: fabric.Group, children: Array<Array<IItem>>, direction: string, depth: number) {
      if (!children) return
      children.forEach((child: IItem, index: number) => {
        const len = children.length
        const isEven = length % 2 === 0
        let childY = child.y || parentInstance.top - (Math.floor(length / 2) - index) * (CARD_CONFIG.height + CARD_CONFIG.subCardMargin)
        childY += isEven ? CARD_CONFIG.height / 2 : 0
        const c = makeTextSquare(child.text, { ...child, y: childY, depth })
        const line: fabric.Path = direction === 'left' ? makeSubLine(c, parentInstance) : makeSubLine(parentInstance, c)
        lines.push(line)
        if (child.tag && isShowTag) {
          const tag = makeTag(child.tag, c, direction === 'left')
          arr.push(tag)
        }
        if (child.children) {
          recursiveChildren(c, child.children, direction, depth + 1)
        }
      })
    }
    // 绘制左右子节点
    if (target.children) {
      const leftChildren = target.children[0] // 左节点
      const rightChildren = target.children[1] // 右节点
      recursiveChildren(p, leftChildren, 'left', 2)
      recursiveChildren(p, rightChildren, 'right', 2)
    }
  })
  arr.map(item => canvas.add(item))
  lines.map(item => canvas.add(item))
  return canvas
}
