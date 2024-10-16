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
        maxLength={13}
        placeholder={placeholder}
        decimalSeparator={decimalSeparator}
        decimalsLimit={10}
        autoComplete="off"
        className="my-1 w-full flex-wrap bg-slate-50 text-right
        text-lg placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 md:text-2xl"
        onValueChange={(v) => {
          if (v !== undefined) {
            onInputChange(v); // 入力値をそのまま渡す
          } else {
            onInputChange(undefined);
          }
        }}
      />
    </>
  );
};

export default InputCurrency;
