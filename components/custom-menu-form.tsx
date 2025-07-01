"use client";

import { useContext } from "react";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { menu } from "@/data/menu";
import { OrderContext } from "@/components/order-context";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/utils";

const orderItemSchema = z.object({
  name: z.string(),
  id: z.number(),
  price: z.number(),
});

const orderSchema = z.object({
  order: orderItemSchema.array().refine((value) => value.some((item) => item), {
    error: "Choose at least one item.",
  }),
});

export type OrderT = z.infer<typeof orderSchema>;

export default function CustomMenuForm() {
  const { setOrder } = useContext(OrderContext);
  const router = useRouter();

  const form = useForm<OrderT>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      order: [],
    },
  });

  const { handleSubmit, control, watch } = form;

  const total = watch("order").reduce((acc, item) => acc + item.price, 0);

  function onSubmit(values: OrderT) {
    if (setOrder) {
      setOrder(values.order);
    }

    router.push("/form-custom/confirm");
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={"max-w-xs"}>
        <FormField
          control={control}
          name={"order"}
          render={() => (
            <FormItem>
              <div className={"flex gap-2 items-end"}>
                <FormLabel className={"text-xl"}>Your Order</FormLabel>
                <FormMessage className={"mb-0.5"} />
              </div>
              {menu.map(({ heading, options }) => {
                return (
                  <section key={heading} className={"space-y-2 mt-2"}>
                    <h2>{heading}</h2>
                    {options.map((option) => (
                      <FormField
                        key={option.id}
                        control={control}
                        name={"order"}
                        render={({ field }) => (
                          <FormItem className={"flex gap-2"}>
                            <FormControl>
                              <Checkbox
                                checked={field.value?.some(
                                  (item) => item.id === option.id,
                                )}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, option])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value.id !== option.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className={"w-full justify-between"}>
                              <span>{option.name}</span>
                              <span>{formatPrice(option.price)}</span>
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </section>
                );
              })}
            </FormItem>
          )}
        />
        <div className={"flex flex-col gap-4 items-end mt-4"}>
          <p className={"font-semibold text-sm"}>Total: {formatPrice(total)}</p>
          <Button type="submit">Place Order</Button>
        </div>
      </form>
    </Form>
  );
}
