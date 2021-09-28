import * as Yup from 'yup'
import { SchemaOf } from 'yup'
import { IRegister } from 'interfaces/register.interface'

const SignupSchema: SchemaOf<IRegister> = Yup.object({
  username: Yup.string()
    .min(4, 'Username is too short')
    .max(18, 'Username is too long')
    .required('Username is required')
    .defined(),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .defined(),
  password: Yup.string()
    .min(8, 'Password is too short')
    .max(18, 'Password is too long')
    .required('Required')
    .defined(),
}).defined();

export default SignupSchema
