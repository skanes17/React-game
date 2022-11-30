interface CardFooterProps {
  /* could add attack here */
  tier: number;
  health: number;
}

export default function CardFooter({ tier, health }: CardFooterProps) {
  return (
    <>
      <div></div>
      <div className="text-md mt-4 place-self-end justify-self-center rounded-t-lg bg-slate-800 px-1 text-white">
        Tier {tier}
      </div>
      <div className="text-md mt-4 place-self-end rounded-tl-lg bg-slate-800 px-1 text-white">
        ❤️{health}
      </div>
    </>
  );
}
