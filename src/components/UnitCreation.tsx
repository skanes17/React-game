import { Resources } from "../types/Resources";
import { UnitCosts } from "../types/UnitCosts";
import { UnitsInTraining } from "../types/UnitInTraining";
import TrainUnits from "./TrainUnits";

interface UnitCreationProps {
  unitCosts: UnitCosts; // couldn't  make object type work
  setUnitCosts: any;
  unitsInTraining: UnitsInTraining;
  setUnitsInTraining: any;
  resources: Resources;
  setResources: any;
  /* freeworkers: number;
  setFreeworkers: any;
  woodCollected: number;
  stoneCollected: number;
  metalCollected: number;
  setWoodCollected: any;
  setStoneCollected: any;
  setMetalCollected: any;
  meleeInTraining: number;
  pewpewInTraining: number;
  tankyInTraining: number;
  setMeleeInTraining: any;
  setPewpewInTraining: any;
  setTankyInTraining: any; */
}

export default function UnitCreation({
  unitCosts,
  setUnitCosts,
  unitsInTraining,
  setUnitsInTraining,
  resources,
  setResources,
}: /* freeworkers,
  setFreeworkers,
  woodCollected,
  stoneCollected,
  metalCollected,
  setWoodCollected,
  setStoneCollected,
  setMetalCollected,
  meleeInTraining,
  pewpewInTraining,
  tankyInTraining,
  setMeleeInTraining,
  setPewpewInTraining,
  setTankyInTraining, */
UnitCreationProps) {
  /* TODO: Make TrainUnits stuff work (haven't worked on props) */

  return (
    <div>
      <h2 className="text-4xl font-extrabold dark:text-white">Unit Creation</h2>
      <TrainUnits
        name="🗡️ Melee"
        // TODO: replace with take name on button as prop
        freeworkerName={
          unitCosts.melee.freeworkerCost > 1 ? "villagers" : "villager"
        }
        resources={resources}
        setResources={setResources}
        unitCosts={unitCosts}
        setUnitCosts={setUnitCosts}
        unitsInTraining={unitsInTraining}
        setUnitsInTraining={setUnitsInTraining}
        /* freeworkers={freeworkers}
        setFreeworkers={setFreeworkers} */
        /* freeworkerCost={unitCosts.melee.freeworkerCost}
        resource1Name="wood"
        resource1={woodCollected}
        setResource1={setWoodCollected}
        resource1Cost={unitCosts.melee.woodCost}
        resource2Name="stone"
        resource2={stoneCollected}
        setResource2={setStoneCollected}
        resource2Cost={unitCosts.melee.stoneCost}
        unitInTraining={meleeInTraining}
        setUnitInTraining={setMeleeInTraining} */
      />
      <TrainUnits
        name="🏹 Pewpew"
        freeworkerName={
          unitCosts.pewpew.freeworkerCost > 1 ? "villagers" : "villager"
        }
        resources={resources}
        setResources={setResources}
        unitCosts={unitCosts}
        setUnitCosts={setUnitCosts}
        unitsInTraining={unitsInTraining}
        setUnitsInTraining={setUnitsInTraining}
        /* freeworkers={freeworkers}
        setFreeworkers={setFreeworkers}
        freeworkerCost={unitCosts.pewpew.freeworkerCost}
        resource1Name="wood"
        resource1={woodCollected}
        setResource1={setWoodCollected}
        resource1Cost={unitCosts.pewpew.woodCost}
        resource2Name="metal"
        resource2={metalCollected}
        setResource2={setMetalCollected}
        resource2Cost={unitCosts.pewpew.metalCost}
        unitInTraining={pewpewInTraining}
        setUnitInTraining={setPewpewInTraining} */
      />
      <TrainUnits
        name="🛡️ Tanky"
        freeworkerName={
          unitCosts.tanky.freeworkerCost > 1 ? "villagers" : "villager"
        }
        resources={resources}
        setResources={setResources}
        unitCosts={unitCosts}
        setUnitCosts={setUnitCosts}
        unitsInTraining={unitsInTraining}
        setUnitsInTraining={setUnitsInTraining}
        /* freeworkers={freeworkers}
        setFreeworkers={setFreeworkers}
        freeworkerCost={unitCosts.tanky.freeworkerCost}
        resource1Name="stone"
        resource1={stoneCollected}
        setResource1={setStoneCollected}
        resource1Cost={unitCosts.tanky.stoneCost}
        resource2Name="metal"
        resource2={metalCollected}
        setResource2={setMetalCollected}
        resource2Cost={unitCosts.tanky.metalCost}
        unitInTraining={tankyInTraining}
        setUnitInTraining={setTankyInTraining} */
      />
    </div>
  );
}
