import React from 'react'
import clsx from 'clsx';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

interface Props extends React.PropsWithChildren {
    onClick?: () => void,
    className?: string,
    date: Date
}

const Cell:React.FC<Props> = ({onClick, className, children, date}) => {
  
  const reminders = useSelector((state: RootState) => state.reminders);

  console.log(date);
  
  return (
    <div 
      onClick={onClick}
      className={clsx(
        `w-full h-20 p-auto`,        
        className)}>
      {children}
      <p className="text-white">Reminder</p>
    </div>
  )
}

export default Cell
