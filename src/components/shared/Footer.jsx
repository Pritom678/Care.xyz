"use client";

import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-neutral ">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed">
            Gentle, reliable care for children and elderly. Trusted caregivers
            bringing comfort, dignity, and peace of mind.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-primary" href="/services/child-care">
                Child Care
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/services/elder-care">
                Elder Care
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary"
                href="/services/home-nursing"
              >
                Home Nursing
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/services/therapy">
                Therapy Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-primary" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/caregivers">
                Our Caregivers
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/terms">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>📞 +880 1XXX-XXXXXX</li>
            <li>✉️ support@care.xyz</li>
            <li>📍 Dhaka, Bangladesh</li>
          </ul>

          <Link
            href="/book-care"
            className="btn btn-primary btn-sm rounded-full mt-5"
          >
            Book Care
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
          <p>© {new Date().getFullYear()} care.xyz. All rights reserved.</p>
          <p className="text-primary">Made with ❤️ for families</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
