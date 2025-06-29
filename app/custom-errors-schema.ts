import { z } from "zod/v4";

// validation schema with custom error messages
export const customErrorsSchema = z.object({
  name: z.string({ error: "Name is required" }),
  email: z.email({ error: "Email is required" }),
  phone: z.string({ error: "Phone is required" }),
});

export type CustomErrorsSchemaT = z.infer<typeof customErrorsSchema>;
