import React from "react";
import { Unit } from "../types/Unit";

interface FaceOffProps {
  friendlyUnit: Unit;
  enemyUnit: Unit;
}

export default function FaceOff({ friendlyUnit, enemyUnit }: FaceOffProps) {
  return (
    <div>
      Friendly {friendlyUnit.unitType} versus enemy {enemyUnit.unitType}.
    </div>
  );
}
