import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Quick guide to Addcurr
        </h1>
        <a
          href="https://www.producthunt.com/posts/addcurr?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-addcurr"
          target="_blank"
        ></a>
        <ol>
          <li>1. Fill in all currencies you have</li>
          <li>2. Choose your base currency</li>
          <li>3. The portfolio is ready!</li>
        </ol>
        <h2 className="font-boldmb-4 text-4xl  leading-none tracking-tight text-gray-900 dark:text-white">
          What you can do
        </h2>
        <ul></ul>
        <p>
          If you have asset in multiple currencies, you used to exchange each currency and sum up. With Addcurr, all you
          need to do is just filling in all currencies and choose which one to see in sum. Addcurr will do all the
          tedious work.
        </p>
        <p>
          Addcurr allows you to convert multiple currencies into{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text font-extrabold italic text-transparent dark:from-yellow-400 dark:via-pink-500 dark:to-indigo-400">
            one
          </span>{" "}
          currency. In other words, the simplest portfolio maker. It converts and sum up any currencies to{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text font-extrabold italic text-transparent dark:from-yellow-400 dark:via-pink-500 dark:to-indigo-400">
            one
          </span>{" "}
          immediately.
        </p>
        <h2 className="font-boldmb-4 text-4xl  leading-none tracking-tight text-gray-900 dark:text-white">
          Currencies
        </h2>
        <p>
          🇺🇸USD 🇪🇺EUR 🇨🇳CNY 🇯🇵JPY 🇬🇧GBP 🇦🇺AUD 🇮🇳INR 🇧🇷BRL 🇿🇦ZAR 🇨🇭CHF 🇸🇪SEK 🇨🇦CAD 🇷🇺RUB 🇲🇽MYX 🇹🇷TRY 🇸🇦SAR 🇲🇾MYR 🇳🇿NZD
          🇹🇭THB 🇵🇭PHP 🇳🇬NGN BTC ETH BNB SOL XRP ICP
        </p>
        <Link className="underline" href="/">
          back
        </Link>
      </div>
    </>
  );
}
