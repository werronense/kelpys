import { PropsWithChildren } from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type OrderFormItemProps = PropsWithChildren<{
  label: string;
}>;

export default function OrderFormItem({ label, children }: OrderFormItemProps) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>{children}</FormControl>
      <div className={"h-5"}>
        <FormMessage />
      </div>
    </FormItem>
  );
}
