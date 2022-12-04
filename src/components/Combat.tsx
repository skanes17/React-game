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
  // console.log("--Selected friendly unit is... " + friendlyUnit.unitType);
  const enemyUnit =
    enemyUnitsCopy[Math.floor(Math.random() * enemyUnitsCopy.length)];
  // console.log("--Selected enemy unit is... " + enemyUnit.unitType);

  if (combatPhase === 1) {
    return <FaceOff friendlyUnit={friendlyUnit} enemyUnit={enemyUnit} />;
  } else {
    return <div>Hello</div>;
  }

  /*   friendlyUnit.health -= enemyUnit.attack;
  enemyUnit.health -= friendlyUnit.attack;

  // if the enemy survives...
  if (enemyUnit.health > 0) {
    console.log(
      "The enemy takes " +
        friendlyUnit.attack +
        " damage but survives with " +
        enemyUnit.health +
        " health."
    );
    // copy the array
    enemyUnitsCopy.map((unit) => {
      // check if id matches the currently selected unit
      if (unit.id === enemyUnit.id) {
        return {
          // if so, change that unit's health/health accordingly
          ...unit,
          health: enemyUnit.health,
        };
      } else {
        // if not, don't change anything
        return unit;
      }
    });
  } else {
    // if the enemy dies...
    console.log(
      "Enemy " +
        enemyUnit.name +
        " takes " +
        friendlyUnit.attack +
        " damage and dies."
    );
    // remove enemy from their pool
    setEnemyUnits(enemyUnitsCopy.filter((unit) => unit.id !== enemyUnit.id));
  }

  // if the friendly unit survives...
  if (friendlyUnit.health > 0) {
    console.log(
      "Friendly " +
        friendlyUnit.name +
        " takes " +
        enemyUnit.attack +
        " damage but survives with " +
        friendlyUnit.health +
        " health."
    );
    // code to return friendly to pool with current health
    // copy the array
    myUnitsCopy.map((unit) => {
      // check if id matches the currently selected unit
      if (unit.id === friendlyUnit.id) {
        return {
          // if so, change that unit's health/health accordingly
          ...unit,
          health: friendlyUnit.health,
        };
      } else {
        // if not, don't change anything
        return unit;
      }
    });
  } else {
    // if the friendly dies...
    console.log(
      friendlyUnit.name + " takes " + enemyUnit.attack + " damage and dies."
    );
    // remove friendly from pool
    myUnitsCopy.filter((unit) => unit.id !== friendlyUnit.id);
  }
  console.log("The new enemy array is...");
  console.log(enemyUnits);
  console.log("The new friendly array is...");
  console.log(myUnits); */
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
