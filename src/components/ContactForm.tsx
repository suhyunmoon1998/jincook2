"use client";

import { useState } from "react";

const subjects = [
  "General Question",
  "Feedback",
  "Press",
  "Employment",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col gap-4 bg-beige rounded-xl p-8 text-center">
        <p className="font-brush text-[32px] text-ink">Thank you!</p>
        <p className="font-grotesk text-base text-ink/65">We&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 bg-beige rounded-xl p-8"
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      <p className="font-grotesk text-sm text-ink/65 mb-2">
        Questions, feedback, press inquiries, or employment? We&apos;d love to hear from you.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-grotesk text-base font-medium text-ink mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-md border border-ink/20 bg-background px-3 py-2.5 font-grotesk text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange text-base"
          />
        </div>
        <div>
          <label className="block font-grotesk text-base font-medium text-ink mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full rounded-md border border-ink/20 bg-background px-3 py-2.5 font-grotesk text-base text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
          />
        </div>
      </div>

      <div>
        <label className="block font-grotesk text-base font-medium text-ink mb-1" htmlFor="subject">Subject</label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full rounded-md border border-ink/20 bg-background px-3 py-2.5 font-grotesk text-base text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
        >
          <option value="">Select a topic</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-grotesk text-base font-medium text-ink mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Write your message here..."
          className="w-full rounded-md border border-ink/20 bg-background px-3 py-2.5 font-grotesk text-base text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full font-grotesk font-bold uppercase tracking-[0.08em] transition-all duration-150 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 btn-korean text-ink border-2 border-transparent px-9 py-4 text-[15px]"
      >
        Send Message
      </button>
    </form>
  );
}
