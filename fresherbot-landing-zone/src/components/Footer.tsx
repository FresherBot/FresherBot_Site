import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#fff1f5] via-[#fef2f4] to-white text-rose-700 border-t border-rose-200 shadow-inner">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo + Intro */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-3 text-rose-900">FresherBot</h3>
            <p className="mb-4 text-rose-700 text-sm leading-relaxed">
              Empowering freshers with AI-driven tools to unlock top tech careers.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={Icon.name}
                  className="p-1.5 rounded-full bg-white/60 hover:bg-white/80 text-rose-500 hover:text-rose-800 shadow-sm transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-rose-900">Products</h4>
            <ul className="space-y-1.5">
              {[
                { label: "Assessments", href: "/assessments" },
                { label: "Proctoring", href: "/proctoring" },
                { label: "Analytics", href: "/analytics" },
                { label: "Integrations", href: "/integrations" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-sm transition-all hover:text-rose-900 hover:pl-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-rose-900">Resources</h4>
            <ul className="space-y-1.5">
              {[
                { label: "Blog", href: "/blog" },
                { label: "Guides", href: "/guides" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Help Center", href: "/help-center" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-sm transition-all hover:text-rose-900 hover:pl-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-rose-900">Company</h4>
            <ul className="space-y-1.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Careers", href: "/careers" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-sm transition-all hover:text-rose-900 hover:pl-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-rose-200 mt-8 pt-6 text-center text-xs text-rose-500">
          &copy; {currentYear} <span className="font-medium text-rose-700">FresherBot</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;