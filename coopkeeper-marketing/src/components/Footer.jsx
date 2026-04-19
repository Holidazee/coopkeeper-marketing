import BrandMark from "./BrandMark.jsx";
import { DASHBOARD_URL, SIGNUP_URL } from "../config.js";

export default function Footer() {
  return (
    <footer className="border-t border-warm-border bg-off-white">
      <div className="container-page py-12 md:py-16">
        {/* CTA strip */}
        <div className="rounded-xl3 bg-white border border-warm-border p-8 md:p-10 shadow-card flex flex-col md:flex-row md:items-center gap-6 md:gap-10 justify-between mb-12">
          <div className="max-w-xl">
            <div className="font-display text-2xl md:text-3xl font-semibold text-ink leading-tight">
              Give your chickens a calmer coop keeper.
            </div>
            <p className="mt-2 text-warm-gray">
              Free while we're in early access. Bring your flock over in a
              minute flat.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={SIGNUP_URL} className="btn btn-primary">
              Start free
            </a>
            <a href={DASHBOARD_URL} className="btn btn-ghost">
              Log in
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          <div className="col-span-2">
            <a href="#top" className="inline-flex items-center gap-2 no-underline">
              <BrandMark size={32} />
              <span className="font-display font-bold text-lg text-ink">CoopKeeper</span>
            </a>
            <p className="mt-3 text-sm text-warm-gray max-w-xs leading-relaxed">
              A calm little dashboard for backyard chicken keepers. Made by a
              small team that really likes chickens.
            </p>
          </div>

          <FooterCol title="Product">
            <FooterLink href="#features">Features</FooterLink>
            <FooterLink href="#how">How it works</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href={DASHBOARD_URL}>Log in</FooterLink>
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink href="mailto:hello@coopkeeper.net">Contact</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-12 pt-6 border-t border-warm-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-warm-gray-light">
          <div>
            © {new Date().getFullYear()} CoopKeeper. Made with ☕ for happy flocks.
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter / X" className="hover:text-ink transition-colors">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-ink transition-colors">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-wider text-warm-gray-light">
        {title}
      </div>
      <ul className="mt-3 space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-warm-gray hover:text-ink transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 3h3l-7.5 8.6L22 21h-7l-5-6.2L4 21H1l8-9.2L1.5 3H9l4.5 5.8L18 3z" fill="currentColor" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
