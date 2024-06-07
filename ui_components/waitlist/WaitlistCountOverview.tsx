export const WaitlistCountOverview = () => {
  return (
    <div className="flex items-center gap-[15px] w-full">
      <div className="border border-slateGray rounded-md flex items-center w-[30%] px-3 py-2.5 gap-x-1.5">
        <p className="detail_lead text-blueGray">All Waitlists</p>
        <p className="text_medium text-slateGray">100</p>
      </div>
      <div className="border border-blueGray100 rounded-md flex items-center w-[30%] px-3 py-2.5 gap-1.5">
        <p className="detail_lead text-blueGray">Newly Added</p>
        <p className="text_medium text-slateGray">50</p>
      </div>
      <div className="border border-blueGray100 rounded-md flex items-center w-[30%] px-3 py-2.5 gap-1.5">
        <p className="detail_lead text-blueGray">Leads</p>
        <p className="text_medium text-slateGray">20</p>
      </div>
    </div>
  );
};
