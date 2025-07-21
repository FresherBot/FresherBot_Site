import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#fff0f3] via-[#fdf4f5] to-white text-rose-700 border-t border-rose-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-rose-900">FresherBot</h3>
            <p className="mb-4 text-rose-700">
              Connecting talented freshers with the right opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-rose-400 hover:text-rose-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-rose-400 hover:text-rose-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-rose-400 hover:text-rose-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-rose-400 hover:text-rose-700 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-rose-900">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/assessments" className="hover:text-rose-900 transition-colors">Assessments</Link></li>
              <li><Link to="/proctoring" className="hover:text-rose-900 transition-colors">Proctoring</Link></li>
              <li><Link to="/analytics" className="hover:text-rose-900 transition-colors">Analytics</Link></li>
              <li><Link to="/integrations" className="hover:text-rose-900 transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-rose-900">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-rose-900 transition-colors">Blog</Link></li>
              <li><Link to="/guides" className="hover:text-rose-900 transition-colors">Guides</Link></li>
              <li><Link to="/case-studies" className="hover:text-rose-900 transition-colors">Case Studies</Link></li>
              <li><Link to="/help-center" className="hover:text-rose-900 transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-rose-900">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-rose-900 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-rose-900 transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-rose-900 transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-rose-900 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-rose-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rose-200 mt-12 pt-8 text-center text-sm text-rose-500">
          <p>&copy; {currentYear} FresherBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
