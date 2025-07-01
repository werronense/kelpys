import { PawPrint } from "lucide-react";

export default function KelpyHeader() {
  return (
    <p className={"flex flex-col gap-1 mt-6"}>
      <span
        className={
          "flex gap-3 items-end text-4xl uppercase font-permanent-marker"
        }
      >
        Kelpy's
        <PawPrint size={30} className={"mb-0.5"} />
      </span>
      <span className={"text-lg uppercase text-sm tracking-wider"}>
        Otter Snack Shack
      </span>
    </p>
  );
}
