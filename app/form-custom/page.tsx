import KelpyHeader from "@/components/kelpy-header";
import PageHeading from "@/components/page-heading";
import CustomMenuForm from "@/components/custom-menu-form";

export default function Page() {
  return (
    <>
      <div>
        <PageHeading text={"Menu Form with Custom Error Messages"} />
        <KelpyHeader />
      </div>
      <CustomMenuForm />
    </>
  );
}
