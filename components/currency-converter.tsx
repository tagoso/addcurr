"use client";

import React, { useState, useEffect } from "react";
import FetchAPI from "@/lib/FetchAPI";
import CurrencyInput from "./currency-input";
import SiteFooter from "./site-footer";
import { ForexDataProps, Currency, CurrencyInfo } from "@/types/interfaces";
import { isNumberObject } from "util/types";

// What this file exports to page
const ForexConverter: React.FC = () => {
  // useState
  const [forexData, setForexData] = useState<ForexDataProps | null>(null);
  const [selectedBase, setSelectedBase] = useState<number | undefined>(undefined);
  const [selectedName, setSelectedName] = useState<Currency>("USD");
  const [hasForexDataBeenFetched, setHasForexDataBeenFetched] = useState<boolean>(false);
  const [dateUpdate, setDateUpdate] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
  const [btcValue, setBtcValue] = useState<number | undefined>(undefined);
  const [ethValue, setEthValue] = useState<number | undefined>(undefined);
  const [bnbValue, setBnbValue] = useState<number | undefined>(undefined);
  const [solValue, setSolValue] = useState<number | undefined>(undefined);
  const [xrpValue, setXrpValue] = useState<number | undefined>(undefined);
  const [icpValue, setIcpValue] = useState<number | undefined>(undefined);

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
  const [btcRate, setBtcRate] = useState<number | undefined>(undefined);
  const [ethRate, setEthRate] = useState<number | undefined>(undefined);
  const [bnbRate, setBnbRate] = useState<number | undefined>(undefined);
  const [solRate, setSolRate] = useState<number | undefined>(undefined);
  const [xrpRate, setXrpRate] = useState<number | undefined>(undefined);
  const [icpRate, setIcpRate] = useState<number | undefined>(undefined);

  // List of currencies. This is the order on frontend.
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
    NZD: {
      name: "NZD",
      value: nzdValue,
      rate: nzdRate,
      symbol: "NZ$",
      setValue: setNzdValue,
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
    THB: {
      name: "THB",
      value: thbValue,
      rate: thbRate,
      symbol: "฿",
      setValue: setThbValue,
    },
    BTC: {
      name: "BTC",
      value: btcValue,
      rate: btcRate,
      symbol: "₿",
      setValue: setBtcValue,
    },
    ETH: {
      name: "ETH",
      value: ethValue,
      rate: ethRate,
      symbol: "Ξ",
      setValue: setEthValue,
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
    BNB: {
      name: "BNB",
      value: bnbValue,
      rate: bnbRate,
      symbol: "BNB",
      setValue: setBnbValue,
    },
    SOL: {
      name: "SOL",
      value: solValue,
      rate: solRate,
      symbol: "SOL",
      setValue: setSolValue,
    },
    XRP: {
      name: "XRP",
      value: xrpValue,
      rate: xrpRate,
      symbol: "XRP",
      setValue: setXrpValue,
    },
    ICP: {
      name: "ICP",
      value: icpValue,
      rate: icpRate,
      symbol: "∞",
      setValue: setIcpValue,
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
    } finally {
      setIsLoading(false);
    }
  };

  // refresh data from API
  const refreshRate = async () => {
    try {
      setIsDisabled(true);
      setTimeout(() => setIsDisabled(false), 1000); // Enable the button after xx seconds
      const data = await FetchAPI();
      setForexData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // only the first time forexData changes from null
  useEffect(() => {
    if (forexData !== null && !hasForexDataBeenFetched) {
      setSelectedBase(forexData.results.USD);
      setHasForexDataBeenFetched(true);
    }
  }, [forexData, hasForexDataBeenFetched]);

  // when forexData refreshed (including the first time)
  useEffect(() => {
    if (forexData !== null) {
      setIsLoading(false);
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
      setBtcRate(forexData.results.BTC);
      setEthRate(forexData.results.ETH);
      setBnbRate(forexData.results.BNB);
      setSolRate(forexData.results.SOL);
      setXrpRate(forexData.results.XRP);
      setIcpRate(forexData.results.ICP);
      setSelectedBase(forexData.results[selectedName]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forexData]);

  // reset input
  const resetInput = async () => {
    for (const currency of Object.values(currencies)) {
      currency.setValue(0);
    }
  };

  // show loading animation (daisyui)
  if (forexData === null) {
    setTimeout(() => setIsLoading(false), 50000); // Enable the button after xx seconds
    if (isLoading === true) {
      return (
        <div className="h-96">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      );
    } else if (isLoading === false) {
      return (
        <>
          <div className="h-96">
            <span>Sorry, we cannot fetch the forex data right now!</span>
            <br />
            <span>Please come back later.</span>
            <br />

            <ul className="my-4">
              <span>By the way, here are some possible reasons 🤔</span>
              <li>
                - FastForex (our data sourse) is not responding. You can check its status{" "}
                <a className="underline" href="https://www.fastforex.io/">
                  here
                </a>
                .
              </li>
              <li>- Your internet connection is not stable.</li>
            </ul>
          </div>
        </>
      );
    }
  }

  // fire when currency is selected
  const baseCurrency = (currency: CurrencyInfo) => {
    setSelectedBase(currency.rate);
    setSelectedName(currency.name);
  };

  // format for displaying purpose
  const numberWithCommas = (num: { toString: () => string }) => {
    const [integerPart, decimalPart] = num.toString().split(".");

    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  };

  // for meta data

  const utcDateStr = dateUpdate;
  const localDate = utcDateStr.replace(" ", "T") + "Z";
  const date = new Date(localDate);

  // Array of month names in English
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Format the date using getUTCFullYear(), getUTCMonth(), getUTCDate(), getUTCHours(), and getUTCMinutes() methods
  const formattedUTCDate = `${date.getUTCDate()} ${monthNames[date.getUTCMonth()]} ${date.getUTCFullYear()} ${(
    "0" + date.getUTCHours()
  ).slice(-2)}:${("0" + date.getUTCMinutes()).slice(-2)} GMT`;

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
          ? "h-auto w-1/2 overflow-hidden rounded-lg bg-slate-200 p-1 dark:bg-slate-600 sm:w-1/3"
          : "h-auto w-1/2 overflow-hidden rounded-lg p-1 sm:w-1/3"
      }`}
    >
      <button
        onClick={() => baseCurrency(currency)}
        className={`${
          selectedName === code
            ? "w-full bg-slate-200 bg-gradient-to-r from-orange-400 from-40% via-red-500 via-50% to-purple-600 to-60% bg-clip-text text-lg font-extrabold italic text-transparent dark:from-yellow-400 dark:via-pink-500 dark:to-indigo-400 md:text-2xl"
            : "w-full text-lg italic text-slate-500 hover:bg-gradient-to-r hover:from-orange-400 hover:from-40% hover:via-red-500 hover:via-50% hover:to-purple-600 hover:to-60% hover:bg-clip-text hover:font-extrabold hover:italic hover:text-transparent hover:dark:from-yellow-400 hover:dark:via-pink-500 hover:dark:to-indigo-400 md:text-2xl"
        }`}
      >
        {code}({currency.symbol})
      </button>
      <CurrencyInput
        id={`${code}Input`}
        name={code}
        type={"search"}
        prefix={""}
        defaultValue={undefined}
        value={currency.value ? currency.value.toString() : ""}
        decimalSeparator={"."}
        placeholder={"0"}
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
      <div
        className="m-2 box-border h-auto w-auto cursor-pointer rounded-xl border-2 border-slate-300 bg-slate-200 p-2 text-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 md:text-2xl"
        onClick={() =>
          copyToClipboard(
            !["JPY", "INR", "THB", "RUB", "PHP", "NGN"].includes(selectedName)
              ? ["BTC", "ETH", "BNB", "SOL"].includes(selectedName)
                ? totalValue.toFixed(6)
                : totalValue.toFixed(2) // 仮想通貨なら8桁、それ以外は2桁
              : totalValue.toFixed(0) // 特定の法定通貨は整数
          )
        }
      >
        Total:{" "}
        {
          !["JPY", "INR", "THB", "RUB", "PHP", "NGN"].includes(selectedName)
            ? numberWithCommas(
                ["BTC", "ETH", "BNB", "SOL"].includes(selectedName) ? totalValue.toFixed(6) : totalValue.toFixed(2) // 仮想通貨なら8桁、それ以外は2桁
              )
            : numberWithCommas(totalValue.toFixed(0)) // 特定の法定通貨は整数
        }{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text px-1 text-lg font-extrabold italic text-transparent dark:from-yellow-400 dark:via-pink-500 dark:to-indigo-400 md:text-2xl">
          {selectedName}{" "}
        </span>
      </div>

      <div className="m-1 py-1">
        <button onClick={resetInput} className="btn-xs btn mx-1 bg-slate-200">
          <span className="loading loading-ring loading-xs"></span>
          Reset Input
        </button>
        {isDisabled ? (
          <button className="btn-xs btn mx-1 bg-slate-200">
            <span className="loading loading-ring loading-xs"></span>
            Rate Update
          </button>
        ) : (
          <button onClick={refreshRate} className="btn-xs btn mx-1 bg-slate-200">
            <span className="loading loading-ring loading-xs"></span>
            Rate Update
          </button>
        )}
      </div>
      <div className="flex flex-wrap content-start">
        {Object.entries(currencies).slice(0, 12).map(createCurrencyComponent)}
      </div>

      <details>
        <summary className="m-1 w-max cursor-pointer pl-1 underline dark:text-slate-400">
          15 more currencies & crypto!
        </summary>
        <div className="flex flex-wrap content-start">
          {Object.entries(currencies).slice(12).map(createCurrencyComponent)}
        </div>
      </details>
      <div className="m-1 p-1 px-2 text-sm text-slate-500 dark:text-slate-400 md:text-base">✅ {formattedUTCDate}</div>

      <SiteFooter currencies={currencies} formattedUTCDate={formattedUTCDate} />
    </>
  );
};

export default ForexConverter;
