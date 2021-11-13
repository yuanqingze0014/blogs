import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Loading from '@components/Loadings'
// import AppContextProvider from './context/appContextProvider';
// import AppProvider from './context/appContextProvider'
import { LOADING_TIP } from '@constants'

import "./assets/css/normalize.min.css";
import '@ant-design/compatible/assets/index.css'
import 'antd/dist/antd.css' //全局引用antd的样式
import "./index.css";

const { lazy, Suspense } = React
const App = lazy(() => import('./pages/App'))

ReactDOM.render(
  <Suspense fallback={<Loading height="100vh" tip={LOADING_TIP} />}>
    {/* <AppProvider> */}
      {/* <AppContextProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </AppContextProvider> */}
    {/* </AppProvider> */}
  </Suspense>,
  document.getElementById('root')
)
