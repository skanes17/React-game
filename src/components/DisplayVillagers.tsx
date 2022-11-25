import React from "react";
import { Resources } from "../types/Resources";
import Villager from "./Villager";

interface DisplayVillagersProps {
  resources: Resources;
  setResources: any;
}

export default function DisplayVillagers({
  resources,
  setResources,
}: DisplayVillagersProps) {
  return (
    <div className="workers">
      <div className="font-bold text-amber-300">Workers</div>
      <div className="flex">
        <Villager
          name="🪓 Woodcutters"
          workerType="woodcutters"
          resources={resources}
          setResources={setResources}
        />
        <Villager
          name="⚒️ Stonemasons"
          workerType="stonemasons"
          resources={resources}
          setResources={setResources}
        />
        <Villager
          name="🥽 Metalworkers"
          workerType="metalworkers"
          resources={resources}
          setResources={setResources}
        />
      </div>
    </div>
  );
}
