import React from 'react'
import ReactDOM from 'react-dom'
// import AppContextProvider from './context/appContextProvider';
// import AppProvider from './context/appContextProvider'
import App from './pages/App'

import './assets/css/normalize.min.css'
import '@ant-design/compatible/assets/index.css'
import 'antd/dist/antd.css' //全局引用antd的样式
import './index.css'

// const { lazy } = React
// const App = lazy(() => import('./pages/App'))

ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(
//   <Suspense fallback={<Loading height="100vh" tip={LOADING_TIP} />}>
//     {/* <AppProvider> */}
//     {/* <AppContextProvider> */}
//     <App />
//     {/* </AppContextProvider> */}
//     {/* </AppProvider> */}
//   </Suspense>,
//   document.getElementById('root')
// )
