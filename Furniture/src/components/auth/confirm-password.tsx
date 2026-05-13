import { Armchair, Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Link } from "react-router";
import { useState } from "react";
const formSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(32, "Password must be at most 32 characters.")
    .regex(/^\d+$/, "Password is invalid."),
  // .regex(/[0-9]/),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(32, "Password must be at most 32 characters.")
    .regex(/^\d+$/, "Password is invalid."),
  // .regex(/[0-9]/),
});
export function PasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form id="password" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <Link
              to="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <Armchair className="size-6" />
              </div>
              <span className="sr-only">Furniture Shop</span>
            </Link>
            <h1 className="text-xl font-bold">Welcome to Furniture Shop</h1>
          </div>

          <Field>
            <Field className="grid ">
              <Field>
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex items-center">
                        <FieldLabel htmlFor="form-rhf-demo-title">
                          Password
                        </FieldLabel>
                      </div>
                      <InputGroup>
                        <InputGroupInput
                          {...field}
                          aria-invalid={fieldState.invalid}
                          autoComplete="off"
                          type={showPassword ? "text" : "password"}
                          required
                        />
                        <InputGroupAddon align="inline-end">
                          <InputGroupButton
                            aria-label="Copy"
                            title="Copy"
                            size="icon-xs"
                            onClick={() => {
                              setShowPassword((prev) => !prev);
                            }}
                          >
                            {showPassword ? <EyeOff /> : <Eye />}
                          </InputGroupButton>
                        </InputGroupAddon>
                      </InputGroup>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="confirm-password">
                  Confirm Password
                </FieldLabel>
                <Controller
                  name="confirmPassword"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <InputGroup>
                        <InputGroupInput
                          {...field}
                          aria-invalid={fieldState.invalid}
                          autoComplete="off"
                          type={showPasswordConfirm ? "text" : "password"}
                          required
                        />
                        <InputGroupAddon align="inline-end">
                          <InputGroupButton
                            aria-label="Copy"
                            title="Copy"
                            size="icon-xs"
                            onClick={() => {
                              setShowPasswordConfirm((prev) => !prev);
                            }}
                          >
                            {showPasswordConfirm ? <EyeOff /> : <Eye />}
                          </InputGroupButton>
                        </InputGroupAddon>
                      </InputGroup>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </Field>
            </Field>
          </Field>
          <Field>
            <Button type="submit" form="password">
              Create Account
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <Link to="#">Terms of Service</Link> and{" "}
        <Link to="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
