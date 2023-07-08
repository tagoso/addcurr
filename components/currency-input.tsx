import React from "react";
import CurrencyInput from "react-currency-input-field";

interface InputCurrencyProps {
  onInputChange: (v: number | string | undefined) => void;
  id: string;
  name: string;
  type: string;
  prefix: string;
  placeholder: string;
  decimalSeparator: string;
  value: any;
  defaultValue: string | undefined | number;
  baseCurrency: () => void;
}

const InputCurrency: React.FC<InputCurrencyProps> = ({
  onInputChange,
  id,
  name,
  type,
  prefix,
  value,
  defaultValue,
  decimalSeparator,
  placeholder,
}) => {
  return (
    <>
      <CurrencyInput
        id={id}
        name={name}
        type={type}
        prefix={prefix}
        value={value}
        defaultValue={defaultValue}
        maxLength={9}
        placeholder={placeholder}
        decimalSeparator={decimalSeparator}
        decimalsLimit={2}
        decimalScale={!["JPY", "INR", "THB", "RUB", "PHP", "NGN"].includes(name) ? 2 : 0}
        autoComplete="off"
        className="my-1 w-full flex-wrap bg-slate-50 text-right
        text-lg placeholder:text-slate-400 dark:border-gray-700 dark:bg-gray-800 md:text-2xl"
        onValueChange={(v) => {
          // if input ends with ".", pass the value as it is
          if (v && v.endsWith(".")) {
            onInputChange(v);
          } else {
            // convert value to number
            onInputChange(v ? parseFloat(v) : undefined);
          }
        }}
      />
    </>
  );
};

export default InputCurrency;
