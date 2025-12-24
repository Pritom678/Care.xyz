"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get in Touch with care.xyz
          </h1>
          <p className="text-neutral/80 leading-relaxed">
            Whether you’re looking for trusted care, want to become a caregiver,
            or simply have a question — we’re here to listen and help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-primary w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-neutral/75">+880 1234 567 890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-primary w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-neutral/75">support@care.xyz</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-neutral/75">
                  Serving families with love and care across Bangladesh
                </p>
              </div>
            </div>

            <div className="bg-base-200 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <FaHeart className="text-error w-5 h-5" />
                <h4 className="font-semibold">We Care Deeply</h4>
              </div>
              <p className="text-sm text-neutral/75">
                At care.xyz, every message matters. Our team responds with
                compassion, understanding, and respect — just like our care.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-base-200 p-10 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

            <form className="space-y-5">
              <div>
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full min-h-30"
                  placeholder="How can we help you?"
                />
              </div>

              <button className="btn btn-primary w-full text-base">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
