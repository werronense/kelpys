import KelpyHeader from "@/components/kelpy-header";
import DisplayOrder from "@/components/display-order";
import CustomOrderForm from "@/components/custom-order-form";

export default function Page() {
  return (
    <>
      <div>
        <h1>Confirmation Form with Default Error Messages</h1>
        <KelpyHeader />
      </div>
      <DisplayOrder />
      <CustomOrderForm />
    </>
  );
}
