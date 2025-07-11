import { Metadata } from "next";
import Link from "next/link";
import PageHeading from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className={"space-y-4"}>
      <PageHeading text={"Form Validation and Error Messages with Zod"} />
      <p className={"text-xl"}>My talk tonight has 3 parts:</p>
      <ol className={"list-decimal text-lg pl-4 space-y-3"}>
        <li>
          <Link href={"/zod-basics"}>Zod basics</Link>
        </li>
        <li>
          <Link href={"/form-defaults"}>Form validation with Zod</Link>
        </li>
        <li>
          <Link href={"/form-custom"}>Customizing error messages</Link>
        </li>
      </ol>
    </div>
  );
}
