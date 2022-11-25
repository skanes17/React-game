import React from "react";
import { Resources } from "../types/Resources";

interface DisplayResourcesProps {
  resources: Resources;
}

export default function DisplayResources({ resources }: DisplayResourcesProps) {
  return (
    <>
      <div className="flex">
        <div className="flex-none font-bold text-amber-300">Resources: </div>
        {/* TODO: <Resource /> three times -- DRY! */}
        <div className="flex-none">🛠️{resources.freeworkers} Freeworkers</div>
        <div className="flex-none">🪵{resources.woodCollected} Wood </div>
        <div className="flex-none">🪨{resources.stoneCollected} Stone </div>
        <div className="flex-none">🔩{resources.metalCollected} Metal </div>
      </div>
    </>
  );
}
