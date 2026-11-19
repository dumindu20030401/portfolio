const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "I build fast, responsive, and visually stunning websites tailored to your goals. From landing pages to full web apps, every line of code is crafted with precision, performance, and a seamless user experience in mind.",
    icon: "code",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Visuals that speak louder than words. I design logos, brand identities, social media graphics, and UI assets that capture your brand's essence and leave a lasting impression on your audience.",
    icon: "pen",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Grow your online presence with data-driven strategies. From SEO and content marketing to social media campaigns and analytics, I help your brand reach the right audience and convert visitors into loyal customers.",
    icon: "chart",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Responsive Design",
    description:
      "I design clean, intuitive interfaces with clear navigation and responsive layouts that adapt to mobile, tablet, and desktop screens.",
    icon: "layout",
  },
  {
    id: "backend-databases",
    title: "Backend & Database Integration",
    description:
      "I develop and connect application APIs and databases to support features such as project listings, contact forms, and data-driven pages.",
    icon: "database",
  },
  {
    id: "maintenance-optimization",
    title: "Website Maintenance & Optimization",
    description:
      "I help improve existing websites through bug fixes, layout updates, accessibility checks, and front-end performance improvements.",
    icon: "tools",
  },
];

function ServiceIcon({ type }) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: 40,
    height: 40,
    "aria-hidden": true,
  };

  switch (type) {
    case "code":
      return (
        <svg {...common}>
          <polyline points="16,11 4,24 16,37" />
          <line x1="29" y1="8" x2="19" y2="40" />
          <polyline points="32,11 44,24 32,37" />
        </svg>
      );
    case "pen":
      return (
        <svg {...common}>
          <path d="M31 6 42 17 16 43 5 44 6 33Z" />
          <path d="M27 10 38 21" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <rect x="5" y="28" width="8" height="14" rx="1" />
          <rect x="20" y="18" width="8" height="24" rx="1" />
          <rect x="35" y="7" width="8" height="35" rx="1" />
        </svg>
      );
    case "layout":
      return (
        <svg {...common}>
          <rect x="5" y="6" width="38" height="36" rx="4" />
          <path d="M5 16h38M18 16v26" />
          <path d="M24 24h12M24 31h9" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="24" cy="10" rx="17" ry="6" />
          <path d="M7 10v12c0 3.5 7.6 6 17 6s17-2.5 17-6V10" />
          <path d="M7 22v12c0 3.5 7.6 6 17 6s17-2.5 17-6V22" />
        </svg>
      );
    case "tools":
      return (
        <svg {...common}>
          <path d="M27 10a12 12 0 0 0-15 15L5 32a5 5 0 0 0 7 7l8-8a12 12 0 0 0 15-15l-7 7-9-2-2-9Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <section id="services" className="page-section service-section">
      <h2 className="section-title">My Services</h2>
      <div className="service-cards">
        {services.map(({ id, title, description, icon }) => (
          <div className="service-card" key={id}>
            <div className="service-icon">
              <ServiceIcon type={icon} />
            </div>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-text">{description}</p>
            <a href="#contact" className="service-btn">
              Contact Me
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
