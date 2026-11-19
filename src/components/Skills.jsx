import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

export const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", experience: "1+ years", level: "Expert", progress: 95, icon: "code" },
      { name: "JavaScript", experience: "1+ years", level: "Expert", progress: 95, icon: "file" },
      { name: "TypeScript", experience: "2+ years", level: "Advanced", progress: 80, icon: "type" },
      { name: "Next.js", experience: "2+ years", level: "Advanced", progress: 80, icon: "zap" },
      { name: "Tailwind CSS", experience: "1+ years", level: "Expert", progress: 95, icon: "palette" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", experience: "2+ years", level: "Intermediate", progress: 66, icon: "server" },
      { name: "REST APIs", experience: "1+ years", level: "Advanced", progress: 80, icon: "globe" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", experience: "1+ years", level: "Advanced", progress: 80, icon: "git" },
      { name: "Responsive Design", experience: "1+ years", level: "Expert", progress: 95, icon: "phone" },
      { name: "Figma", experience: "2+ years", level: "Intermediate", progress: 66, icon: "figma" },
      { name: "Vite", experience: "1+ years", level: "Advanced", progress: 80, icon: "rocket" },
    ],
  },
];

function SkillIcon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (name) {
    case "file":
      return <svg {...common}><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M9 12l-1.5 2 1.5 2M15 12l1.5 2-1.5 2"/></svg>;
    case "type":
      return <svg {...common}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 9h8M12 9v9M9 18h6"/></svg>;
    case "zap":
      return <svg {...common}><path d="m13 2-9 12h7l-1 8 10-13h-7z"/></svg>;
    case "palette":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><circle cx="8" cy="10" r="1"/><circle cx="13" cy="7" r="1"/><circle cx="17" cy="12" r="1"/><path d="M12 21c-2-3 2-3 2-6 0-2-3-2-4 0"/></svg>;
    case "server":
      return <svg {...common}><rect x="4" y="3" width="16" height="8" rx="2"/><rect x="4" y="13" width="16" height="8" rx="2"/><path d="M8 7h.01M8 17h.01M12 7h5M12 17h5"/></svg>;
    case "globe":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 4-5 14 0 18M12 3c5 4 5 14 0 18"/></svg>;
    case "git":
      return <svg {...common}><circle cx="7" cy="6" r="2"/><circle cx="17" cy="6" r="2"/><circle cx="7" cy="18" r="2"/><path d="M7 8v8M17 8c0 5-10 0-10 8"/></svg>;
    case "phone":
      return <svg {...common}><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>;
    case "figma":
      return <svg {...common}><path d="M12 12H8a3 3 0 0 1 0-6h4m0 6H8a3 3 0 0 0 0 6h4m0-6h4a3 3 0 1 0-3-3v9a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3h4a3 3 0 0 1 0 6h-4"/></svg>;
    case "rocket":
      return <svg {...common}><path d="M4 16c2-7 7-12 16-12 0 9-5 14-12 16l-2-4-2-2zM12 12h.01M6 18l-3 3M8 21l-1-4"/></svg>;
    default:
      return <svg {...common}><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>;
  }
}

function SkillCard({ group, animate }) {
  return (
    <article className="expertise-card">
      <h3 className="expertise-card-title">{group.title}</h3>
      <div className="expertise-items">
        {group.skills.map((skill) => (
          <div className="expertise-item" key={skill.name}>
            <div className="expertise-item-row">
              <span className="expertise-icon"><SkillIcon name={skill.icon} /></span>
              <div className="expertise-item-details">
                <span className="expertise-name">{skill.name}</span>
                <span className="expertise-experience">{skill.experience}</span>
              </div>
              <span className={`expertise-level expertise-level--${skill.level.toLowerCase()}`}>
                {skill.level}
              </span>
            </div>
            <div
              className="expertise-track"
              role="meter"
              aria-label={`${skill.name} proficiency`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={skill.progress}
            >
              <span
                className="expertise-progress"
                style={{ width: animate ? `${skill.progress}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="expertise-section" aria-labelledby="expertise-heading">
      <div className="expertise-container">
        <header className="expertise-header">
          <span className="expertise-eyebrow">
            <span aria-hidden="true">✧</span> My Expertise
          </span>
          <h2 id="expertise-heading">Skills &amp; Technologies</h2>
          <p>A comprehensive overview of my technical skills and proficiency levels</p>
        </header>

        <div className="expertise-grid">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} animate={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
