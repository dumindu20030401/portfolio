import { useEffect, useState } from 'react';

const links = [
  ['home', 'Home'], ['about', 'About'], ['skills', 'Skills'],
  ['projects', 'Projects'], ['services', 'Services'], ['contact', 'Contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) setActive(visible[0].target.id);
    }, { rootMargin: '-22% 0px -55% 0px', threshold: [0, 0.2, 0.5, 1] });

    links.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onEscape = event => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  return (
    <>
      <nav className={`navbar ${open ? 'menu-open' : ''}`} id="navbar" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>Portfolio.</a>
        <ul id="navLinks">
          {links.map(([id, title]) => (
            <li key={id}><a id={`nav-${id}`} className={active === id ? 'nav-active' : ''}
              href={`#${id}`} onClick={() => { setOpen(false); setActive(id); }}>
              {title}
            </a></li>
          ))}
        </ul>
      </nav>
      <button type="button" className={`menu-toggle ${open ? 'open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
        aria-controls="navLinks" onClick={() => setOpen(value => !value)}>
        <span></span><span></span><span></span>
      </button>
      <button type="button" className={`nav-overlay ${open ? 'visible' : ''}`}
        aria-label="Close mobile menu" tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)} />
    </>
  );
}
