import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-grotesk text-xs text-beige/40">
          © {new Date().getFullYear()} Jin Cook. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link href="/privacy" className="font-grotesk text-xs text-beige/40 hover:text-beige transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="font-grotesk text-xs text-beige/40 hover:text-beige transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
