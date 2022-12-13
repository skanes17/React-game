import React from "react";

interface CombatLogProps {}

export default function CombatLog() {
  return (
    <tbody className="col-span-12 col-start-1 row-start-1 aspect-video max-h-32 w-full self-center overflow-y-auto rounded-lg bg-gray-500/10 p-4 text-sm sm:col-span-4 sm:col-start-5 sm:row-span-2 sm:row-start-1 sm:h-5/6 sm:max-h-full sm:w-full sm:text-sm lg:text-lg xl:aspect-[5/3]">
      <tr className="py-1 text-white odd:bg-white/5">
        The enemy army has reached Gabenfort!
      </tr>
      <tr className="py-1 text-amber-400 odd:bg-white/5">
        Gary Longshanks (melee) faces off against Orga Thrung (tanky).
      </tr>
      <tr className="py-1 text-green-400  odd:bg-white/5">
        Gary Longshanks does 3 damage to the enemy tanky.
      </tr>
      <tr className="py-1 text-red-600  odd:bg-white/5">
        Orga Thrung retaliates with a savage 7 damage.
      </tr>
      <tr className="py-1 text-red-300  odd:bg-white/5">
        Gary Longshanks falls!
      </tr>
      <tr className="py-1 text-amber-400  odd:bg-white/5">
        Peter Whislequill (pewpew) faces off against Gygor Grunch(melee).
      </tr>
      <tr className="py-1 text-green-400">
        Peter Whislequill does 7 damage to Gygor Grunch.
      </tr>
      <tr className="py-1 text-red-500">
        Gygor takes a mean swing back at Peter Whistlequill, but misses!
      </tr>
      <tr className="py-1 text-amber-400">
        Both units survive and return to their armies.
      </tr>
    </tbody>
  );
}
