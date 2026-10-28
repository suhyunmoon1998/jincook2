import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-grotesk text-xs text-beige/65">
          © {new Date().getFullYear()} Jin Cook. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          <Link href="/order" className="font-grotesk text-xs text-beige/65 hover:text-beige transition-colors">
            Order
          </Link>
          <Link href="/contact" className="font-grotesk text-xs text-beige/65 hover:text-beige transition-colors">
            Locations
          </Link>
          <Link href="/privacy" className="font-grotesk text-xs text-beige/65 hover:text-beige transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="font-grotesk text-xs text-beige/65 hover:text-beige transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
