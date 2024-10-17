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
      <br />
      <ForexConverter />
    </>
  );
}
