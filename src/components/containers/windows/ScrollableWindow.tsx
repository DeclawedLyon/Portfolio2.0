import React, { ReactNode } from 'react'

interface IScrollableWindowProps {
  children: ReactNode;
}

const ScrollableWindow = ({
  children
}: IScrollableWindowProps) => {
  return (
    <div className={`relative flex flex-col border-2 border-black w-full h-full overflow-y-scroll overflow-x-hidden`}>
      {children}
    </div>
  )
}

export default ScrollableWindow