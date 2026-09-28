"use client";

import { FormEvent, useState } from "react";

const SUPABASE_URL = "https://iykqwlxgzwhbrirnduif.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_lCknoD-sYSqA0sezaSR32w_DUI5ngYH";

export default function BetaSignupForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") || "")) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("sending");

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      business_type: String(data.get("business_type") || "").trim(),
      field_work_type: String(data.get("field_work_type") || "").trim(),
      testing_notes: String(data.get("testing_notes") || "").trim() || null,
    };

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/beta_testers`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Signup failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="beta-form" onSubmit={handleSubmit}>
      <div className="beta-form-grid">
        <label>
          <span>Your name</span>
          <input name="name" type="text" maxLength={100} autoComplete="name" required />
        </label>

        <label>
          <span>Email</span>
          <input name="email" type="email" maxLength={254} autoComplete="email" required />
        </label>

        <label>
          <span>Business type</span>
          <input
            name="business_type"
            type="text"
            maxLength={120}
            placeholder="Cleaning, handyman, lawn care..."
            required
          />
        </label>

        <label>
          <span>What kind of field work do you do?</span>
          <input name="field_work_type" type="text" maxLength={200} required />
        </label>
      </div>

      <label className="beta-notes">
        <span>What would you like to test or improve?</span>
        <textarea
          name="testing_notes"
          rows={5}
          maxLength={2000}
          placeholder="Tell us what matters most in your workday."
        />
      </label>

      <label className="beta-honeypot" aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="beta-submit-row">
        <button className="button primary beta-submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Apply to Beta Test"}
        </button>
        <p className="beta-privacy">
          Your information is used only to contact you about Field Manager beta testing.
        </p>
      </div>

      <div className="beta-status" aria-live="polite">
        {status === "success" && (
          <p className="beta-success">You&apos;re on the list. Thanks for helping us build Field Manager.</p>
        )}
        {status === "error" && (
          <p className="beta-error">That didn&apos;t go through. Please try again in a moment.</p>
        )}
      </div>
    </form>
  );
}
