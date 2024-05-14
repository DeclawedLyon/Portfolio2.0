import React, { ReactElement } from 'react'
import NavBar from '../nav_components/NavBar'

interface IAppLayout {
  children?: ReactElement | ReactElement[]
}

const AppLayout = ({
  children
}: IAppLayout) => {


  return (
    <div className='relative'>
      <NavBar />
      {children}
    </div>
  )
}

export default AppLayout