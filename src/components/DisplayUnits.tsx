import React from "react";
import { UnitCounts } from "../types/UnitCounts";

interface DisplayUnitsProps {
  unitCounts: UnitCounts;
}

export default function DisplayUnits({ unitCounts }: DisplayUnitsProps) {
  const armySize = unitCounts.melee + unitCounts.pewpew + unitCounts.tanky;

  return (
    <>
      <div className="flex">
        <div className="flex-none font-bold text-amber-300">
          Units trained ({armySize}):
        </div>
        {/* TODO: <UnitCount /> three times? -- DRY! */}
        <div className="flex-none">🗡️ {unitCounts.melee} Melee</div>
        <div className="flex-none">🏹 {unitCounts.pewpew} Pewpew</div>
        <div className="flex-none">🛡️ {unitCounts.tanky} Tanky</div>
      </div>
    </>
  );
}
