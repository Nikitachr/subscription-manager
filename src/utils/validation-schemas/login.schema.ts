import * as Yup from 'yup'
import { SchemaOf } from 'yup'
import { ILogin } from 'interfaces/login.interface'

const LoginSchema: SchemaOf<ILogin> = Yup.object({
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

export default LoginSchema;
