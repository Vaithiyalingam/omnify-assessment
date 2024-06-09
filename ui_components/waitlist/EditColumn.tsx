import { FC } from "react";
import { useEditColumn } from "../../store/useEditColumn";

export interface IEditColumn {
  hideEditDialog: () => void;
}

export const EditColumn: FC<IEditColumn> = ({ hideEditDialog }) => {
  const { columnList, handleColumnChange, handleApply } = useEditColumn();

  return (
    <div className="md:w-[20vw] md:h-[50vh] overflow-y-auto">
      <p className="heading_medium text-black">Edit columns</p>
      <p className="subtle text-blueGray mt-2">
        Select the columns to rearrange
      </p>
      {/* Column list */}
      <div className="overflow-x-auto py-2.5 edit-column">
        {columnList.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-1.5 mb-2 cursor-pointer"
            onClick={() => handleColumnChange(index)}
            role="button"
            aria-label={`Toggle ${item.name} column`}
          >
            {/* Checkbox for column */}
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleColumnChange(index)}
              className="mr-2 h-4 w-4 columnCheckbox rounded-md focus:ring-0 border-none"
            />
            {/* Column name */}
            <div className="py-1.5 px-3 border border-blueGray100 w-full">
              <p className="button_medium text-blueGray whitespace-nowrap">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full gap-3 flex items-center">
        <button
          className="text-darkBlue w-full border px-3 py-1 border-blueGray100 rounded-md body_medium"
          onClick={() => {
            hideEditDialog();
          }}
          aria-label="Reset to Default"
        >
          {"Reset to Default"}
        </button>
        <button
          className={`text-white px-3 py-1 w-full bg-darkBlue rounded-md body_medium opacity-100 cursor-pointer`}
          onClick={() => {
            handleApply();
            hideEditDialog();
          }}
          aria-label="Apply Changes"
        >
          Apply
        </button>
      </div>
    </div>
  );
};
