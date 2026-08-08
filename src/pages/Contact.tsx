import { motion } from 'framer-motion';

import {
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Clock,
  MapPin,
} from 'lucide-react';

import { Link } from 'react-router-dom';

import {
  PHONE_1,
  PHONE_2,
  EMAIL,
  INSTAGRAM,
  WHATSAPP_1,
  WHATSAPP_2,
  WA_MSG,
} from '../data';

export default function Contact() {
  return (
    <div>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 py-20 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-3 block"
        >
          Get In Touch
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-white mb-4"
          style={{ fontFamily: 'Merriweather, serif' }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg max-w-xl mx-auto px-4"
        >
          We're here to help. Reach out via WhatsApp, call, or email —
          we respond fast!
        </motion.p>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

            {/* Call */}
            <ContactCard
              icon={<Phone size={22} />}
              color="bg-blue-50 text-blue-600"
              title="Call Us"
              lines={[PHONE_1, PHONE_2]}
              hrefs={[`tel:${PHONE_1}`, `tel:${PHONE_2}`]}
            />

            {/* WhatsApp */}
            <ContactCard
              icon={<MessageCircle size={22} />}
              color="bg-green-50 text-green-600"
              title="WhatsApp"
              lines={[PHONE_1, PHONE_2]}
              hrefs={[
                `https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`,
                `https://wa.me/${WHATSAPP_2}?text=${WA_MSG}`,
              ]}
              external
            />

            {/* Email */}
            <ContactCard
              icon={<Mail size={22} />}
              color="bg-red-50 text-red-500"
              title="Email Us"
              lines={[EMAIL]}
              hrefs={[`mailto:${EMAIL}`]}
            />

            {/* Instagram */}
            <ContactCard
              icon={<Instagram size={22} />}
              color="bg-pink-50 text-pink-500"
              title="Instagram"
              lines={['@successmakers_01']}
              hrefs={[INSTAGRAM]}
              external
            />

            {/* Office Hours */}
            <ContactCard
              icon={<Clock size={22} />}
              color="bg-amber-50 text-amber-600"
              title="Office Hours"
              lines={['Monday – Saturday', '9:00 AM – 6:00 PM']}
            />

            {/* Offices */}
            <div
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin size={22} />
              </div>

              <h3 className="font-black text-gray-800 mb-4">
                Our Offices
              </h3>

              <div className="space-y-5">

                {/* UP */}
                <div>
                  <p className="font-bold text-gray-800 text-sm mb-1">
                    📍 Uttar Pradesh Office
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Baghel Complex, Opposite MCF Gate No. 3,
                    Shop No. 5 & 6, Raebareli Aihar,
                    Uttar Pradesh.
                  </p>
                </div>

                {/* Chandigarh */}
                <div>
                  <p className="font-bold text-gray-800 text-sm mb-1">
                    📍 Chandigarh Office
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    First Floor, SCO 96, Sector 40C,
                    Sector 40B, Chandigarh, 160036.
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-10 text-center text-white">

            <div className="text-5xl mb-4">💬</div>

            <h2
              className="text-2xl font-black mb-3"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Fastest Way to Reach Us
            </h2>

            <p className="text-white/85 mb-7 max-w-xl mx-auto">
              Our consultants typically reply within minutes on WhatsApp.
              Get instant answers to all your visa questions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">

              <a
                href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 font-black px-8 py-3 rounded-full hover:bg-green-50 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <MessageCircle size={18} />
                Chat — {PHONE_1}
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_2}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 font-black px-8 py-3 rounded-full hover:bg-green-50 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <MessageCircle size={18} />
                Chat — {PHONE_2}
              </a>

            </div>
          </div>

          {/* Apply CTA */}
          <div className="mt-10 text-center bg-blue-50 rounded-3xl p-10">

            <h2 className="section-title">
              Ready to Apply?
            </h2>

            <p className="text-gray-500 mb-7">
              Fill out our quick application form and we'll get back to you
              within 24 hours.
            </p>

            <Link
              to="/apply"
              className="btn-primary px-10 py-4 text-base"
            >
              Start Your Application →
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
}


/* Reusable Contact Card */
function ContactCard({
  icon,
  color,
  title,
  lines,
  hrefs,
  external = false,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
  lines: string[];
  hrefs?: string[];
  external?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
    >
      <div
        className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}
      >
        {icon}
      </div>

      <h3 className="font-black text-gray-800 mb-3">
        {title}
      </h3>

      <div className="space-y-1.5">
        {lines.map((line, index) =>
          hrefs ? (
            <a
              key={index}
              href={hrefs[index]}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="block text-primary-600 font-semibold text-sm hover:text-primary-800 transition-colors"
            >
              {line}
            </a>
          ) : (
            <p
              key={index}
              className="text-gray-600 text-sm"
            >
              {line}
            </p>
          )
        )}
      </div>
    </motion.div>
  );
}