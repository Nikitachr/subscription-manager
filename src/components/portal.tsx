import { useState, useEffect, FC, ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { IBaseComponent } from 'interfaces/base-component.interface'

interface PortalProps {
  id: string;
}

const Portal: FC<IBaseComponent & PortalProps> = ({ children, id }) => {
  const [container] = useState(() => document.createElement('div'))

  useEffect(() => {

    const host = document.getElementById(id);

     host ? host.appendChild(container) : document.body.appendChild(container);
    return () => {
      host ? host.removeChild(container) : document.body.removeChild(container);
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}

export default Portal
