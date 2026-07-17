"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="font-grotesk text-sm text-orange py-1">Thanks for subscribing!</p>
    );
  }

  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      <input
        id="footer-email"
        type="email"
        placeholder="Email address"
        required
        className="flex-1 rounded-md bg-background/10 border border-beige/30 px-3 py-2 font-grotesk text-sm text-background placeholder:text-beige/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
      />
      <button
        type="submit"
        className="btn-korean rounded-full px-5 py-2 font-grotesk text-[11px] font-bold uppercase tracking-[0.08em] text-ink active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
