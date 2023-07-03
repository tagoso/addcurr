import React from "react";
import CurrencyInput from "react-currency-input-field";

interface InputCurrencyProps {
  onInputChange: (value: number | undefined) => void;
  id: string;
  name: string;
  type: string;
  prefix: string;
  placeholder: string;
  value: number | undefined;
  baseCurrency: () => void;
}

const InputCurrency: React.FC<InputCurrencyProps> = ({ onInputChange, id, name, type, prefix, value, placeholder }) => {
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
        decimalsLimit={2}
        decimalScale={!["JPY", "INR", "THB", "RUB", "PHP", "NGN"].includes(name) ? 2 : 0}
        autoComplete="off"
        className="w-full text-lg md:text-2xl text-right my-1
        flex-wrap bg-slate-50 dark:bg-slate-50 placeholder:text-slate-400"
        onValueChange={(value, name) => {
          console.log(`New value: ${value}, Field name: ${name}`);
          console.log(value, name);
          // convert value to number
          onInputChange(value ? parseFloat(value) : undefined);
        }}
      />
    </>
  );
};

export default InputCurrency;
