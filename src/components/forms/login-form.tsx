import { FC } from 'react'
import { Form, FormikProps, withFormik } from 'formik'
import FormField from 'components/forms/form-field'
import LoginSchema from 'utils/validation-schemas/login.schema'
import { ILogin } from 'interfaces/login.interface'

export interface ILoginFormProps {
  onLogin: (value: ILogin) => void;
}

const LoginFormUI: FC<FormikProps<ILogin>> = () => {
  return (
    <Form className='grid gap-y-4'>
      <FormField name="email" label='Email' type="email"/>
      <FormField name="password" label='Password' type="password"/>
      <button type="submit" className="mt-4 bg-primary rounded-md py-2 text-white font-bold text-sm">Sign in</button>
    </Form>
  );
};

export const LoginForm = withFormik<ILoginFormProps, ILogin>({
  mapPropsToValues: () => {
    return {
      email: '',
      password: ''
    };
  },

  validationSchema: LoginSchema,

  handleSubmit: (values, { props }) => {
    props.onLogin(values);
  }
})(LoginFormUI);

export default LoginForm;

