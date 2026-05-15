"use client";

import { useState } from "react";

// To activate this form:
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form — set the email to info@prospectma.com
// 3. Copy your form ID (looks like "xyzabcde") and replace FORMSPREE_FORM_ID below
const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORMSPREE_FORM_ID";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl p-10 text-center shadow-sm"
        style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
      >
        <p className="text-2xl font-extrabold mb-2" style={{ color: "#003B6F" }}>
          Message Received!
        </p>
        <p className="text-gray-600">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(203) 555-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What would you like to know?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 font-medium">
          Something went wrong. Please try again or text us at (203) 441-5358.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{ backgroundColor: "#E22D33" }}
        className="w-full text-white font-bold text-base py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      <p className="text-center text-xs text-gray-400">
        Prefer a faster response? Text us at{" "}
        <a href="tel:2034415358" className="underline">
          (203) 441-5358
        </a>
      </p>
    </form>
  );
}
