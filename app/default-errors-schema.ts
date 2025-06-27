import { z } from "zod";

// basic validation schema with default error messages
export const defaultErrorsSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

export type DefaultErrorsSchemaT = z.infer<typeof defaultErrorsSchema>;
