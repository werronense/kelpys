import KelpyHeader from "@/components/kelpy-header";
import PageHeading from "@/components/page-heading";
import DefaultMenuForm from "@/components/default-menu-form";

export default function Page() {
  return (
    <>
      <div>
        <PageHeading text={"Menu Form with Default Error Messages"} />
        <KelpyHeader />
      </div>
      <DefaultMenuForm />
    </>
  );
}
