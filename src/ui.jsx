import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { links } from './content.js';

export function Wordmark({ inverse = false }) {
  return <NavLink className={`wordmark ${inverse ? 'is-inverse' : ''}`} to="/" aria-label="Game Dome home"><span>GAME</span><i>DOME</i></NavLink>;
}

export function SectionLabel({ children }) { return <p className="micro">{children}</p>; }

export function ArrowLink({ to, children, external = false, className = '' }) {
  const content = <>{children} <b>↗</b></>;
  if (external) return <a className={className} href={to} target="_blank" rel="noreferrer">{content}</a>;
  return <NavLink className={className} to={to}>{content}</NavLink>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const items = [['Experience', '/experience'], ['Games', '/games'], ['Locations', '/locations'], ['Events', '/events'], ['Community', '/community']];
  const close = () => setOpen(false);
  return <header className="site-header"><nav className="nav" aria-label="Primary navigation"><Wordmark /><div className="desktop-nav">{items.map(([label, to]) => <NavLink to={to} key={label}>{label}</NavLink>)}</div><div className="nav-right"><a className="nav-social" href={links.instagram} target="_blank" rel="noreferrer">Instagram</a><NavLink className="nav-visit" to="/visit">Visit</NavLink><button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span /><span /><b className="sr-only">Toggle navigation</b></button></div></nav><div className={`mobile-menu ${open ? 'is-open' : ''}`} id="mobile-menu">{items.map(([label, to], index) => <NavLink to={to} onClick={close} key={label}><small>0{index + 1}</small>{label}</NavLink>)}<NavLink to="/visit" onClick={close}><small>06</small>Visit Game Dome</NavLink><a href={links.instagram} target="_blank" rel="noreferrer">Instagram</a></div></header>;
}

function Footer() { return <footer><Wordmark inverse /><p>Wakad / Viman Nagar / Pune</p><a href={links.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><span>Concept website / {new Date().getFullYear()}</span></footer>; }

export function AppShell() { return <><Nav /><main className="route-frame"><Outlet /></main><Footer /></>; }
