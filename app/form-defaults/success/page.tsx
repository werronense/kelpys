import Image from "next/image";
import frustratedOtter from "@/assets/frustrated-otter.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success | Default Errors",
};

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
