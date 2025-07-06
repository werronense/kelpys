import PageHeading from "@/components/page-heading";
import KelpyHeader from "@/components/kelpy-header";
import DisplayOrder from "@/components/display-order";
import CustomOrderForm from "@/components/custom-order-form";

export default function Page() {
  return (
    <>
      <div>
        <PageHeading text={"Confirmation Form with Default Error Messages"} />
        <KelpyHeader />
      </div>
      <DisplayOrder />
      <CustomOrderForm />
    </>
  );
}
