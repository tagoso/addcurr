import React from "react";
import CurrencyInput from "react-currency-input-field";

interface InputCurrencyProps {
  onInputChange: (value: number | undefined) => void;
  id: string;
  name: string;
  type: string;
  prefix: string;
  placeholder: string;
  decimalSeparator: string;
  groupSeparator: string;
  value: number | undefined;
  baseCurrency: () => void;
}

const InputCurrency: React.FC<InputCurrencyProps> = ({
  onInputChange,
  id,
  name,
  type,
  prefix,
  value,
  placeholder,
  decimalSeparator,
  groupSeparator,
}) => {
  return (
    <>
      <CurrencyInput
        id={id}
        name={name}
        type={type}
        prefix={prefix}
        value={value}
        maxLength={9}
        placeholder={placeholder}
        decimalSeparator={decimalSeparator}
        groupSeparator={groupSeparator}
        decimalsLimit={2}
        decimalScale={!["JPY", "INR", "THB", "RUB", "PHP", "NGN"].includes(name) ? 2 : 0}
        autoComplete="off"
        className="my-1 w-full flex-wrap bg-slate-50 text-right
        text-lg placeholder:text-slate-400 dark:border-gray-700 dark:bg-gray-800 md:text-2xl"
        onValueChange={(value, name) => {
          // convert value to number
          onInputChange(value ? parseFloat(value) : undefined);
        }}
      />
    </>
  );
};

export default InputCurrency;
