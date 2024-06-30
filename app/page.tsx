import ForexConverter from "@/components/currency-converter";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="m-0 items-center">
        AddCurr - the simplest portfolio maker.{" "}
        <Link className="underline" href="/how-to">
          How to use?
        </Link>
      </header>
      <br />
      <ForexConverter />
    </>
  );
}
