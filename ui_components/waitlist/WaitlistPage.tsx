import { Table } from "./Table";
import { WaitlistActions } from "./WaitlistActions";
import { WaitlistCountOverview } from "./WaitlistCountOverview";
import { WaitlistPaginationHandler } from "./WaitlistPaginationHandler";

export const WaitlistPage = () => {
  return (
    <div className="bg-white px-4 py-3.5 rounded-md shadow-sm shadow-greenGray">
      <div className="flex flex-col">
        <p className="headings_lead text-blueGray">Waitlist</p>
        <div className="mt-[26px]">
          <WaitlistCountOverview />
        </div>
        <div className="mt-4 ">
          <WaitlistActions />
        </div>
        <div className="mt-6">
          <Table />
        </div>
        <div className="mt-6">
          <WaitlistPaginationHandler />
        </div>
      </div>
    </div>
  );
};
