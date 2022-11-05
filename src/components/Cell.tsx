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
        `h-10 w-10 flex items-center justify-center select-none transition-colors`,
        //  
        
        className)}>
      {children}
    </div>
  )
}

export default Cell
