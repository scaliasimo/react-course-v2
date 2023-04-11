import React, { useState, useMemo, RefObject } from "react"

function useMousePosition(ref: RefObject<HTMLDivElement>): [
  number,
  number,
  {
    onMouseMove: (event: React.MouseEvent) => void
    onMouseLeave: (event: React.MouseEvent) => void
  }
] {
  const [centerX, setCenterX] = useState(0)
  const [centerY, setCenterY] = useState(0)

  const bind = useMemo(
    () => ({
      onMouseMove: (event: React.MouseEvent) => {
        setCenterX(
          event.nativeEvent.offsetX -
            (ref.current?.getBoundingClientRect().width ?? 0) / 2
        )
        setCenterY(
          event.nativeEvent.offsetY -
            (ref.current?.getBoundingClientRect().height ?? 0) / 2
        )
      },
      onMouseLeave: () => {
        setCenterX(0)
        setCenterY(0)
      },
    }),
    [ref]
  )

  return [centerX, centerY, bind]
}

export default useMousePosition
