import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  MapPin,
} from 'lucide-react';

import {
  PHONE_1,
  PHONE_2,
  EMAIL,
  INSTAGRAM,
  WHATSAPP_1,
  WHATSAPP_2,
  WA_MSG,
} from '../../data';

import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo />

              <div>
                <div
                  className="font-black text-white text-base leading-none"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  Successmakerz
                </div>

                <div className="text-white/50 text-xs mt-1">
                  Your Dream Our Mission
                </div>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Trusted visa consultancy in Punjab offering genuine guidance
              for tourist visa, study visa & work permit across 10+ countries.
            </p>

            <div className="flex gap-3">

              <a
                href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-400 transition-colors"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <Mail size={18} />
              </a>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Services', '/services'],
                ['Countries', '/countries'],
                ['Contact Us', '/contact'],
                ['Apply Now', '/apply'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-white mb-5 text-sm uppercase tracking-wider">
              Our Services
            </h4>

            <ul className="space-y-2.5">
              {[
                ['✈️ Tourist Visa', '/services/tourist'],
                ['🎓 Study Visa', '/services/study'],
                ['💼 Work Permit', '/services/work'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li className="pt-2 border-t border-white/10">
                <p className="text-white/40 text-xs mb-2">
                  Countries We Serve:
                </p>

                <p className="text-white/60 text-xs leading-relaxed">
                  Canada • Australia • UK • Dubai • Schengen • New Zealand •
                  Russia • Israel • Korea • Japan
                </p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-white mb-5 text-sm uppercase tracking-wider">
              Contact Us
            </h4>

            <ul className="space-y-4">

              <li>
                <a
                  href={`tel:${PHONE_1}`}
                  className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Phone size={14} />
                  {PHONE_1}
                </a>
              </li>

              <li>
                <a
                  href={`tel:${PHONE_2}`}
                  className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Phone size={14} />
                  {PHONE_2}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Mail size={14} />
                  {EMAIL}
                </a>
              </li>

              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-green-400 hover:text-green-300 text-sm transition-colors"
                >
                  <MessageCircle size={14} />
                  WhatsApp — {PHONE_1}
                </a>
              </li>

              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_2}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-green-400 hover:text-green-300 text-sm transition-colors"
                >
                  <MessageCircle size={14} />
                  WhatsApp — {PHONE_2}
                </a>
              </li>

              {/* UP Office */}
              <li className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin size={16} className="mt-1 shrink-0 text-primary-400" />

                <span className="leading-relaxed">
                  <strong className="text-white block mb-1">
                    Uttar Pradesh Office
                  </strong>

                  Baghel Complex, Opposite MCF Gate No. 3,
                  Shop No. 5 & 6, Raebareli Aihar,
                  Uttar Pradesh.
                </span>
              </li>

              {/* Chandigarh Office */}
              <li className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin size={16} className="mt-1 shrink-0 text-primary-400" />

                <span className="leading-relaxed">
                  <strong className="text-white block mb-1">
                    Chandigarh Office
                  </strong>

                  First Floor, SCO 96, Sector 40C,
                  Sector 40B, Chandigarh, 160036.
                </span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-white/40 text-xs text-center md:text-left">
            © 2024 Successmakerz. All Rights Reserved. | Best Visa Consultant
            in Punjab
          </p>

          <p className="text-white/30 text-xs text-center">
            Tourist Visa | Study Visa | Work Permit | Canada | Australia | UK |
            Dubai
          </p>

        </div>
      </div>
    </footer>
  );
}