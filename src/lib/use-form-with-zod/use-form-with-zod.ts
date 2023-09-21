import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps, useForm } from "react-hook-form";
import { z } from "zod";

interface UseFormWithZodOptions<TSchema extends z.AnyZodObject>
  extends Omit<UseFormProps<z.infer<TSchema>>, "resolver"> {
  /**
   * A z.object used for validation of the form.
   */
  schema: TSchema;
}

/**
 * An extended `useForm` that incorporates Zod validation in the `schema`, inferring types
 * for type safe values and errors.
 */
export const useFormWithZod = <TSchema extends z.AnyZodObject>({
  schema,
  ...options
}: UseFormWithZodOptions<TSchema>) =>
  useForm<z.infer<TSchema>>({
    ...options,
    resolver: zodResolver(schema),
  });
