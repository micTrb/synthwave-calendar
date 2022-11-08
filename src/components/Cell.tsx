import React from 'react'
import clsx from 'clsx';

interface Props extends React.PropsWithChildren {
    onClick?: () => void
    className?: string
}

const Cell:React.FC<Props> = ({onClick, className, children}) => {
  return (
    <div 
      onClick={onClick}
      className={clsx(
        `w-full h-20 p-auto`,        
        className)}>
      {children}
    </div>
  )
}

export default Cell
