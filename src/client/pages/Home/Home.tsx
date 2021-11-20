import React, { useState, useEffect, useContext, useRef, useMemo } from 'react'
import Button from '@material-ui/core/Button'
import TreeMap from '@components/TreeMap'
import UpLoadImage from "@components/UpLoadImage/UpLoadImage"
import { useRecoilState } from 'recoil'
import { appStateAtom } from '@recoil/atoms/appAtoms'
import { appStateSelector } from '@recoil/selector/appSelector'
import { IappContext } from '@models/appModels'

import './Home.css'
export default function Home() {
  const [appInfo, setAppInfoAction] = useRecoilState(appStateAtom)
  const [state, setState] = useState<{
    x: number
    y: number
  }>({
    x: 0,
    y: 0
  })
  const renderTreeMap = useMemo(() => {
    return <TreeMap />
  }, [])
  return (
    <div className="home">
      <div className="home-container">{renderTreeMap}</div>
      <Button variant="text">你好，世界</Button>
      <Button
        variant="contained"
        onClick={() => {
          setAppInfoAction({ ...appInfo, defaultTheme: 'light' })
        }}
      >
        你好，世界
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setAppInfoAction({ ...appInfo, defaultTheme: 'dark' })
        }}
      >
        你好，世界
      </Button>
      <div style={{ background: appInfo.themes[appInfo.defaultTheme].background, color: appInfo.themes[appInfo.defaultTheme].foreground }}>hello</div>
      <UpLoadImage src="https://picture-1302857231.cos.ap-beijing.myqcloud.com/2021-11-18/0.png" />
    </div>
  )
}
