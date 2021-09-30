import React, { FC, memo, useEffect } from 'react'
import { IBaseComponent } from 'interfaces/base-component.interface'
import { IAlert } from 'interfaces/alert.interface'
import close from 'assets/icons/close.svg'

export interface IAlertProps {
  alert: IAlert;
  onClose: () => void;
}

const Alert: FC<IBaseComponent & IAlertProps> = ({ className, alert, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, alert.delay)
    return (): void => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`${className} py-2 px-4 bg-error rounded-xl flex justify-between w-64`}>
      <p className='text-sm font-bold text-white'>{alert.message}</p>
      <img onClick={onClose} className='cursor-pointer break-words w-3 h-3 mt-1'
           src={close} alt='close' />
    </div>
  )
}



export default Alert;
