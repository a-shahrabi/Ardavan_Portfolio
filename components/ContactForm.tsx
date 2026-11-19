"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-5 py-3 text-base text-gray-900 outline-hidden transition-colors focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-zinc-800 dark:text-gray-100 dark:focus:ring-blue-400";
const labelClass = "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const res = await fetch(profile.formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-green-200 bg-green-50 p-6 text-green-800 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300"
      >
        <p className="font-medium">Thanks for reaching out!</p>
        <p className="mt-1 text-sm">Your message was sent. I&apos;ll get back to you soon.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input type="email" id="email" name="email" required autoComplete="email" className={inputClass} placeholder="YourEmail@Example.com" />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <input type="text" id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>Subject</label>
        <input type="text" id="subject" name="subject" className={inputClass} placeholder="How can I help you?" />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" name="message" rows={5} required className={inputClass} placeholder="Your message..." />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          Something went wrong sending your message. Please try again, or email me directly at{" "}
          <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-linear-to-r from-slate-900 to-blue-700 px-6 py-2 text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 dark:from-blue-600 dark:to-slate-800"
      >
        {status === "submitting" ? (
          <span className="flex items-center">
            <svg className="-ml-1 mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
