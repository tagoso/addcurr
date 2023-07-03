import React from "react";
import { CurrencyInfo } from "@/types/interfaces";

// turn off type checking
declare global {
  interface Window {
    dislaimer_modal: any;
    rate_modal: any;
    information_modal: any;
  }
}

interface SiteFooterRateProps {
  currencies: { [key: string]: CurrencyInfo };
}

interface DateProps {
  formattedUTCDate: string;
}

type SiteFooterProps = SiteFooterRateProps & DateProps;

const SiteFooter: React.FC<SiteFooterProps> = ({ currencies, formattedUTCDate }) => {
  return (
    <>
      <div className="px-1 p-2 m-1 text-sm md:text-base text-slate-500">
        <span className="underline cursor-pointer" onClick={() => window.information_modal.showModal()}>
          FAQ
        </span>
        {" / "}
        <span className="underline cursor-pointer" onClick={() => window.rate_modal.showModal()}>
          Rate
        </span>
        {" / "}
        <span className="underline cursor-pointer" onClick={() => window.dislaimer_modal.showModal()}>
          Disclaimer
        </span>
        {" / "}
        <span className="underline">
          <a href="https://github.com/tagoso/addcurr">View on GitHub</a>
        </span>
      </div>
      <dialog id="information_modal" className="modal">
        <form method="dialog" className="modal-box  bg-slate-50">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg">Reset All 💥</h3>
          <p className="py-4">
            <span>Clicking this button will clear all inputs and fetch the latest currency exchange rates.</span>
          </p>
          <h3 className="font-bold text-lg">Attempt Rate Update 💁‍♀️</h3>
          <p className="py-4">
            <span>
              This button preserves your inputs and fetches the latest exchange rates, allowing you to update the total.
            </span>
          </p>
          <h3 className="font-bold text-lg">Data Source 📈</h3>
          <p className="py-4">
            <span>
              AddCurr gets real-time data from{" "}
              <a className="underline" href="https://www.fastforex.io/">
                fastFOREX
              </a>
              .
            </span>
          </p>
          <h3 className="font-bold text-lg">Pro tip: Copy 📋</h3>
          <p className="py-4">
            <span>You can click the total number to copy it.</span>
          </p>
        </form>
      </dialog>
      <dialog id="rate_modal" className="modal">
        <form method="dialog" className="modal-box  bg-slate-50">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg">Rate 💱</h3>
          <p className="py-4">
            ✅ {formattedUTCDate}
            <br />
            <span>
              {Object.entries(currencies).map(([key, { name, rate }]) => (
                <React.Fragment key={key}>
                  {name}: {rate ?? "N/A"}
                  <br />
                </React.Fragment>
              ))}
            </span>
          </p>
        </form>
      </dialog>
      <dialog id="dislaimer_modal" className="modal">
        <form method="dialog" className="modal-box  bg-slate-50">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg">Disclaimer 💃</h3>
          <p className="py-4">
            <span>
              AddCurr provides data for informational use only. We do not offer financial, investment, legal, or
              accounting advice. It is up to you to decide what financial actions are right for you. Keep in mind, the
              data we provide might be delayed. Also, we do not confirm the accuracy of our data and we are not obliged
              to do so.
            </span>
          </p>
        </form>
      </dialog>
    </>
  );
};

export default SiteFooter;
