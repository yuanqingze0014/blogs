import React, { useState, useEffect, useRef, useMemo } from 'react'
import { fabric } from 'fabric'

import drawRoadmap, { makeTextSquare } from './drawRoadmap'
import { dataMap } from './dataMap'

export default function TreeMap() {
  const canvasRef: React.MutableRefObject<null> = useRef(null)
  useEffect(() => {
    if (canvasRef.current) {
      drawRoadmap(`roadmapCanvas`, dataMap)
    }
  }, [canvasRef.current])

  return (
    <div className="container" ref={canvasRef}>
      <canvas
        id={`roadmapCanvas`}
        height={(canvasRef.current && (canvasRef.current as HTMLDivElement).offsetHeight) || 500}
        width={(canvasRef.current && (canvasRef.current as HTMLDivElement).offsetWidth) || 1000}
      />
    </div>
  )
}
