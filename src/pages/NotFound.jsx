import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, Home, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const quickLinks = [
    { label: isAr ? "الرئيسية" : "Home", href: "/", icon: Home },
    { label: isAr ? "حلولنا" : "Our Solutions", href: "/#solutions" },
    { label: isAr ? "من نحن" : "About Us", href: "/#about" },
    { label: isAr ? "اتصل بنا" : "Contact Us", href: "/#contact" },
  ];

  return (
    <>
      <Helmet>
        <title>404 | Alldeltas Consulting</title>
      </Helmet>

      <div
        className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-6 py-20"
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#1E4A76]/3"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#2A5F8A]/3"></div>
        </div>

        <div className="relative z-10 text-center max-w-lg w-full">
          {/* Delta symbol — large decorative */}
          <div className="relative mb-8">
            <span
              className="text-[10rem] font-bold leading-none select-none block"
              style={{
                background:
                  "linear-gradient(135deg, #1E4A76 0%, #3A7CA5 50%, #1E4A76 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: 0.15,
                lineHeight: 1,
              }}
            >
              Δ
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-7xl font-bold text-[#1E4A76]">404</p>
              </div>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
            {isAr ? "الصفحة غير موجودة" : "Page Not Found"}
          </h1>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-8 max-w-sm mx-auto">
            {isAr
              ? "الصفحة التي تبحث عنها غير موجودة أو تم نقلها. تحقق من الرابط أو استخدم أحد الروابط أدناه."
              : "The page you are looking for doesn't exist or has been moved. Check the URL or use one of the links below."}
          </p>

          {/* Primary CTA */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E4A76] to-[#2A5F8A] text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 mb-8"
          >
            {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            {isAr ? "العودة للرئيسية" : "Back to Home"}
          </Link>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-[var(--border-light)]"></div>
            <span className="text-[var(--text-muted)] text-xs">
              {isAr ? "أو تصفح" : "or browse"}
            </span>
            <div className="flex-1 h-px bg-[var(--border-light)]"></div>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    window.location.href = link.href;
                  }
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[var(--border-light)] bg-[var(--bg-card)] text-[var(--text-secondary)] text-sm hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/20 hover:bg-[var(--bg-secondary)] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
