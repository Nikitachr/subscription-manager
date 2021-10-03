import { ChangeEvent, useEffect, useState } from "react";

export const useNumberInput = (
  initialValue: number | string,
  onChange?: (value: number | null) => void
): any => {
  const [value, setValue] = useState<string | number>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    if (newValue.match(/^[0-9]+$|^$/)) {
      setValue(newValue);
    }
  };

  useEffect(() => {
    onChange && onChange(value ? +value : null);
  }, [value]);

  return {
    value,
    onChange: handleChange,
  };
};
