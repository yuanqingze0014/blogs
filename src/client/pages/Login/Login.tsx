import React, { useEffect, useState } from 'react'
import {  useHistory } from "react-router-dom"

const LoginPage: React.FC = () => {
  const history = useHistory()
  const [count,setCount] = useState(3)
  useEffect(() => {
    const timer = setTimeout(()=>{
      history.push('/working')
      let _count = count
      setCount( --_count)
    },3000)
    return () => {
      setCount(3)
      clearTimeout(timer)
    }
  },[])
  return <div>LoginPage {count}秒后登录</div>
}
export default LoginPage
