import React, { useEffect, useMemo, useState } from "react";
import { fallbackProjects } from "../data/fallbackProjects";
import "./Projects.css";

const apiRoot = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "/api" : "");
const filters = ["All", "Web Apps", "UI Components", "Full Stack"];

function isUneditedTemplate(project) {
  return (
    (project.slug === "project-1" && project.title === "Frontend Web App") ||
    (project.slug === "project-2" && project.title === "Backend & Data System") ||
    (project.slug === "ui-component-example" && project.title === "UI Component Library (Sample)") ||
    (project.slug === "mern-portfolio-example" && project.title === "MERN Portfolio Website")
  );
}

function tagsFor(project) {
  if (Array.isArray(project.tags) && project.tags.length) return project.tags;
  return (project.stack || "").split(",").map(tag => tag.trim()).filter(Boolean);
}

function categoryFor(project) {
  return filters.includes(project.category) ? project.category : "Web Apps";
}

function normalizeProjects(apiProjects) {
  // Local entries ensure truthful content even if an older database still
  // contains only the two original placeholders. Keep any new custom entries.
  const projectMap = new Map(fallbackProjects.map(project => [project.slug, project]));
  (Array.isArray(apiProjects) ? apiProjects : []).forEach(project => {
    if (project && project.slug && !isUneditedTemplate(project)) {
      // Always use our newly generated local artwork for these five projects,
      // even if MongoDB contains an older empty image or a placeholder URL.
      const knownProject = projectMap.get(project.slug);
      projectMap.set(project.slug, {
        ...project,
        image: knownProject?.image || project.image || "",
        imageAlt: knownProject?.imageAlt || project.imageAlt || project.title,
      });
    }
  });
  return [...projectMap.values()]
    .map(project => ({ ...project, category: categoryFor(project), tags: tagsFor(project) }))
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

function Icon({ name, size = 19 }) {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.9,
    strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true,
  };
  switch (name) {
    case "globe": return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 4-5 14 0 18M12 3c5 4 5 14 0 18"/></svg>;
    case "grid": return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>;
    case "bolt": return <svg {...common}><path d="m13 2-9 12h7l-1 8L20 9h-7z"/></svg>;
    case "target": return <svg {...common}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>;
    case "arrowUp": return <svg {...common}><path d="m4 17 6-6 4 4 6-7M15 8h5v5"/></svg>;
    case "external": return <svg {...common}><path d="M13 5h6v6M19 5l-9 9"/><path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></svg>;
    case "github": return <svg {...common} fill="currentColor" stroke="none"><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.93c.56.1.77-.24.77-.54v-2.12c-3.14.68-3.8-1.33-3.8-1.33-.52-1.31-1.27-1.67-1.27-1.67-1.03-.7.08-.68.08-.68 1.14.08 1.74 1.17 1.74 1.17 1.02 1.74 2.68 1.24 3.33.95.11-.75.4-1.25.73-1.53-2.51-.28-5.14-1.26-5.14-5.56 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.99 0 0 .95-.31 3.1 1.15a10.83 10.83 0 0 1 5.64 0c2.15-1.46 3.1-1.15 3.1-1.15.61 1.56.23 2.7.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.31-2.63 5.28-5.15 5.56.41.36.77 1.08.77 2.17v3.22c0 .3.21.65.78.54A11.25 11.25 0 0 0 12 .75Z"/></svg>;
    case "left": return <svg {...common}><path d="m15 18-6-6 6-6"/></svg>;
    case "right": return <svg {...common}><path d="m9 18 6-6-6-6"/></svg>;
    case "close": return <svg {...common}><path d="M18 6 6 18M6 6l12 12"/></svg>;
    default: return null;
  }
}

