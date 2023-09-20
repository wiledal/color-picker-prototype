import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps, useForm } from "react-hook-form";
import { z } from "zod";

interface UseFormWithZodOptions<TSchema extends z.AnyZodObject>
  extends UseFormProps<z.infer<TSchema>> {
  schema: TSchema;
}

export const useFormWithZod = <TSchema extends z.AnyZodObject>({
  schema,
  ...options
}: UseFormWithZodOptions<TSchema>) =>
  useForm<z.infer<TSchema>>({
    ...options,
    resolver: zodResolver(schema),
  });
