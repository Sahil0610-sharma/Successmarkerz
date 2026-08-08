import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const NAV = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    sub: [
      { label: '✈️ Tourist Visa', path: '/services/tourist' },
      { label: '🎓 Study Visa', path: '/services/study' },
      { label: '💼 Work Permit', path: '/services/work' },
    ],
  },
  { label: 'Countries', path: '/countries' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', fn);

    return () => {
      window.removeEventListener('scroll', fn);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(false);
  }, [location]);

  const isActive = (path: string) =>
    location.pathname === path ||
    location.pathname.startsWith(path + '/');

  return (
    <header
      className={`
        sticky top-0 z-50
        bg-white/95 backdrop-blur-xl
        transition-all duration-300
        ${scrolled
          ? 'shadow-[0_8px_30px_rgba(15,31,61,0.10)]'
          : 'border-b border-gray-100'
        }
      `}
    >

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <div className="h-[82px] flex items-center justify-between gap-6">

          {/* =========================
              LOGO
          ========================== */}
          <Link
            to="/"
            className="shrink-0 flex items-center gap-3 group"
          >
            <Logo />

            <div className="flex flex-col justify-center">
              <div
                className="font-black text-primary-900 text-xl leading-none"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Successmakerz
              </div>

              <div className="text-gray-400 text-sm font-semibold leading-tight mt-1">
                Your Dream Our Mission
              </div>
            </div>
          </Link>


          {/* =========================
              DESKTOP NAV
          ========================== */}
          <nav className="hidden lg:flex items-center gap-1">

            {NAV.map(item => (

              item.sub ? (

                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >

                  <button
                    className={`
                      nav-item
                      ${isActive(item.path)
                        ? 'nav-item-active'
                        : ''
                      }
                    `}
                  >
                    {item.label}

                    <ChevronDown
                      size={15}
                      className={`
                        transition-transform duration-200
                        ${dropdown ? 'rotate-180' : ''}
                      `}
                    />
                  </button>


                  <AnimatePresence>
                    {dropdown && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 8,
                          scale: 0.98,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: 8,
                          scale: 0.98,
                        }}
                        transition={{ duration: 0.18 }}
                        className="
                          absolute
                          top-full
                          left-0
                          mt-3
                          w-56
                          rounded-2xl
                          bg-white
                          border border-gray-100
                          shadow-[0_20px_50px_rgba(15,31,61,0.14)]
                          p-2
                        "
                      >

                        <div className="px-3 py-2 mb-1">
                          <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-gray-400">
                            Our Services
                          </p>
                        </div>

                        {item.sub.map(s => (

                          <Link
                            key={s.path}
                            to={s.path}
                            className={`
                              block
                              px-4
                              py-3
                              rounded-xl
                              text-sm
                              font-semibold
                              transition-all
                              ${isActive(s.path)
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                              }
                            `}
                          >
                            {s.label}
                          </Link>

                        ))}

                      </motion.div>

                    )}
                  </AnimatePresence>

                </div>

              ) : (

                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    nav-item
                    ${isActive(item.path)
                      ? 'nav-item-active'
                      : ''
                    }
                  `}
                >
                  {item.label}
                </Link>

              )

            ))}

          </nav>


          {/* =========================
              CTA
          ========================== */}
          <div className="hidden lg:flex items-center">

            <Link
              to="/apply"
              className="navbar-cta"
            >
              <span>Apply Now</span>
              <span className="text-lg leading-none">→</span>
            </Link>

          </div>


          {/* =========================
              MOBILE BUTTON
          ========================== */}
          <button
            onClick={() => setOpen(!open)}
            className="
              lg:hidden
              w-11
              h-11
              rounded-xl
              flex
              items-center
              justify-center
              text-gray-700
              bg-gray-50
              border border-gray-100
              hover:bg-primary-50
              hover:text-primary-600
              transition-all
            "
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

      </div>


      {/* =========================
          MOBILE MENU
      ========================== */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="
              lg:hidden
              overflow-hidden
              bg-white
              border-t
              border-gray-100
              shadow-xl
            "
          >

            <div className="max-w-7xl mx-auto px-4 py-5">

              <div className="flex flex-col gap-1">

                {NAV.map(item => (

                  <div key={item.label}>

                    <Link
                      to={item.path}
                      className={`
                        block
                        px-4
                        py-3
                        rounded-xl
                        font-bold
                        text-sm
                        transition-all
                        ${isActive(item.path)
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-700 hover:bg-gray-50'
                        }
                      `}
                    >
                      {item.label}
                    </Link>


                    {item.sub && (

                      <div className="ml-4 mt-1 mb-1 pl-3 border-l-2 border-primary-100">

                        {item.sub.map(s => (

                          <Link
                            key={s.path}
                            to={s.path}
                            className={`
                              block
                              px-4
                              py-2.5
                              rounded-lg
                              text-sm
                              transition-colors
                              ${isActive(s.path)
                                ? 'bg-primary-50 text-primary-700 font-semibold'
                                : 'text-gray-500 hover:bg-gray-50'
                              }
                            `}
                          >
                            {s.label}
                          </Link>

                        ))}

                      </div>

                    )}

                  </div>

                ))}


                <Link
                  to="/apply"
                  className="
                    btn-primary
                    mt-4
                    justify-center
                    py-3
                    shadow-md
                  "
                >
                  Apply Now →
                </Link>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}