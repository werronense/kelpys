"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import OrderFormItem from "@/components/order-form-item";
import { Input } from "@/components/ui/input";
import {
  defaultErrorsSchema,
  DefaultErrorsSchemaT,
} from "@/app/default-errors-schema";
import { useRouter } from "next/navigation";

export default function DefaultOrderForm() {
  const router = useRouter();

  const form = useForm<DefaultErrorsSchemaT>({
    resolver: zodResolver(defaultErrorsSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const { handleSubmit, control } = form;

  function onSubmit(values: DefaultErrorsSchemaT) {
    router.push("/form-defaults/success");
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={"max-w-xs space-y-3"}>
        <FormField
          control={control}
          name={"name"}
          render={({ field }) => (
            <OrderFormItem label={"Name"}>
              <Input {...field} />
            </OrderFormItem>
          )}
        />
        <FormField
          control={control}
          name={"email"}
          render={({ field }) => (
            <OrderFormItem label={"Email address"}>
              <Input {...field} />
            </OrderFormItem>
          )}
        />
        <FormField
          control={control}
          name={"phone"}
          render={({ field }) => (
            <OrderFormItem label={"Phone number"}>
              <Input {...field} />
            </OrderFormItem>
          )}
        />
        <Button type={"submit"}>Submit</Button>
      </form>
    </Form>
  );
}
