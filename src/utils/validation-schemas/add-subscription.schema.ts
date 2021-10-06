import { SchemaOf } from 'yup';
import * as Yup from 'yup';

import { ISubscription } from 'interfaces/subscription.interface';
import { currencyRegExp } from 'utils/regexp/currency-regex';
import { digitsRegExp } from 'utils/regexp/digits-regexp';

const AddSubscriptionSchema: SchemaOf<Omit<ISubscription, 'uid'>> = Yup.object({
  color: Yup.string()
    .required('Color is required')
    .defined(),
  service: Yup.string()
    .min(2, 'Service is too short')
    .required('Service is required')
    .defined(),
  price: Yup.string()
    .matches(currencyRegExp, "Must be only digits")
    .required('Price is required')
    .defined(),
  paymentDay: Yup.string()
    .matches(digitsRegExp, "Must be only digits")
    .required('Payment day is required')
    .defined(),
}).defined();

export default AddSubscriptionSchema;
