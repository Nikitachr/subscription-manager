import { FC } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import { useNumberInput } from 'hooks/use-number-input';

interface IProfitInput {
  initialValue: number;
  onEnter: (value: number) => void;
}

const ProfitInput: FC<IBaseComponent & IProfitInput> = ({ className = '', initialValue, onEnter }) => {
  const numberInput = useNumberInput(initialValue);

  const onKeyPress = (e: KeyboardEvent): void => {
    if(e.keyCode == 13){
      onEnter(numberInput.value);
    }
  }

  return (
    <div className={`${className} `}>
      <input {...numberInput} onKeyDown={onKeyPress} type='text' className='bg-transparent dark:bg-black-line dark:text-white transition duration-500 focus:border-primary rounded-md w-full border outline-none px-2 py-1 border-white-line'  />
    </div>
  );
};

export default ProfitInput;
