
import React from "react";
import { socialLinks } from "../data/socialLinks";

const BASE_URL = import.meta.env.BASE_URL;

function SocialLink({ label, url, children }) {
  if (!url) {
    return (
      <span
        className="social-icon is-placeholder"
        title={`Set your ${label} URL in socialLinks.js`}
        aria-label={`${label} link not configured`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={url}
      className="social-icon"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <section id="home" className="home">

      {/* HOME INFORMATION */}
      <div className="home-info">
        <h1>Dumindu Dinusara</h1>

        <h2>
          I'm a{" "}
          <span
            style={{ "--i": 4 }}
            data-text="Frontend Developer"
          >
            Frontend Developer
          </span>
          <span
            style={{ "--i": 3 }}
            data-text="Youtuber"
          >
            Youtuber
          </span>
          <span
            style={{ "--i": 2 }}
            data-text="Backend Developer"
          >
            Backend Developer
          </span>
          <span
            style={{ "--i": 1 }}
            data-text="Designer"
          >
            Designer
          </span>
        </h2>

        <p>
          I'm passionate about crafting beautiful digital
          experiences through clean code and creative design.
        </p>

        <div className="btn-sci">

          {/* DOWNLOAD CV */}
          <a
            href={`${BASE_URL}CV.pdf`}
            download="Dumindu_Dinusara_CV.pdf"
            className="btn"
          >
            Download CV
          </a>

          {/* SOCIAL MEDIA LINKS */}
          <div className="sci">

            {/* GitHub */}
            <SocialLink
              label="GitHub"
              url={socialLinks.GitHub}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 .3A12 12 0 0 0 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 24 12.3 12 12 0 0 0 12 .3z" />
              </svg>
            </SocialLink>

            {/* LinkedIn */}
            <SocialLink
              label="LinkedIn"
              url={socialLinks.LinkedIn}
            >
              <svg viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </SocialLink>

            {/* Twitter */}
            <SocialLink
              label="Twitter"
              url={socialLinks.Twitter}
            >
              <svg viewBox="0 0 24 24">
                <path d="M23.95 4.57a10 10 0 0 1-2.82.77 4.96 4.96 0 0 0 2.16-2.72c-.95.56-2 .96-3.12 1.19a4.92 4.92 0 0 0-8.38 4.49A13.96 13.96 0 0 1 1.64 3.16a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.83 4.94 4.94 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a13.94 13.94 0 0 0 7.55 2.21c9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63A10 10 0 0 0 24 4.59l-.05-.02z" />
              </svg>
            </SocialLink>

            {/* YouTube */}
            <SocialLink
              label="YouTube"
              url={socialLinks.YouTube}
            >
              <svg viewBox="0 0 24 24">
                <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.13C19.54 3.6 12 3.6 12 3.6s-7.54 0-9.38.47A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.13C4.46 20.4 12 20.4 12 20.4s7.54 0 9.38-.47a3.02 3.02 0 0 0 2.12-2.13A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.52V8.48L15.82 12l-6.07 3.52z" />
              </svg>
            </SocialLink>

          </div>
        </div>
      </div>

      {/* PROFILE IMAGE WITH ANIMATED CIRCULAR BORDER */}
      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img
              src={`${BASE_URL}images/home.jpg`}
              alt="Dumindu Dinusara"
              className="profile-image"
            />
          </div>
        </div>
      </div>

    </section>
  );
}

