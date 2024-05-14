import React, { ReactElement } from 'react'

interface IAppLayout {
  children?: ReactElement | ReactElement[]
}

const AppLayout = ({
  children
}: IAppLayout) => {


  return (
    <>
      {children}
    </>
  )
}

export default AppLayout