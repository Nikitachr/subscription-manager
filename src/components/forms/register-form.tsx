import { FC } from 'react'
import { Form, FormikProps, withFormik } from 'formik'
import { IRegister } from 'interfaces/register.interface'
import SignupSchema from 'utils/validation-schemas/signup.schema'
import FormField from 'components/forms/form-field'

export interface IRegisterFormProps {
  onRegister: (registerData: IRegister) => void;
}

const RegisterFormUI: FC<IRegisterFormProps & FormikProps<IRegister>> = ({ onRegister }) => {
  return (
    <Form className='grid gap-y-4'>
      <FormField name="username" label='Username'/>
      <FormField name="email" label='Email' type="email"/>
      <FormField name="password" label='Password' type="password"/>
      <button type="submit" className="mt-4 bg-primary rounded-md py-2 text-white font-bold text-sm">Sign up</button>
    </Form>
  );
};

export const RegisterForm = withFormik<IRegisterFormProps, IRegister>({
  mapPropsToValues: (props) => {
    return {
      username: '',
      email: '',
      password: '',
    };
  },

  validationSchema: SignupSchema,

  handleSubmit: (values, { props}) => {
    props.onRegister(values);
  }
})(RegisterFormUI);
