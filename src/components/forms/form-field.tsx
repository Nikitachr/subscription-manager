import { FC } from 'react'
import { useField } from 'formik'

import { IBaseComponent } from 'interfaces/base-component.interface'

interface IFormFieldProps {
  name: string;
  type?: string;
  label?: string;
}

const FormField: FC<IBaseComponent & IFormFieldProps> = ({
                                          className = '',
                                          label,
                                          ...props
                                        }) => {
  const [field, meta] = useField(props)
  return (
    <div className={`${className} grid gap-y-1`}>
      {label ? <label {...props} className='text-text-second'>{label}</label> : null}
      <input {...props} {...field}
             className={`bg-transparent focus:border-primary rounded-md w-full border outline-none px-2 py-1 'border-white-line' 
             ${(meta.touched && meta.error) ? 'border-error' : ''}
             `} />
      {meta.touched && meta.error ? (
        <div className='text-error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

export default FormField
