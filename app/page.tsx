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
      Addcurr will stop services on 15th December 2025.
      <br />
      Thanks for 2.5 years of support!
      <br />
      <ForexConverter />
    </>
  );
}
