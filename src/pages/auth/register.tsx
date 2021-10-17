import { FC } from 'react'
import { RegisterForm } from 'components/forms/register-form'
import { Link } from "react-router-dom";
import { useActions } from 'hooks/use-actions'
import { IRegister } from 'interfaces/register.interface'
import { IBaseComponent } from 'interfaces/base-component.interface'

const Register: FC<IBaseComponent> = ({ className = '' }) => {
  const { registerUserAction } = useActions()

  const handleRegister = (value: IRegister): void => {
    registerUserAction(value);
  }

  return (
    <div className={`${className} `}>
      <h1 className='text-4xl font-bold mb-12'>Create an account</h1>
      <RegisterForm onRegister={handleRegister}/>
      <div className="mt-4">
        <span className="mr-1 text-text-second text-sm">Already have an account?</span>
        <Link className="text-primary text-sm" to="/auth/login">Sign in</Link>
      </div>
    </div>
  )
}

export default Register
