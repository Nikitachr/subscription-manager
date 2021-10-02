import { FC } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import { useField } from 'formik';
import { ReactComponent as ColorIco } from 'assets/icons/color.svg'

interface IColorFieldProps {
  name: string;
}

const ColorField: FC<IBaseComponent & IColorFieldProps> = ({ className = '', ...props }) => {
  const [field] = useField(props);
  return (
    <div className={`${className} relative`}>
      <input className="w-8 h-8 lg:w-12 lg:h-12 opacity-0 rounded-3xl" type='color' {...field} />
      <div style={{ backgroundColor: field.value }} className="w-8 h-8 lg:w-12 lg:h-12 absolute bg-black top-0 left-0 rounded-3xl pointer-events-none flex items-center justify-center">
        <ColorIco/>
      </div>
    </div>
  );
};


export default ColorField;
