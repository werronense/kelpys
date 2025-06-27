import DefaultOrderForm from "@/components/default-order-form";

export default function Page() {
  return (
    <section className={"space-y-8"}>
      <h1>Confirmation Form with Default Error Messages</h1>
      <DefaultOrderForm />
    </section>
  );
}
