import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../hooks/useDarkMode";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["home", "solutions", "about", "join", "contact"];
      const scrollPosition = window.scrollY + 100;

      // التحقق من أن المستخدم في أعلى الصفحة
      if (window.scrollY < 50) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };

  // إغلاق القوائم عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangOpen && !event.target.closest(".language-dropdown")) {
        setIsLangOpen(false);
      }
      if (isSolutionsOpen && !event.target.closest(".solutions-dropdown")) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLangOpen, isSolutionsOpen]);

  // عناصر الـ Dropdown للحلول
  const solutionsDropdownItems = [
    { label: t("solutions.riskManagement"), href: "#solutions" },
    { label: t("solutions.verification"), href: "#solutions" },
    { label: t("solutions.functionalSafety"), href: "#solutions" },
    { label: t("solutions.rams"), href: "#solutions" },
    { label: t("solutions.cybersecurity"), href: "#solutions" },
    { label: t("solutions.software"), href: "#solutions" },
  ];

  const navItems = [
    { key: "home", label: t("nav.home"), onClick: scrollToTop, href: "#" },
    { key: "solutions", label: t("nav.solutions"), hasDropdown: true, href: "#solutions" },
    { key: "about", label: t("nav.about"), href: "#about" },
    { key: "join", label: t("nav.join"), href: "#join" },
    { key: "contact", label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#1E4A76] via-[#2A5F8A] to-[#3A7CA5] shadow-lg py-2"
          : "bg-gradient-to-r from-[#1E4A76] via-[#2A5F8A] to-[#3A7CA5] py-3"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-14">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="relative">
              <div className="w-9 h-9 md:w-17.5 md:h-16 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <img
                  src="/logo.jpg"
                  alt="Alldeltas Logo"
                  className="relative bottom-1 left-0 w-6 h-6 md:w-12.5 md:h-12.5 object-center"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-[#356dcd] opacity-100 transition-all duration-300 scale-100"></div>
            </div>

            <div className="w-px h-12.5 bg-white/30 hidden sm:block"></div>

            <div className="hidden sm:block">
              <h1 className="text-white text-sm md:text-2xl font-semibold tracking-wide">
                Alldeltas
              </h1>
              <p className="text-white/60 text-[8px] md:text-[10px] tracking-[0.3em] uppercase mt-0.5">
                CONSULTING
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <div key={item.key} className="relative">
                {item.hasDropdown ? (
                  <>
                    <button
                      onMouseEnter={() => setIsSolutionsOpen(true)}
                      onMouseLeave={() => setIsSolutionsOpen(false)}
                      onClick={() => {
                        window.location.href = item.href;
                        setActiveSection(item.key);
                      }}
                      className={`relative text-[19px] font-medium transition-colors duration-300 py-1 group ${
                        activeSection === item.key
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <svg
                        className="inline-block ml-1 w-3 h-3 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                          activeSection === item.key
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </button>

                    {/* Dropdown Menu */}
                    {isSolutionsOpen && (
                      <div
                        className="solutions-dropdown absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 border border-gray-200 dark:border-gray-700"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                      >
                        {solutionsDropdownItems.map((sol, idx) => (
                          <a
                            key={idx}
                            href={sol.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#1E4A76] dark:hover:text-[#5A9AC5] transition-colors"
                            onClick={() => setActiveSection("solutions")}
                          >
                            {sol.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    className={`relative text-[19px] font-medium transition-colors duration-300 py-1 group ${
                      activeSection === item.key
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                        activeSection === item.key
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:block bg-white text-[#1E4A76] px-9 py-3.5 rounded-md font-semibold text-[16px] hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
            >
              {t("nav.contact")}
            </a>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggle}
              className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Language Switcher */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-2 py-1.5 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10"
                aria-label="Change language"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="text-sm font-medium">
                  {i18n.language === "en" ? "EN" : i18n.language === "ar" ? "AR" : "DE"}
                </span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 border border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => { i18n.changeLanguage("en"); setIsLangOpen(false); }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      i18n.language === "en"
                        ? "bg-gray-100 dark:bg-gray-700 text-[#1E4A76] dark:text-[#5A9AC5] font-semibold"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    🇬🇧 English
                  </button>
                  <button
                    onClick={() => { i18n.changeLanguage("ar"); setIsLangOpen(false); }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      i18n.language === "ar"
                        ? "bg-gray-100 dark:bg-gray-700 text-[#1E4A76] dark:text-[#5A9AC5] font-semibold"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    🇸🇦 العربية
                  </button>
                  <button
                    onClick={() => { i18n.changeLanguage("de"); setIsLangOpen(false); }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      i18n.language === "de"
                        ? "bg-gray-100 dark:bg-gray-700 text-[#1E4A76] dark:text-[#5A9AC5] font-semibold"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    🇩🇪 Deutsch
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 text-white hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/20">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) item.onClick(e);
                  setIsMenuOpen(false);
                }}
                className={`block py-2 transition-colors text-sm ${
                  activeSection === item.key
                    ? "text-white font-medium"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-2 bg-white text-[#1E4A76] text-center px-4 py-1.5 rounded-md font-medium text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;