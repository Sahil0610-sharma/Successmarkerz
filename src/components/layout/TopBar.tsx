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
  WA_MSG,
} from '../../data';

export default function TopBar() {
  return (
    <div className="topbar relative z-[60] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          {/* ================================
              LEFT SIDE
          ================================= */}
          <div className="flex flex-col gap-3">

            {/* Phone + Email */}
            <div className="flex items-center flex-wrap gap-x-5 gap-y-2">

              <a
                href={`tel:${PHONE_1}`}
                className="topbar-link"
              >
                <Phone size={15} />
                <span>{PHONE_1}</span>
              </a>

              <span className="topbar-divider hidden sm:block" />

              <a
                href={`tel:${PHONE_2}`}
                className="topbar-link"
              >
                <Phone size={15} />
                <span>{PHONE_2}</span>
              </a>

              <span className="topbar-divider hidden sm:block" />

              <a
                href={`mailto:${EMAIL}`}
                className="topbar-link"
              >
                <Mail size={15} />
                <span>{EMAIL}</span>
              </a>

            </div>

            {/* Timing + Instagram + WhatsApp */}
            <div className="flex items-center flex-wrap gap-x-5 gap-y-2">

              <span className="topbar-muted">
                Mon–Sat: 9AM – 6PM
              </span>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-link"
              >
                <Instagram size={15} />
                <span>@successmakers_01</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-whatsapp"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>

            </div>

          </div>


          {/* ================================
              RIGHT SIDE - ADDRESSES
          ================================= */}
          <div className="topbar-addresses">

            {/* UP */}
            <div className="topbar-address">

              <div className="topbar-pin">
                <MapPin size={16} />
              </div>

              <div>
                <span className="topbar-address-title">
                  UP Office
                </span>

                <p>
                  Baghel Complex, Opposite MCF Gate No. 3,
                  Shop No. 5 & 6, Raebareli Aihar,
                  Uttar Pradesh
                </p>
              </div>

            </div>


            {/* Chandigarh */}
            <div className="topbar-address">

              <div className="topbar-pin">
                <MapPin size={16} />
              </div>

              <div>
                <span className="topbar-address-title">
                  Chandigarh Office
                </span>

                <p>
                  First Floor, SCO 96, Sector 40C,
                  Sector 40B, Chandigarh, 160036
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}