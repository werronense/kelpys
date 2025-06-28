"use client";

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

const orderSchema = z.object({
  order: z.array(z.number()).refine((value) => value.some((item) => item)),
});

type OrderT = z.infer<typeof orderSchema>;

export default function DefaultMenuForm() {
  const form = useForm<OrderT>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      order: [],
    },
  });

  const { handleSubmit, control } = form;

  function onSubmit(values: OrderT) {
    console.log(JSON.stringify(values));
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
                  <section key={heading} className={"space-y-2"}>
                    <h2>{heading}</h2>
                    {options.map(({ name, id }) => (
                      <FormField
                        key={id}
                        control={control}
                        name={"order"}
                        render={({ field }) => (
                          <FormItem className={"flex gap-2"}>
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel>{name}</FormLabel>
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
        <Button type="submit" className={"mt-4"}>
          Place Order
        </Button>
      </form>
    </Form>
  );
}
