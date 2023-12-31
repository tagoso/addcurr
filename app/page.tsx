import ForexConverter from "@/components/currency-converter";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="m-0 items-center">
        AddCurr - multiple currency converter into{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text font-extrabold italic text-transparent dark:from-yellow-400 dark:via-pink-500 dark:to-indigo-400">
          one
        </span>
        .{" "}
        <Link className="underline" href="/how-to">
          How to use?
        </Link>
      </header>
      <br />
      <ForexConverter />
    </>
  );
}
