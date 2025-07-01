"use client";

import { useContext } from "react";
import { OrderContext } from "@/components/order-context";
import { formatPrice } from "@/lib/utils";

export default function DisplayOrder() {
  const { order } = useContext(OrderContext);

  const total = order?.reduce((acc, { price }) => acc + price, 0);

  return (
    <section className={"max-w-xs space-y-1"}>
      <h2 className={"text-lg border-muted-background border-b mb-2 pb-2"}>
        Your Order:
      </h2>
      {order && (
        <>
          {order.map(({ name, price, id }) => (
            <div key={id} className={"flex gap-2 justify-between"}>
              <span>{name}</span>
              <span>{formatPrice(price)}</span>
            </div>
          ))}
        </>
      )}
      <div className={"flex gap-2 justify-end font-semibold"}>
        <span>Total: {formatPrice(total ?? 0)}</span>
      </div>
    </section>
  );
}
