import React, { useState } from "react";
import { Unit } from "../types/Unit";
import Button from "./Button";
import FaceOff from "./FaceOff";

interface CombatProps {
  myUnits: Unit[];
  setMyUnits: any;
  enemyUnits: Unit[];
  setEnemyUnits: any;
}

//TODO: Modify stats directly, don't use the check for less than zero

export default function Combat({
  myUnits,
  setMyUnits,
  enemyUnits,
  setEnemyUnits,
}: CombatProps) {
  const [combatPhase, setCombatPhase] = useState(1);

  const myUnitsCopy = [...myUnits];
  const enemyUnitsCopy = [...enemyUnits];

  // select a random unit from the arrays
  const friendlyUnit =
    myUnitsCopy[Math.floor(Math.random() * myUnitsCopy.length)];
  const enemyUnit =
    enemyUnitsCopy[Math.floor(Math.random() * enemyUnitsCopy.length)];

  friendlyUnit.health -= enemyUnit.attack;
  enemyUnit.health -= friendlyUnit.attack;

  if (combatPhase === 1) {
    return <div>Faceoff info</div>;
  }

  if (combatPhase === 2) {
    return <div>Unit health and damage info</div>;
  }

  if (combatPhase === 3) {
    return <div>Army and building damage info</div>;
  }

  if (myUnitsCopy.length === 0 && enemyUnitsCopy.length === 0) {
    return (
      <div>
        Your units defeated each other at the last moment. Prepare for the next
        battle!
      </div>
    );
  }
  if (myUnitsCopy.length === 0) {
    return <div>Your army was defeated. Your buildings took damage!</div>;
  }
  if (enemyUnitsCopy.length === 0) {
    return <div>Enemy army defeated. You won the battle!</div>;
  }

  if (friendlyUnit.health > 0) {
    return (
      <div>
        The friendly {friendlyUnit.name} takes {enemyUnit.attack} damage but
        survives with {friendlyUnit.health} health.
      </div>
    );
  } else {
    return (
      <div>
        The friendly {friendlyUnit.name} takes {enemyUnit.attack} damage and
        falls.
      </div>
    );
  }

  if (enemyUnit.health > 0) {
    return (
      <div>
        The enemy {enemyUnit.name} takes {friendlyUnit.attack} damage but
        survives with {enemyUnit.health} health.
      </div>
    );
  } else {
    return (
      <div>
        The enemy {enemyUnit.name} takes {friendlyUnit.attack} damage and falls.
      </div>
    );
  }

  if (combatPhase === 1) {
    return <FaceOff friendlyUnit={friendlyUnit} enemyUnit={enemyUnit} />;
  } else {
    return <div>Hello</div>;
  }

  // put these on a button??
  myUnitsCopy.filter((unit) => unit.id !== friendlyUnit.id);
  enemyUnitsCopy.filter((unit) => unit.id !== enemyUnit.id);
}

// TODO: Set myUnits state at end of all combat!

// ===CAN HAVE ANY NUMBER OF CONDITIONAL RETURNS BELOW HERE===

/* // Visual State 1
  if (combatPhase === 2) {
    return (
      <>
        <div>Friendly melee vs. Enemy tanky!</div>
      </>
    );
  }

  // Visual State 2
  if (3 > 4) {
    return (
      <>
        <div>Friendly Tanky takes 7 damage and dies.</div>
        <div>Enemy Pewpew takes 3 damage and dies.</div>
      </>
    );
  }

  // Visual State 3
  if (myUnitsCopy.length === 0 && enemyUnitsCopy.length === 0) {
    return (
      <div>
        Your units defeated each other at the last moment. Prepare for the next
        battle!
      </div>
    );
  }
  if (myUnitsCopy.length === 0) {
    return <div>Your army was defeated. Your buildings took damage!</div>;
  }
  if (enemyUnitsCopy.length === 0) {
    return <div>Enemy army defeated. You won the battle!</div>;
  } */

/* return (
    <>
      <div>You're in combat.</div>
      <Button buttonColor="blue" onClick={() => unitBattler()}>
        Advance Combat
      </Button>
      <Versus />
    </>
  ); */
