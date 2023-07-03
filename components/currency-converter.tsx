"use client";

import React, { useState, useEffect } from "react";
import FetchAPI from "@/lib/FetchAPI";
import CurrencyInput from "./currency-input";
import SiteFooter from "./site-footer";
import { ForexDataProps, Currency, CurrencyInfo } from "@/types/interfaces";

// What this file exports to page
const ForexConverter: React.FC = () => {
  // useState
  const [forexData, setForexData] = useState<ForexDataProps | null>(null);
  const [selectedBase, setSelectedBase] = useState<number | undefined>(undefined);
  const [selectedName, setSelectedName] = useState<Currency>("USD");
  const [hasForexDataBeenFetched, setHasForexDataBeenFetched] = useState<boolean>(false);
  const [dateUpdate, setDateUpdate] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  // useState for user input value
  const [usdValue, setUsdValue] = useState<number | undefined>(undefined);
  const [eurValue, setEurValue] = useState<number | undefined>(undefined);
  const [cnyValue, setCnyValue] = useState<number | undefined>(undefined);
  const [jpyValue, setJpyValue] = useState<number | undefined>(undefined);
  const [gbpValue, setGbpValue] = useState<number | undefined>(undefined);
  const [audValue, setAudValue] = useState<number | undefined>(undefined);
  const [inrValue, setInrValue] = useState<number | undefined>(undefined);
  const [brlValue, setBrlValue] = useState<number | undefined>(undefined);
  const [zarValue, setZarValue] = useState<number | undefined>(undefined);
  const [chfValue, setChfValue] = useState<number | undefined>(undefined);
  const [sekValue, setSekValue] = useState<number | undefined>(undefined);
  const [cadValue, setCadValue] = useState<number | undefined>(undefined);
  const [rubValue, setRubValue] = useState<number | undefined>(undefined);
  const [mxnValue, setMxnValue] = useState<number | undefined>(undefined);
  const [tryValue, setTryValue] = useState<number | undefined>(undefined);
  const [sarValue, setSarValue] = useState<number | undefined>(undefined);
  const [myrValue, setMyrValue] = useState<number | undefined>(undefined);
  const [nzdValue, setNzdValue] = useState<number | undefined>(undefined);
  const [thbValue, setThbValue] = useState<number | undefined>(undefined);
  const [phpValue, setPhpValue] = useState<number | undefined>(undefined);
  const [ngnValue, setNgnValue] = useState<number | undefined>(undefined);

  // useState for currency rate from API
  const [usdRate, setUsdRate] = useState<number | undefined>(undefined);
  const [eurRate, setEurRate] = useState<number | undefined>(undefined);
  const [cnyRate, setCnyRate] = useState<number | undefined>(undefined);
  const [jpyRate, setJpyRate] = useState<number | undefined>(undefined);
  const [gbpRate, setGbpRate] = useState<number | undefined>(undefined);
  const [audRate, setAudRate] = useState<number | undefined>(undefined);
  const [inrRate, setInrRate] = useState<number | undefined>(undefined);
  const [brlRate, setBrlRate] = useState<number | undefined>(undefined);
  const [zarRate, setZarRate] = useState<number | undefined>(undefined);
  const [chfRate, setChfRate] = useState<number | undefined>(undefined);
  const [sekRate, setSekRate] = useState<number | undefined>(undefined);
  const [cadRate, setCadRate] = useState<number | undefined>(undefined);
  const [rubRate, setRubRate] = useState<number | undefined>(undefined);
  const [mxnRate, setMxnRate] = useState<number | undefined>(undefined);
  const [tryRate, setTryRate] = useState<number | undefined>(undefined);
  const [sarRate, setSarRate] = useState<number | undefined>(undefined);
  const [myrRate, setMyrRate] = useState<number | undefined>(undefined);
  const [nzdRate, setNzdRate] = useState<number | undefined>(undefined);
  const [thbRate, setThbRate] = useState<number | undefined>(undefined);
  const [phpRate, setPhpRate] = useState<number | undefined>(undefined);
  const [ngnRate, setNgnRate] = useState<number | undefined>(undefined);

  // List of currencies
  const currencies: { [key: string]: CurrencyInfo } = {
    USD: {
      name: "USD",
      value: usdValue,
      rate: usdRate,
      symbol: "$",
      setValue: setUsdValue,
    },
    EUR: {
      name: "EUR",
      value: eurValue,
      rate: eurRate,
      symbol: "€",
      setValue: setEurValue,
    },
    CNY: {
      name: "CNY",
      value: cnyValue,
      rate: cnyRate,
      symbol: "¥",
      setValue: setCnyValue,
    },
    JPY: {
      name: "JPY",
      value: jpyValue,
      rate: jpyRate,
      symbol: "¥",
      setValue: setJpyValue,
    },
    GBP: {
      name: "GBP",
      value: gbpValue,
      rate: gbpRate,
      symbol: "£",
      setValue: setGbpValue,
    },
    AUD: {
      name: "AUD",
      value: audValue,
      rate: audRate,
      symbol: "A$",
      setValue: setAudValue,
    },
    INR: {
      name: "INR",
      value: inrValue,
      rate: inrRate,
      symbol: "₹",
      setValue: setInrValue,
    },
    BRL: {
      name: "BRL",
      value: brlValue,
      rate: brlRate,
      symbol: "R$",
      setValue: setBrlValue,
    },
    ZAR: {
      name: "ZAR",
      value: zarValue,
      rate: zarRate,
      symbol: "R",
      setValue: setZarValue,
    },
    CHF: {
      name: "CHF",
      value: chfValue,
      rate: chfRate,
      symbol: "CHF",
      setValue: setChfValue,
    },
    SEK: {
      name: "SEK",
      value: sekValue,
      rate: sekRate,
      symbol: "kr",
      setValue: setSekValue,
    },
    CAD: {
      name: "CAD",
      value: cadValue,
      rate: cadRate,
      symbol: "C$",
      setValue: setCadValue,
    },
    RUB: {
      name: "RUB",
      value: rubValue,
      rate: rubRate,
      symbol: "₽",
      setValue: setRubValue,
    },
    MXN: {
      name: "MXN",
      value: mxnValue,
      rate: mxnRate,
      symbol: "MX$",
      setValue: setMxnValue,
    },
    TRY: {
      name: "TRY",
      value: tryValue,
      rate: tryRate,
      symbol: "₺",
      setValue: setTryValue,
    },
    SAR: {
      name: "SAR",
      value: sarValue,
      rate: sarRate,
      symbol: "﷼",
      setValue: setSarValue,
    },
    MYR: {
      name: "MYR",
      value: myrValue,
      rate: myrRate,
      symbol: "RM",
      setValue: setMyrValue,
    },
    NZD: {
      name: "NZD",
      value: nzdValue,
      rate: nzdRate,
      symbol: "NZ$",
      setValue: setNzdValue,
    },
    THB: {
      name: "THB",
      value: thbValue,
      rate: thbRate,
      symbol: "฿",
      setValue: setThbValue,
    },
    PHP: {
      name: "PHP",
      value: phpValue,
      rate: phpRate,
      symbol: "₱",
      setValue: setPhpValue,
    },
    NGN: {
      name: "NGN",
      value: ngnValue,
      rate: ngnRate,
      symbol: "₦",
      setValue: setNgnValue,
    },
  };

  // fetch data when the page is loaded
  useEffect(() => {
    fetchData();
  }, []);

  // fetch data from API
  const fetchData = async () => {
    try {
      setIsDisabled(false);
      const data = await FetchAPI();
      setForexData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // refresh data from API
  const refreshRate = async () => {
    try {
      setIsDisabled(true);
      setTimeout(() => setIsDisabled(false), 10000); // Enable the button after xx seconds
      const data = await FetchAPI();
      setForexData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // only the first time forexData changes from null
  useEffect(() => {
    if (forexData !== null && !hasForexDataBeenFetched) {
      setSelectedBase(forexData.results.USD);
      setHasForexDataBeenFetched(true);
    }
  }, [forexData, hasForexDataBeenFetched]);

  // when forexData refreshed (inc. first time)
  useEffect(() => {
    if (forexData !== null) {
      setDateUpdate(forexData.updated);
      setUsdRate(forexData.results.USD);
      setEurRate(forexData.results.EUR);
      setCnyRate(forexData.results.CNY);
      setJpyRate(forexData.results.JPY);
      setGbpRate(forexData.results.GBP);
      setAudRate(forexData.results.AUD);
      setInrRate(forexData.results.INR);
      setBrlRate(forexData.results.BRL);
      setZarRate(forexData.results.ZAR);
      setChfRate(forexData.results.CHF);
      setSekRate(forexData.results.SEK);
      setCadRate(forexData.results.CAD);
      setRubRate(forexData.results.RUB);
      setMxnRate(forexData.results.MXN);
      setTryRate(forexData.results.TRY);
      setSarRate(forexData.results.SAR);
      setMyrRate(forexData.results.MYR);
      setNzdRate(forexData.results.NZD);
      setThbRate(forexData.results.THB);
      setPhpRate(forexData.results.PHP);
      setNgnRate(forexData.results.NGN);
      setSelectedBase(forexData.results[selectedName]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forexData]);

  // show loading animation (daisyui)
  if (forexData === null) {
    return (
      <div className="h-96">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  // fire when currency is selected
  const baseCurrency = (currency: CurrencyInfo) => {
    setSelectedBase(currency.rate);
    setSelectedName(currency.name);
  };

  // format for displaying purpose
  const numberWithCommas = (num: { toString: () => string }) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // for meta data
  const utcDateStr = dateUpdate;
  const localDate = utcDateStr.replace(" ", "T") + "Z"; // results in "2023-06-20T18:11:36Z"
  const date = new Date(localDate);
  const formattedUTCDate = date.toUTCString();

  // total value
  const totalValue = Object.values(currencies).reduce(
    (sum, { value, rate }) => sum + (value || 0) * ((selectedBase || 0) / (rate || 0)),
    0
  );

  // copy and paste
  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  // currency conponent
  const createCurrencyComponent = ([code, currency]: [string, CurrencyInfo]) => (
    <div
      key={code}
      className={`${
        selectedName === code
          ? "w-1/2 sm:w-1/3 p-1 h-auto rounded-md overflow-hidden bg-gray-200 shadow-lg"
          : "w-1/2 sm:w-1/3 p-1 h-auto rounded-md overflow-hidden"
      }`}
    >
      <button
        onClick={() => baseCurrency(currency)}
        className={`${
          selectedName === code
            ? "text-lg md:text-2xl w-full font-extrabold bg-gradient-to-r from-orange-400 from-40% via-red-500 via-50% to-purple-600 to-60% bg-clip-text text-transparent italic"
            : "text-lg md:text-2xl lg:text-2xl w-full text-slate-500 italic"
        }`}
      >
        {code}({currency.symbol})
      </button>
      <CurrencyInput
        id={`${code}Input`}
        name={code}
        type={"search"}
        prefix={""}
        value={undefined}
        placeholder={!["JPY", "INR", "THB", "RUB", "PHP", "NGN"].includes(code) ? "0.00" : "0"}
        onInputChange={currency.setValue}
        baseCurrency={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );

  // return jsx
  return (
    <>
      <div className="flex content-start flex-wrap">
        {Object.entries(currencies).slice(0, 9).map(createCurrencyComponent)}
      </div>

      <details>
        <summary className="w-max cursor-pointer pl-1 m-1">12 more currencies!</summary>
        <div className="flex content-start flex-wrap">
          {Object.entries(currencies).slice(9).map(createCurrencyComponent)}
        </div>
      </details>

      <div
        className="cursor-pointer box-border rounded-xl h-auto w-auto text-lg md:text-2xl p-2 m-2 border-2 border-gray-300 bg-gray-200"
        onClick={() =>
          copyToClipboard(
            !["JPY", "INR", "THB", "RUB", "PHP", "NGN"].includes(selectedName)
              ? totalValue.toFixed(2)
              : totalValue.toFixed(0)
          )
        }
      >
        Total:{" "}
        {!["JPY", "INR", "THB", "RUB", "PHP", "NGN"].includes(selectedName)
          ? numberWithCommas(totalValue.toFixed(2))
          : numberWithCommas(totalValue.toFixed(0))}{" "}
        <span className="text-lg md:text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent italic px-1">
          {selectedName}{" "}
        </span>
      </div>
      <div className="p-1 px-2 m-1 text-sm md:text-base text-slate-500">✅ {formattedUTCDate}</div>
      <div className="py-1 m-1">
        <button onClick={() => window.location.reload()} className="btn btn-xs mx-1 bg-gray-200">
          <span className="loading loading-ring loading-xs"></span>Reset All
        </button>
        {isDisabled ? (
          <button className="btn btn-xs mx-1 bg-gray-200">
            <span className="loading loading-ring loading-xs"></span>
            Attempt Rate Update
          </button>
        ) : (
          <button onClick={refreshRate} className="btn btn-xs mx-1 bg-gray-200">
            <span className="loading loading-ring loading-xs"></span>
            Attempt Rate Update
          </button>
        )}
      </div>
      <SiteFooter currencies={currencies} formattedUTCDate={formattedUTCDate} />
    </>
  );
};

export default ForexConverter;
