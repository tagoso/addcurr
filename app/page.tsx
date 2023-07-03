import ForexConverter from "@/components/currency-converter";

export default function Page() {
  return (
    <>
      <header className="items-center m-0">
        AddCurr - convert multiple currencies into{" "}
        <span className="font-extrabold bg-gradient-to-r italic from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          one
        </span>
      </header>
      <br />
      <ForexConverter />
    </>
  );
}
