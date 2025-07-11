import Image from "next/image";
import happyOtter from "@/assets/happy-otter.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success | Custom Errors",
};

export default function Page() {
  return (
    <section>
      <h1 className={"text-xl font-semibold"}>Success!</h1>
      <p>Thank you for your order.</p>
      <Image
        src={happyOtter}
        alt={"Happy sea otter."}
        className={"mt-4 shadow-sm"}
      />
    </section>
  );
}
