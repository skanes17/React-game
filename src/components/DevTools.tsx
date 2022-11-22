import React from "react";
import { BaseUnit } from "../types/BaseUnit";
import AddUnitButton from "./AddUnitButton";

interface DevToolsProps {
  BASE_UNIT_DATA: BaseUnit;
  addUnit: any;
}

export default function DevTools({ BASE_UNIT_DATA, addUnit }: DevToolsProps) {
  return (
    <>
      <h2 className="text-4xl font-extrabold dark:text-white">Dev Tools</h2>{" "}
      <div>
        {/* Get all base unit types, dyanmically create a button for each */}
        {Object.keys(BASE_UNIT_DATA).map((unitType: string) => (
          <AddUnitButton
            addUnit={addUnit}
            unitType={unitType}
            name={BASE_UNIT_DATA[unitType].name}
            // choose true for friendly units
            friendly={true}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
          />
        ))}
        <br></br>
        {Object.keys(BASE_UNIT_DATA).map((unitType: string) => (
          <AddUnitButton
            addUnit={addUnit}
            unitType={unitType}
            name={BASE_UNIT_DATA[unitType].name}
            // choose true for enemy units
            friendly={false}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
          />
        ))}
      </div>
    </>
  );
}
