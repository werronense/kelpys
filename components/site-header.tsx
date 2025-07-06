import Link from "next/link";
import { PawPrint } from "lucide-react";

export default function SiteHeader() {
  return (
    <header
      className={
        "bg-foreground text-background py-6 px-4 fixed top-0 left-0 w-full"
      }
    >
      <nav className={"max-w-sm mx-auto sm:px-4"}>
        <ul className={"flex justify-start gap-6"}>
          <li>
            <Link href="/">
              <PawPrint size={20} aria-label={"Home"} />
            </Link>
          </li>
          <li>
            <Link href="/zod-basics">Zod</Link>
          </li>
          <li>
            <Link href="/form-defaults">Defaults</Link>
          </li>
          <li>
            <Link href="/form-custom">Custom</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
