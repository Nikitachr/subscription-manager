import { FC } from 'react';
import { Form, withFormik } from 'formik';

import { IBaseComponent } from 'interfaces/base-component.interface';
import Row from 'components/utils/row';
import FormField from 'components/forms/form-field';
import { ISubscription } from 'interfaces/subscription.interface';
import ColorField from 'components/forms/color-field';
import AddSubscriptionSchema from 'utils/validation-schemas/add-subscription.schema';
import { ReactComponent as AcceptIco } from 'assets/icons/accept.svg';
import { ReactComponent as CancelIco } from 'assets/icons/cancel.svg';
import { v4 as uuidv4 } from 'uuid';

interface IAddSubscriptionProps {
  onCloseClick?: () => void;
  onAddSubscription: (value: ISubscription) => void;
}

const AddSubscriptionRowUI: FC<IBaseComponent & IAddSubscriptionProps> = ({ className = '', onCloseClick }) => {
  return (
    <div className={`${className} p-4`}>
      <Form>
        <Row
          firstCol={<div className='w-full'><ColorField name='color' /></div>}
          secondCol={<div className="px-1"><FormField className='w-full' name={'service'} /></div>}
          thirdCol={<div className='w-full px-1'><FormField className='w-full' name={'price'} /></div>}
          fourthCol={<div><FormField className='w-full px-1' name={'paymentDay'} /></div>}
          fifthCol={
            <div className="flex items-center gap-2">
              <button type='submit'><AcceptIco className="fill-current text-text-main hover:text-green-400 transition duration-200"/></button>
              <button onClick={onCloseClick} type='button'><CancelIco className="fill-current text-text-main hover:text-red-500 transition duration-200"/></button>
            </div>
          }
        />
      </Form>
    </div>
  );
};

export const AddSubscriptionRow = withFormik<IBaseComponent & IAddSubscriptionProps, Omit<ISubscription, 'uid'>>({
  mapPropsToValues: (props) => {
    return {
      service: '',
      color: '',
      price: '',
      paymentDay: '',
    };
  },

  validationSchema: AddSubscriptionSchema,

  handleSubmit: (value, { props }) => {
    props.onAddSubscription({ ...value, uid: uuidv4() })
  },

})(AddSubscriptionRowUI);
