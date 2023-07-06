// interface for fetched API data
export interface ForexDataProps {
    base: string;
    results: {
      USD: number;
      EUR: number;
      CNY: number;
      JPY: number;
      GBP: number;
      AUD: number;
      INR: number;
      BRL: number;
      ZAR: number;
      CHF: number;
      SEK: number;
      CAD: number;
      RUB: number;
      MXN: number;
      TRY: number;
      SAR: number;
      MYR: number;
      NZD: number;
      THB: number;
      PHP: number;
      NGN: number;
    };
    updated: string;
    ms: number;
  }

  // for selectedName
export type Currency =
| "USD"
| "EUR"
| "CNY"
| "JPY"
| "GBP"
| "AUD"
| "INR"
| "BRL"
| "ZAR"
| "CHF"
| "SEK"
| "CAD"
| "RUB"
| "MXN"
| "TRY"
| "SAR"
| "MYR"
| "NZD"
| "THB"
| "PHP"
| "NGN";

// interface for currency object
export interface CurrencyInfo {
    name: Currency;
    value: any;
    rate: number | undefined;
    symbol: string;
    setValue: React.Dispatch<React.SetStateAction<any>>;
  }
  