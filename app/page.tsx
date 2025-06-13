import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Kelpy's</h1>
        <p>
          <Link href={"/zod-basics"}>Zod</Link>
        </p>
        <p>
          <Link href={"/form-defaults"}>Form with Default Error Messages</Link>
        </p>
        <p>
          <Link href={"/form-custom"}>Form with Custom Error Messages</Link>
        </p>
      </main>
    </div>
  );
}
