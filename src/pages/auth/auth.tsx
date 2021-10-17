import { FC, useEffect, useRef } from 'react';
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import right from '../../assets/imgs/Right.png'
import Register from 'pages/auth/register'
import Login from 'pages/auth/login'
import { IBaseComponent } from 'interfaces/base-component.interface'
import useTheme from 'hooks/use-theme';

const Auth: FC<IBaseComponent> = ({ className = '' }) => {
  const [ theme, setTheme ] = useTheme();
  const { path, url } = useRouteMatch()
  const location = useLocation()

  useEffect(() => {
    setTheme('light');
  }, [])

  return (
    <div className={`${className} w-screen h-screen bg-white-bg flex`}>
      <div
        className='w-full md:w-1/3 flex flex-col items-center justify-center overflow-hidden'>

        <TransitionGroup className='w-4/6 relative'>
          <CSSTransition key={location.key} classNames='slider'
                         timeout={600} unmountOnExit={true} mountOnEnter={true}>
            <Switch location={location}>
              <Route exact path={path}>
                <Register
                  className='w-full absolute transform -translate-y-2/4' />
              </Route>
              <Route path='/auth/login'>
                <Login className='w-full absolute transform -translate-y-2/4' />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <img className='hidden md:block w-2/3 object-none' src={right}
           alt='right' />
    </div>
  )
}


export default Auth
