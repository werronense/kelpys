import { PropsWithChildren } from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type OrderFormItemProps = PropsWithChildren<{
  label: string;
  required?: boolean;
}>;

export default function OrderFormItem({
  label,
  required,
  children,
}: OrderFormItemProps) {
  return (
    <FormItem>
      <FormLabel className={`${required ? "after:content-['*']" : ""}`}>
        {label}
      </FormLabel>
      <FormControl>{children}</FormControl>
      <div className={"h-5"}>
        <FormMessage />
      </div>
    </FormItem>
  );
}
