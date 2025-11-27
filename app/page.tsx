import ForexConverter from "@/components/currency-converter";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="m-0 items-center">
        Addcurr - the fastest portfolio.{" "}
        <Link className="underline" href="/how-to">
          How to use?
        </Link>
      </header>
      <span className="text-red-600 font-bold">
        Addcurr will stop services on 15th December 2025.
      </span>
      <br />
      Thanks for 2.5 years of being together!
      <br />
      <ForexConverter />
    </>
  );
}