import { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

const Handle = styled.div`
  position: absolute;
  background: #fff;
  border-radius: 10px;
  --val-sm: 4px;
  --val-lg: 56px;
  z-index: 10;

  ${({ dir }) => css`
    ${dir}: 0;
  `}

  ${({ dir }) =>
    ['top', 'bottom'].includes(dir) &&
    css`
      height: var(--val-sm);
      width: var(--val-lg);
      left: 50%;
      transform: translateX(-50%);
      cursor: ns-resize;
    `}

  ${({ dir }) =>
    ['left', 'right'].includes(dir) &&
    css`
      height: var(--val-lg);
      width: var(--val-sm);
      top: 50%;
      transform: translateY(-50%);
      cursor: ew-resize;
    `}
`

const Resizeable = ({ directions, children, initialHeight }) => {
  const wrapper = useRef(null)

  const initResize = (e) => {
    window.addEventListener('mousemove', startResize, false)
    window.addEventListener('mouseup', stopResize, false)
  }

  const startResize = (e) => {
    if (['bottom', 'top'].includes(directions)) {
      wrapper.current.style.width =
        e.clientX - wrapper.current.offsetLeft + 'px'
    } else {
      wrapper.current.style.height =
        e.clientY - wrapper.current.offsetTop + 'px'
    }
  }

  const stopResize = (e) => {
    window.removeEventListener('mousemove', startResize, false)
    window.removeEventListener('mouseup', stopResize, false)
  }

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div
      ref={wrapper}
      style={{ position: 'relative', height: `${initialHeight}px` }}
    >
      {directions.map((direction) => {
        return <Handle dir={direction} onMouseDown={initResize} />
      })}
      {children}
    </div>
  )
}

export default Resizeable
