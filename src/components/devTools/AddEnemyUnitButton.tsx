import React from "react";

// TODO: Consolidate this component with AddResourceButton, AddUnitButton

interface AddUnitButtonProps {
  addEnemyUnit: any;
  unitType: string;
  name: string;
  className: string;
}

export default function AddEnemyUnitButton({
  addEnemyUnit,
  unitType,
  name,
  className,
}: AddUnitButtonProps) {
  return (
    <>
      <button onClick={() => addEnemyUnit(unitType)} className={className}>
        +1 enemy {name} (DevTool)
      </button>
    </>
  );
}
