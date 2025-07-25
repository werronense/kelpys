import PageHeading from "@/components/page-heading";
import KelpyHeader from "@/components/kelpy-header";
import DisplayOrder from "@/components/display-order";
import CustomOrderForm from "@/components/custom-order-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirmation | Custom Errors",
};

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
