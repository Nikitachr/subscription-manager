import { FC } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from 'pages/auth/components/login-form'
import { ILogin } from 'interfaces/login.interface'
import { useActions } from 'hooks/use-actions'
import { IBaseComponent } from 'interfaces/base-component.interface'

const Login: FC<IBaseComponent> = ({ className = '' }) => {
  const { loginUserAction } = useActions();

  const handleLogin = (value: ILogin): void => {
    loginUserAction(value);
  }

  return (
    <div className={`${className} `}>
      <h1 className='text-4xl font-bold mb-12'>Sign in</h1>
      <LoginForm onLogin={handleLogin}/>
      <div className='mt-4'>
        <span className='mr-1 text-text-second text-sm'>Have no account?</span>
        <Link className='text-primary text-sm' to='/auth'>Sign up</Link>
      </div>
    </div>
  )
}

export default Login