function MockPreview({ variant = "dashboard" }) {
  return (
    <div className={`showcase-mock showcase-mock--${variant}`} aria-hidden="true">
      <div className="showcase-mock-window">
        <div className="showcase-mock-side"><i/><i/><i/><i/><i/></div>
        <div className="showcase-mock-main">
          <div className="showcase-mock-top"><span/><span/><span/></div>
          {variant === "components" ? (
            <>
              <div className="showcase-mock-bars"><b/><b/><b/></div>
              <div className="showcase-mock-tiles"><i/><i/><i/><i/></div>
              <div className="showcase-mock-lines"><span/><span/><span/></div>
            </>
          ) : (
            <>
              <div className="showcase-mock-stats"><i/><i/><i/></div>
              <div className="showcase-mock-chart"><span/><span/><span/><span/><span/><span/><span/></div>
              <div className="showcase-mock-lines"><span/><span/><span/></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onDetails }) {
  const image = project.image;
  const category = categoryFor(project);
  const tags = tagsFor(project);
  const isConceptArtwork = fallbackProjects.some(item => item.slug === project.slug);
  return (
    <article className="showcase-card">
      <div className="showcase-media">
        {image ? (
          <>
            <img src={image} alt={project.imageAlt || project.title} loading="lazy" decoding="async" />
            {isConceptArtwork && (
              <span className="showcase-visual-note">Concept artwork</span>
            )}
          </>
        ) : (
          <><MockPreview variant={project.visual || "dashboard"}/><span className="showcase-visual-note">Concept illustration</span></>
        )}
        <span className="showcase-category">{category}</span>
        <div className="showcase-media-actions">
          <button type="button" className="showcase-action" onClick={() => onDetails(project)} aria-label={`View details about ${project.title}`} title="Project details"><Icon name="external"/></button>
          {project.githubUrl && <a href={project.githubUrl} className="showcase-action" target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`} title="GitHub source code"><Icon name="github"/></a>}
          {project.demoUrl && <a href={project.demoUrl} className="showcase-action" target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} title="Live demo"><Icon name="globe"/></a>}
        </div>
      </div>
      <div className="showcase-card-body">
        <h3>{project.title}</h3>
        <p className="showcase-description">{project.description}</p>
        <div className="showcase-tags" aria-label="Technologies">
          {tags.slice(0, 5).map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <div className="showcase-card-footer">
          <Icon name="arrowUp" size={17}/>
          <span>{project.status || "View project details"}</span>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [detailProject, setDetailProject] = useState(null);

  useEffect(() => {
    // No backend on GitHub Pages: the five local projects remain visible.
    if (!apiRoot) return;
    const controller = new AbortController();
    fetch(`${apiRoot}/projects`, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error("Projects API unavailable");
        return response.json();
      })
      .then(data => { if (Array.isArray(data) && data.length) setProjects(data); })
      .catch(error => { if (error.name !== "AbortError") console.info("Showing portfolio projects without API."); });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const updateColumns = () => setCardsPerPage(window.innerWidth <= 650 ? 1 : window.innerWidth <= 980 ? 2 : 3);
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    if (!detailProject) return;
    function onEscape(event) { if (event.key === "Escape") setDetailProject(null); }
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [detailProject]);

  const allProjects = useMemo(() => normalizeProjects(projects), [projects]);
  const filtered = useMemo(() => selectedFilter === "All" ? allProjects : allProjects.filter(project => categoryFor(project) === selectedFilter), [allProjects, selectedFilter]);
  const visibleCount = Math.min(cardsPerPage, filtered.length);
  const offset = filtered.length ? startIndex % filtered.length : 0;
  const shown = useMemo(() => Array.from({ length: visibleCount }, (_, i) => filtered[(offset + i) % filtered.length]), [filtered, offset, visibleCount]);
  const canMove = filtered.length > visibleCount;

  function selectFilter(filter) {
    setSelectedFilter(filter);
    setStartIndex(0);
  }

  function move(step) {
    if (canMove) setStartIndex(index => (index + step + filtered.length) % filtered.length);
  }

  return (
    <section id="projects" className="showcase-section" aria-labelledby="showcase-heading">
      <div className="showcase-container">
        <div className="showcase-header">
          <span className="showcase-eyebrow"><Icon name="grid" size={14}/> Selected Work</span>
          <h2 id="showcase-heading">Featured <span>Projects</span></h2>
          <p>Explore my work, from interactive web interfaces to full-stack applications.</p>
        </div>

        <div className="showcase-filterbar" role="group" aria-label="Filter projects by category">
          {filters.map(filter => (
            <button type="button" key={filter}
              className={`showcase-filter ${selectedFilter === filter ? "is-selected" : ""}`}
              aria-pressed={selectedFilter === filter}
              onClick={() => selectFilter(filter)}>
              <Icon name={filter === "All" ? "target" : filter === "Web Apps" ? "globe" : filter === "UI Components" ? "grid" : "bolt"} size={15}/>
              <span>{filter}</span>
            </button>
          ))}
        </div>

        <div className="showcase-carousel">
          <button type="button" className="showcase-arrow showcase-arrow--left" onClick={() => move(-1)} disabled={!canMove} aria-label="Previous projects"><Icon name="left" size={24}/></button>
          <div className="showcase-grid" aria-live="polite">
            {shown.map(project => <ProjectCard key={project._id || project.slug} project={project} onDetails={setDetailProject}/>)}
            {!shown.length && <p className="showcase-empty">No projects in this category yet.</p>}
          </div>
          <button type="button" className="showcase-arrow showcase-arrow--right" onClick={() => move(1)} disabled={!canMove} aria-label="Next projects"><Icon name="right" size={24}/></button>
        </div>
        {canMove && <p className="showcase-count">Showing {visibleCount} of {filtered.length} projects · use the arrows to browse</p>}
      </div>

      {detailProject && (
        <div className="showcase-dialog-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) setDetailProject(null); }}>
          <div className="showcase-dialog" role="dialog" aria-modal="true" aria-labelledby="showcase-dialog-title">
            <button type="button" className="showcase-dialog-close" onClick={() => setDetailProject(null)} aria-label="Close project details"><Icon name="close"/></button>
            <p className="showcase-dialog-overline">{categoryFor(detailProject)}</p>
            <h3 id="showcase-dialog-title">{detailProject.title}</h3>
            <p>{detailProject.description}</p>
            <div className="showcase-tags">{tagsFor(detailProject).map(tag => <span key={tag}>{tag}</span>)}</div>
            {Array.isArray(detailProject.highlights) && detailProject.highlights.length > 0 && (
              <div className="showcase-detail-highlights">
                <h4>What I worked on</h4>
                <ul>{detailProject.highlights.map((item, index) => <li key={index}>{item}</li>)}</ul>
              </div>
            )}
            {detailProject.scopeNote && <p className="showcase-dialog-note">{detailProject.scopeNote}</p>}
            <div className="showcase-dialog-links">
              {detailProject.demoUrl && <a href={detailProject.demoUrl} target="_blank" rel="noopener noreferrer">Live demo <Icon name="external" size={16}/></a>}
              {detailProject.githubUrl && <a href={detailProject.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <Icon name="github" size={16}/></a>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
