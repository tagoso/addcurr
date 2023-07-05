import ForexConverter from "@/components/currency-converter";

export default function Page() {
  return (
    <>
      <header className="m-0 items-center">
        AddCurr - convert multiple currencies into{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text font-extrabold italic text-transparent">
          one
        </span>
      </header>
      <br />
      <ForexConverter />
    </>
  );
}
