"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/lib/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initialState: ContactState = { ok: false };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.ok) {
    return (
      <div className="border border-border bg-secondary/40 px-6 py-8">
        <p className="text-lg tracking-tight">Thank you.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Your enquiry has been received. We will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <Field
        id="name"
        label="Name"
        error={state.fieldErrors?.name}
      >
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          aria-invalid={Boolean(state.fieldErrors?.name)}
          className="h-11 rounded-md border-border bg-transparent"
        />
      </Field>

      <Field
        id="email"
        label="Work email"
        error={state.fieldErrors?.email}
      >
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(state.fieldErrors?.email)}
          className="h-11 rounded-md border-border bg-transparent"
        />
      </Field>

      <Field
        id="company"
        label="Company"
        error={state.fieldErrors?.company}
      >
        <Input
          id="company"
          name="company"
          autoComplete="organization"
          required
          aria-invalid={Boolean(state.fieldErrors?.company)}
          className="h-11 rounded-md border-border bg-transparent"
        />
      </Field>

      <Field
        id="message"
          label="What architecture are you shaping?"
          error={state.fieldErrors?.message}
        >
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            aria-invalid={Boolean(state.fieldErrors?.message)}
            className="rounded-md border-border bg-transparent"
          />
        </Field>

      {state.error && !state.fieldErrors ? (
        <p className="text-sm text-destructive" role="alert">
          {state.error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={pending}
        className="h-11 rounded-full px-6"
      >
        {pending ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-base font-normal">
        {label}
      </Label>
      {children}
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
