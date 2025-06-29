import { ReactNode } from "react";
import OrderContextProvider from "@/components/order-context";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className={"space-y-8"}>
      <OrderContextProvider>{children}</OrderContextProvider>
    </section>
  );
}
