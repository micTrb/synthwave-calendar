import React from 'react'
import clsx from 'clsx';

interface Props extends React.PropsWithChildren {
    className?: string
}

const Cell:React.FC<Props> = ({className, children}) => {
  return (
    <div className={clsx(`h-12 flex items-center 
    justify-center border-r`,className)}>
      {children}
    </div>
  )
}

export default Cell
