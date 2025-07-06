import KelpyHeader from "@/components/kelpy-header";
import PageHeading from "@/components/page-heading";
import DisplayOrder from "@/components/display-order";
import DefaultOrderForm from "@/components/default-order-form";

export default function Page() {
  return (
    <>
      <div>
        <PageHeading text={"Confirmation Form with Default Error Messages"} />
        <KelpyHeader />
      </div>
      <DisplayOrder />
      <DefaultOrderForm />
    </>
  );
}
