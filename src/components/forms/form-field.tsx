import { FC, useRef } from 'react'
import { useField } from 'formik'
import { useFocus } from 'hooks/use-focus'
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
  const ref = useRef<HTMLInputElement>(null)
  const focus = useFocus(ref)
  return (
    <div className={`${className} grid gap-y-1`}>
      <label {...props}
             className='text-text-second'>{label}</label>
      <input ref={ref} {...props} {...field}
             className={`bg-transparent rounded-md border outline-none px-2 py-1 
             ${focus ? 'border-primary' : ''}
             ${(meta.touched && meta.error) ? 'border-error' : ''}
             ${!focus && !(meta.touched && meta.error) ? 'border-white-line' : ''}
             `} />
      {meta.touched && meta.error ? (
        <div className='text-error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

export default FormField
