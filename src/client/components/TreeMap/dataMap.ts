import { c } from './drawRoadmap'
export const dataMap = [
  {
    text: '准备开始',
    x: 400,
    y: 0,
    process: 1
  },
  {
    text: '互联网',
    x: 400,
    y: 100,
    tag: 'recommand',
    link: '/how-does-the-internet-work',
    process: 2,
    children: [
      [c('1', 100), c('2', 100)],
      [c('3', 700), c('4', 700)]
    ]
  },
  {
    text: '浏览器',
    x: 400,
    y: 280,
    process: 2,
    link: '/how-does-the-browser-work',
    children: [
      [
        c('浏览器如何运行？', 160, 160),
        c('浏览器差异/兼容性', 160, 160, {}, [c('Chrome', 0, 120), c('Safari', 0, 120), c('Firefox', 0, 120), c('Android Browser', 0, 120), c('iOS Safari', 0, 120)])
      ],
      [c('Headless Browser', 700, 200, { bgColor: '#CCCCCC' }), c('WebView', 700, 200, { bgColor: '#CCCCCC' })]
    ]
  }
]
