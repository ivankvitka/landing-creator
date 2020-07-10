import React, { ChangeEvent, FC } from 'react';

interface SelectProps {
  propertyName: string;
  values: string[];
  selectedValue: string | undefined;
  onSelectChange: (e: ChangeEvent<HTMLSelectElement>, propertyName: string) => void;
}

const Select: FC<SelectProps> = ({ propertyName, values, selectedValue, onSelectChange }) => {
  return (
    <select value={selectedValue} name={propertyName} onChange={e => onSelectChange(e, propertyName || '')}>
      {values.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
