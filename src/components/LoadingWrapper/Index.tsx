import React, { useRef, useState, useEffect, Fragment } from 'react'
import { Prompt } from 'react-router-dom'
import Fireworks from './effects/Fireworks.jsx'
const LoadingWrapper = () => {

    const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    let fireworksWrapper = useRef()
    let fireworks = useRef()

    let timer: number | undefined
    const resize = function () {
        timer && clearTimeout(timer)

        timer = setTimeout(() => {
            if (width !== fireworksWrapper.current.offsetWidth || height !== fireworksWrapper.current.offsetHeight) {
                setWidth(fireworksWrapper.current.offsetWidth)
                setHeight(fireworksWrapper.current.offsetHeight)
            }
        }, 200);
    }
    // 初始化宽高
    useEffect(() => {
        setWidth(fireworksWrapper.current.offsetWidth)
        setHeight(fireworksWrapper.current.offsetHeight)

    }, [fireworksWrapper])

    const startHandler = () => {
        fireworks.current.start()
    }
    const stopHandler = () => {
        fireworks.current.stop()
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            resize()
        })
    }, [])

    useEffect(() => {
        fireworks.current.stop()
        fireworks.current.start()
        return () => {
            // fireworks.current.stop()
        }
    }, [])

    return (
        <Fragment>
            {/* <button type="button" onClick={startHandler} >
                    Start
          </button>

                <button type="button" onClick={stopHandler} >
                    Stop
          </button> */}

            {/* Fireworks Layer */}
            <div ref={fireworksWrapper} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgb(10, 12, 22)',
            }}>
                <Fireworks ref={fireworks} width={width} height={height} />
            </div>
            {/* <Prompt
                message={(location, action) => {
                    if (action === 'POP') {
                        console.log("Backing up...")
                    }

                    return location.pathname.startsWith("/app")
                        ? true
                        : `Are you sure you want to go to ${location.pathname}?`
                }}
            /> */}
        </Fragment>
    );
}
export default LoadingWrapper