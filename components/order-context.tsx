"use client";

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { OrderItemT } from "@/components/default-menu-form";

type OrderContextT = {
  order: OrderItemT[] | null;
  setOrder: Dispatch<SetStateAction<OrderItemT[] | null>> | null;
};

export const OrderContext = createContext<OrderContextT>({
  order: null,
  setOrder: null,
});

export default function OrderContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [order, setOrder] = useState<OrderItemT[] | null>(null);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
