import PageHeading from "@/components/page-heading";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zod Basics",
};

export default function Page() {
  return (
    <div className={"space-y-4"}>
      <PageHeading text={"What is Zod?"} />
      <section className={"p-4 space-y-4"}>
        <blockquote cite={"https://zod.dev/"}>
          "Zod is a TypeScript-first validation library. Using Zod, you can
          define schemas you can use to validate data, from a simple string to a
          complex nested object."
        </blockquote>
        <cite className={"flex justify-end"}>
          <Link href="https://zod.dev/">Zod website</Link>
        </cite>
      </section>
    </div>
  );
}
