import Image from "next/image";
import frustratedOtter from "@/assets/frustrated-otter.jpg";

export default function Page() {
  return (
    <section>
      <h1 className={"text-xl font-semibold"}>Success!</h1>
      <p>Thank you for your order.</p>
      <Image
        src={frustratedOtter}
        alt={"Frustrated sea otter"}
        className={"mt-4 shadow-sm"}
      />
    </section>
  );
}
