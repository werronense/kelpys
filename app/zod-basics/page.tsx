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
      <section className={"space-y-4"}>
        <h2 className="text-xl">Official Description</h2>
        <div className={"text-lg p-4"}>
          <blockquote cite={"https://zod.dev/"}>
            "Zod is a TypeScript-first validation library. Using Zod, you can
            define schemas you can use to validate data, from a simple string to
            a complex nested object."
          </blockquote>
          <cite className={"flex justify-end"}>
            <Link href="https://zod.dev/">Zod website</Link>
          </cite>
        </div>
      </section>
      <section className={"space-y-4"}>
        <h2 className="text-xl">Using Zod</h2>
        <ul className={"list-disc ml-4 space-y-2"}>
          <li className={"text-lg"}>Create validation schemas</li>
          <li className={"text-lg"}>
            Parse data from external sources at run time
          </li>
          <li className={"text-lg"}>Debug problems using error messages</li>
          <li className={"text-lg"}>
            Great for form validation (if you customize error messages)
          </li>
        </ul>
      </section>
    </div>
  );
}
