import React from "react";
import { Resources } from "../types/Resources";
import Villager from "./Villager";

interface DisplayVillagersProps {
  resources: Resources;
  setResources: any;
  freeworkers: number;
  setFreeworkers: any;
  woodcutters: number;
  setWoodcutters: any;
  stonemasons: number;
  setStonemasons: any;
  metalworkers: number;
  setMetalworkers: any;
}

export default function DisplayVillagers(props: DisplayVillagersProps) {
  return (
    <div className="workers">
      <div style={{ fontWeight: "bold" }}>Workers</div>
      <Villager
        type="🪓 Woodcutters"
        workers={props.resources.woodcutters}
        resources={props.resources}
        setResources={props.setResources}
        // can likely remove the rest once refactored
        setWorkers={props.setWoodcutters}
        freeworkers={props.resources.freeworkers}
        setFreeworkers={props.setFreeworkers}
      />
      <Villager
        type="⚒️ Stonemasons"
        workers={props.stonemasons}
        resources={props.resources}
        setResources={props.setResources}
        // can likely remove the rest once refactored

        setWorkers={props.setStonemasons}
        freeworkers={props.freeworkers}
        setFreeworkers={props.setFreeworkers}
      />
      <Villager
        type="🥽 Metalworkers"
        workers={props.metalworkers}
        resources={props.resources}
        setResources={props.setResources}
        // can likely remove the rest once refactored

        setWorkers={props.setMetalworkers}
        freeworkers={props.freeworkers}
        setFreeworkers={props.setFreeworkers}
      />
    </div>
  );
}
