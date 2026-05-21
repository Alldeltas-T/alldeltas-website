import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Mail,
  ExternalLink,
  Award,
  ChevronRight,
  Crown,
  Star,
  Users,
} from "lucide-react";
import ceoImage from "../assets/team/CEO.jpg";
import rahafImage from "../assets/team/eng rahaf.png";
import louayImage from "../assets/team/eng.louay.png";
import aishaImage from "../assets/team/aisha.jpg";

const Team = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = {
    leadership: {
      id: 1,
      name: "Dr. Tarif Amro",
      role: "CEO & Founder",
      specialty: "Railway Safety Strategy & International Consulting",
      image: ceoImage,
      email: "tarif.amro@alldeltas.com",
      linkedin: "#",
      experience: "25+ Years",
      levelColor: "#EAB308",
      borderColor: "from-amber-500 to-yellow-500",
    },
    directors: [
      {
        id: 2,
        name: "Eng. Rahaf Hama",
        role: "Head of Consulting & Software",
        specialty: "IT Strategy & Software Engineering",
        image: rahafImage,
        email: "rahaf.hama@alldeltas.com",
        linkedin: "#",
        experience: "12+ Years",
        levelColor: "#1E4A76",
        borderColor: "from-blue-700 to-blue-800",
      },
      {
        id: 3,
        name: "Aisha Yousef",
        role: "Technical Director",
        specialty: "Software Architecture & DevOps",
        image: aishaImage,
        email: "aisha.yousef@alldeltas.com",
        linkedin: "#",
        experience: "10+ Years",
        levelColor: "#1E4A76",
        borderColor: "from-blue-700 to-blue-800",
      },
    ],
    seniors: [
      {
        id: 4,
        name: "Eng. Louay Hamed",
        role: "Lead Frontend Developer",
        specialty: "React & UI/UX Engineering",
        image: louayImage,
        email: "louay.hamed@alldeltas.com",
        linkedin: "#",
        experience: "8+ Years",
        levelColor: "#2A5F8A",
        borderColor: "from-pink-600 to-pink-700",
      },
      {
        id: 5,
        name: "Obada Al-Haj",
        role: "Senior RAMS Engineer",
        specialty: "EN 50126 & Reliability",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        email: "obada@alldeltas.com",
        linkedin: "#",
        experience: "14+ Years",
        levelColor: "#2A5F8A",
        borderColor: "from-pink-600 to-pink-700",
      },
      {
        id: 6,
        name: "Eng. Rana Khaled",
        role: "Senior RAMS Specialist",
        specialty: "Reliability Engineering",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
        email: "rana.khaled@alldeltas.com",
        linkedin: "#",
        experience: "12+ Years",
        levelColor: "#2A5F8A",
        borderColor: "from-pink-600 to-pink-700",
      },
    ],
  };

  // الخط العمودي (Connector)
  const VerticalConnector = () => (
    <div className="relative flex justify-center my-2">
      <div className="w-px h-10 bg-gradient-to-b from-[var(--color-primary)]/40 to-[var(--color-primary)]/10 rounded-full"></div>
    </div>
  );

  // الخط الأفقي المتفرع
  const BranchConnector = ({ count = 2 }) => {
    const width = count === 2 ? "w-48" : "w-80";
    return (
      <div className="relative flex justify-center my-2">
        <div
          className={`${width} h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent`}
        ></div>
        <div className="absolute left-1/4 top-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 -translate-x-1/2"></div>
        <div className="absolute right-1/4 top-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 translate-x-1/2"></div>
        {count === 3 && (
          <>
            <div className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 -translate-x-1/2"></div>
          </>
        )}
      </div>
    );
  };

  // الخط المتصل بين المستويات
  const LevelConnector = () => (
    <div className="relative flex justify-center my-3">
      <div className="w-0.5 h-12 bg-gradient-to-b from-[var(--color-primary)]/50 to-[var(--color-primary)]/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-primary)]/50"></div>
    </div>
  );

  // بطاقة العضو - مع تخصيص للـ CEO
  const MemberCard = ({ member, featured = false, level = "senior" }) => {
    const isCeo = featured === true;

    return (
      <div
        className={`
          w-full lg:flex mx-auto my-4 hover:shadow-xl transition-all duration-300 relative
          ${
            isCeo
              ? "max-w-md shadow-2xl ring-2 ring-amber-400/40"
              : "max-w-sm shadow-md"
          }
        `}
      >
        {/* شريط علوي ملون - CEO له شريط أطول */}
        <div
          className={`absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r ${member.borderColor}
              ${isCeo ? "h-1.5" : "h-1.5"}
            `}
        ></div>

        {/* صورة العضو */}
        <div
          className={`
      flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden relative
      ${isCeo ? "h-52 lg:w-52" : "h-68 lg:w-48"}
    `}
          style={{
            backgroundImage: `url(${member.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          title={member.name}
        ></div>

        {/* تاج يطفو فوق الكرت - خارج div الصورة */}
        {featured && (
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center shadow-xl z-20 ring-2 ring-white/60 animate-bounce-slow">
            <Crown size={20} className="text-white" />
          </div>
        )}

        {/* معلومات العضو - CEO له padding أكبر قليلاً */}
        <div
          className={`
            border-r border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-200 
            bg-[var(--bg-card)] rounded-b lg:rounded-b-none lg:rounded-r 
            ${isCeo ? "p-2" : "p-4"} w-full
          `}
        >
          <div>
            <a
              href="#"
              className={`
                  font-bold mb-2 hover:text-[var(--color-primary)] transition duration-500 ease-in-out
                  ${isCeo ? "text-2xl text-amber-600" : "text-xl text-[var(--text-primary)]"}
                `}
              style={isCeo ? { color: "#EAB308" } : {}}
            >
              {member.name}
            </a>
            <p
              className={`text-sm font-medium ${isCeo ? "text-amber-600" : ""}`}
              style={{ color: isCeo ? "#EAB308" : member.levelColor }}
            >
              {member.role}
            </p>

            {/* سنوات الخبرة */}
            <div className="inline-flex items-center gap-1 bg-[var(--color-primary)]/5 px-2 py-0.5 rounded-full mt-2">
              <Award size={10} className="text-[var(--color-primary)]" />
              <span className="text-[var(--text-secondary)] text-[10px]">
                {member.experience}
              </span>
            </div>

            <p className="text-[var(--text-secondary)] text-base mt-3">
              {member.specialty}
            </p>

            {/* أيقونات التواصل الاجتماعي */}
            <div className="my-4 flex gap-3">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0A66C2] transition-colors duration-300"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href={`mailto:${member.email}`}
                className="text-gray-500 hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="team" className="py-16 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* عنوان القسم */}
        <div
          className={`text-center mb-12 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
        >
          <p className="text-sm leading-7 text-[var(--text-secondary)] font-regular">
            THE TEAM
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-[var(--text-primary)]">
            Our <span className="text-[var(--color-primary)]">Team</span>
          </h3>
          <p className="text-[var(--text-secondary)] text-sm max-w-2xl mx-auto mt-2">
            A distinguished team of industry experts committed to your success
          </p>
        </div>

        {/* ===== المستوى 1: القيادة (CEO في المنتصف) ===== */}
        <div className="flex justify-center mb-6">
          <MemberCard member={teamMembers.leadership} featured={true} />
        </div>

        {/* خط هابط من CEO */}
        <LevelConnector />

        {/* خط أفقي متفرع إلى اثنين */}
        <BranchConnector count={2} />

        {/* ===== المستوى 2: المديرين (رهف وعائشة - جنباً إلى جنب) ===== */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-4 px-5 py-1 rounded-full bg-[#1E4A76]/10 border border-[#1E4A76]/20">
            <Star size={12} className="text-[#1E4A76]" />
            <span className="text-[#1E4A76] text-[10px] font-semibold uppercase tracking-wider">
              Directors
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative">
          {/* خطوط رأسية من نقطة التفرع إلى كل بطاقة */}
          <div className="absolute top-0 left-1/4 w-px h-6 bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent -translate-x-1/2 -mt-6 hidden md:block"></div>
          <div className="absolute top-0 right-1/4 w-px h-6 bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent translate-x-1/2 -mt-6 hidden md:block"></div>

          {teamMembers.directors.map((member, idx) => (
            <div key={member.id} className="relative">
              <div className="absolute top-0 left-1/2 w-px h-4 bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent -translate-x-1/2 -mt-4 hidden md:block"></div>
              <MemberCard member={member} level="director" />
            </div>
          ))}
        </div>

        {/* خط هابط من المستوى 2 إلى المستوى 3 */}
        <LevelConnector />

        {/* خط أفقي متفرع إلى ثلاثة */}
        <BranchConnector count={3} />

        {/* ===== المستوى 3: كبار المستشارين (3 أشخاص) ===== */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-[#2A5F8A]/10 border border-[#2A5F8A]/20">
            <Users size={12} className="text-[#2A5F8A]" />
            <span className="text-[#2A5F8A] text-[10px] font-semibold uppercase tracking-wider">
              Senior Consultants
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-8xl mx-auto relative">
          {/* خطوط رأسية من نقاط التفرع إلى البطاقات */}
          <div className="absolute top-0 left-1/6 w-px h-6 bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent -translate-x-1/2 -mt-6 hidden lg:block"></div>
          <div className="absolute top-0 left-1/2 w-px h-6 bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent -translate-x-1/2 -mt-6 hidden lg:block"></div>
          <div className="absolute top-0 right-1/6 w-px h-6 bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent translate-x-1/2 -mt-6 hidden lg:block"></div>

          {teamMembers.seniors.map((member) => (
            <div key={member.id} className="relative">
              <div className="absolute top-0 left-1/2 w-px h-4 bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent -translate-x-1/2 -mt-4 hidden md:block"></div>
              <MemberCard member={member} />
            </div>
          ))}
        </div>

        {/* دعوة للتواصل */}
        <div
          className={`text-center mt-12 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium hover:gap-3 transition-all duration-300 group"
          >
            Join Our Team
            <ChevronRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
