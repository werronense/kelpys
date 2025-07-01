import KelpyHeader from "@/components/kelpy-header";
import DefaultMenuForm from "@/components/default-menu-form";

export default function Page() {
  return (
    <>
      <div>
        <h1>Menu Form with Default Error Messages</h1>
        <KelpyHeader />
      </div>
      <DefaultMenuForm />
    </>
  );
}
