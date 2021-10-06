import { FC } from 'react';
import { Form, withFormik } from 'formik';

import { IBaseComponent } from 'interfaces/base-component.interface';
import { ReactComponent as ExitIco } from 'assets/icons/exit.svg';
import ColorField from 'components/forms/color-field';
import FormField from 'components/forms/form-field';
import { ISubscription } from 'interfaces/subscription.interface';
import AddSubscriptionSchema from 'utils/validation-schemas/add-subscription.schema';
import { v4 as uuidv4 } from 'uuid';

interface IEditSubscriptionProps {
  subscription: ISubscription;
  onClose: () => void;
  onSubmit: (value: ISubscription) => void;
}

const EditSubscriptionUI: FC<IBaseComponent & IEditSubscriptionProps> = ({ className = '', onClose }) => {
  return (
    <div
      className={`${className} text-main dark:text-white dark:bg-text transition duration-500 w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white p-5 rounded-2xl`}>
      <div className='w-full flex justify-between border-b pb-4'>
        <h2 className='font-semibold'>Edit subscription</h2>
        <button onClick={onClose}>
          <ExitIco className='fill-current text-text dark:text-white transition duration-500' />
        </button>
      </div>
      <Form className='grid gap-y-3 pt-4'>
        <div className='flex items-center gap-3'>
          <span className='text-text-main dark:text-white transition duratuion-500'>Color</span>
          <ColorField name='color' />
        </div>
        <FormField name='service' label='Service name' />
        <FormField name='price' label='Price (USD/mont)' />
        <FormField name='paymentDay' label='Payment day' />
        <button type='submit' className='mt-4 w-full bg-primary rounded-md py-2 text-white font-bold text-sm'>Save
        </button>
      </Form>
    </div>
  );
};

export const EditSubscription = withFormik<IBaseComponent & IEditSubscriptionProps, ISubscription>({
  mapPropsToValues: ({ subscription }) => {
    return { ...subscription };
  },

  validationSchema: AddSubscriptionSchema,

  handleSubmit: (value, { props }) => {
    props.onSubmit(value);
  },

})(EditSubscriptionUI);
