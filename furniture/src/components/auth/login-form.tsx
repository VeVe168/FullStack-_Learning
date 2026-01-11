import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Link } from "react-router";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  phone: z
    .string()
    .min(7, "Phone Number is too short!")
    .max(12, "Phone Number is too long")
    .regex(/^\d+$/, "Phone Number is invalid."),
  password: z
    .string()
    .min(8, "Password must be 8 digit long.")
    .max(8, "Password must be 8 digit long.")
    .regex(/^\d+$/, "Password is invalid."),
  // .regex(/[0-9]/,"Password must contain at least one digit.")
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }
  return (
    <form
      id="login-form"
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your Phone below to login to your account
          </p>
        </div>
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-demo-title">
                Phone Number
              </FieldLabel>
              <Input
                {...field}
                id="form-rhf-demo-title"
                aria-invalid={fieldState.invalid}
                placeholder="09778******"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center">
                <FieldLabel htmlFor="form-rhf-demo-title">Password</FieldLabel>
                <Link
                  to=""
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                {...field}
                id="form-rhf-demo-title"
                aria-invalid={fieldState.invalid}
                type="password"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Field>
          <Button type="submit" form="login-form">
            Login
          </Button>
        </Field>
        <FieldDescription className="text-center">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="underline underline-offset-4">
            Sign up
          </Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
