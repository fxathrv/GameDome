import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { experiences, gallery, games, links, locations } from './content.js';
import { ArrowLink, SectionLabel } from './ui.jsx';

function PageHero({ label, title, copy, image, tone = 'dark', children }) {
  return <section className={`page-hero page-hero-${tone}`}><div className="page-hero-image" style={{ backgroundImage: `url(${image})` }} /><div className="page-hero-shade" /><div className="page-hero-copy"><SectionLabel>{label}</SectionLabel><h1>{title}</h1>{copy && <p>{copy}</p>}{children}</div></section>;
}

function Hero() {
  return <section className="hero"><div className="hero-photo" role="img" aria-label="Gaming cafe monitors and player setup" /><div className="hero-gridlines" /><div className="hero-content"><p className="micro hero-micro">Pune, India <span /> Gaming cafe / community</p><h1><span>GAME</span><em>DOME</em></h1><div className="hero-bottom"><p>A room for people who take the game seriously, without taking themselves too seriously.</p><Link className="round-link" to="/visit"><span>Visit Game Dome</span><b>↓</b></Link></div></div><div className="hero-rail"><span>Wakad</span><i /> <span>Viman Nagar</span><i /> <span>PC / PS5 / Xbox</span></div><div className="hero-index">01<br />06</div></section>;
}

function ExperienceBlock() {
  return <section className="experience experience-block"><div className="experience-top"><SectionLabel>02 / The experience</SectionLabel><p className="experience-intro">Walk in for a quick game. Leave with a group chat full of rematch plans.</p></div><div className="experience-stage"><div className="experience-photo" role="img" aria-label="Player holding a gaming controller" /><h2>Pick<br /><i>your pace.</i></h2><div className="experience-map">{experiences.map((item, index) => <article className={`pace pace-${index + 1}`} key={item.title}><span>{item.kicker}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>;
}

function GameDetail({ game, onClose }) {
  useEffect(() => { const closeOnEscape = (event) => event.key === 'Escape' && onClose(); window.addEventListener('keydown', closeOnEscape); return () => window.removeEventListener('keydown', closeOnEscape); }, [onClose]);
  return <div className="game-modal" role="dialog" aria-modal="true" aria-labelledby="game-detail-title"><button className="modal-backdrop" aria-label="Close game details" onClick={onClose} /><div className="game-modal-panel"><img src={game.image} alt="" /><div className="modal-copy"><button className="modal-close" onClick={onClose} type="button">Close <b>×</b></button><SectionLabel>Popular-title showcase / {game.genre}</SectionLabel><h2 id="game-detail-title">{game.title}</h2><p>{game.blurb}</p><div className="platform-list">{game.platforms.map((platform) => <span key={platform}>{platform}</span>)}</div><small>Availability can be updated by Game Dome before publishing.</small></div></div></div>;
}

export function GamesBrowser({ compact = false }) {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const filters = ['All', ...new Set(games.map((game) => game.genre))];
  const displayed = compact ? games.slice(0, 4) : games.filter((game) => filter === 'All' || game.genre === filter);
  const visibleGames = compact ? displayed : displayed;
  return <div className={`game-browser ${compact ? 'is-compact' : ''}`}>{!compact && <div className="game-filters" aria-label="Filter popular games by genre">{filters.map((item) => <button className={filter === item ? 'is-active' : ''} onClick={() => setFilter(item)} type="button" key={item}>{item}</button>)}</div>}<p className="game-note">Select a title <span>↗</span></p><div className="game-strip" aria-live="polite">{visibleGames.map((game, index) => <button className="game-card" onClick={() => setSelected(game)} key={game.title} type="button"><img src={game.image} alt={`${game.title} artwork`} loading="lazy" /><span className="card-scrim" /><span className="game-number">0{index + 1}</span><span className="game-tags"><b>{game.genre}</b><i>{game.platforms.join(' / ')}</i></span><strong>{game.title}</strong><span className="game-open">View title <b>↗</b></span></button>)}</div>{selected && <GameDetail game={selected} onClose={() => setSelected(null)} />}</div>;
}

function LocationPreview() {
  return <section className="home-locations"><div><SectionLabel>04 / Find your room</SectionLabel><h2>Two sides of Pune.<br /><i>Same session energy.</i></h2></div><div className="home-location-grid">{locations.map((location, index) => <Link className="home-location" to="/locations" key={location.id}><img src={location.image} alt={`${location.name} gaming atmosphere`} /><span>{location.marker}</span><strong>0{index + 1} / {location.name}</strong></Link>)}</div><ArrowLink to="/locations" className="under-link">Explore locations</ArrowLink></section>;
}

function HomeEventsCommunity() {
  return <section className="home-ec"><Link className="home-event" to="/events"><SectionLabel>05 / Events</SectionLabel><h2>Next<br />drop.</h2><p>Tournaments, watch nights and community fixtures live here.</p><span>Explore events ↗</span></Link><Link className="home-community" to="/community"><img src={gallery[1].src} alt={gallery[1].alt} /><div><SectionLabel>06 / Community</SectionLabel><h2>More than<br />a screen.</h2><span>Meet the room ↗</span></div></Link></section>;
}

export function HomePage() {
  return <><Hero /><section className="home-statement"><p>Come for the game. Stay because somebody called for one more match.</p><Link to="/experience">See the experience <b>↗</b></Link></section><section className="home-game-preview"><div><SectionLabel>03 / Popular picks</SectionLabel><h2>Find your<br /><i>next session.</i></h2><p>A snapshot of what the group chat is probably talking about.</p><ArrowLink to="/games" className="dark-link">Explore the games</ArrowLink></div><GamesBrowser compact /></section><LocationPreview /><HomeEventsCommunity /><section className="home-final"><img src={gallery[0].src} alt={gallery[0].alt} /><div><SectionLabel>Game Dome / Pune</SectionLabel><h2>See you<br />at <i>Game Dome.</i></h2><Link className="round-link" to="/visit"><span>Plan a visit</span><b>↓</b></Link></div></section></>;
}

export function ExperiencePage() {
  return <><PageHero label="Game Dome / Experience" title={<>Play your way.<br /><i>Stay your while.</i></>} copy="The setup is the start. The people, calls and after-hours plans are the rest." image={gallery[0].src} /><ExperienceBlock /><section className="experience-close"><p>Solo focus. Couch chaos. A full lobby. A bracket with the room watching. There is more than one way to have a good night here.</p><Link to="/visit">Find a Game Dome <b>↗</b></Link></section></>;
}

export function GamesPage() {
  return <><PageHero label="Game Dome / Game library" title={<>What are<br /><i>we playing?</i></>} copy="A popular-title showcase across PC, PS5 and Xbox. The actual rotation is easy to update when the library changes." image={games[3].image} tone="red" /><section className="games games-page"><div className="games-page-head"><SectionLabel>Browse by mood</SectionLabel><p>Click a title for the quick view. These are recognisable picks, not a promise of current in-cafe availability.</p></div><GamesBrowser /></section></>;
}

export function LocationsPage() {
  return <><PageHero label="Game Dome / Locations" title={<>Pick a side<br />of <i>Pune.</i></>} copy="Wakad and Viman Nagar. Find the room that is closest to your next session." image={locations[0].image} /><section className="locations-page">{locations.map((location, index) => <article className={`location-feature location-feature-${index + 1}`} key={location.id}><img src={location.image} alt={`${location.name} gaming cafe atmosphere`} /><div className="location-feature-copy"><SectionLabel>{location.marker}</SectionLabel><h2>{location.name}</h2><p>{location.area}</p><p>{location.note}</p><ArrowLink to={location.href} external className="under-link">Get directions</ArrowLink></div></article>)}</section></>;
}

export function EventsPage() {
  const types = ['Tournaments', 'Community nights', 'Watch parties'];
  return <><PageHero label="Game Dome / Events" title={<>Make a night<br />of <i>it.</i></>} copy="The room gets louder when there is something on the fixture." image={gallery[2].src} tone="red" /><section className="events events-page"><div className="event-ticker"><span>TOURNAMENTS</span><i>✦</i><span>COMMUNITY NIGHTS</span><i>✦</i><span>WATCH PARTIES</span><i>✦</i><span>TOURNAMENTS</span></div><div className="events-page-layout"><div className="event-poster"><span>GD</span><p>Next drop</p><strong>To be<br />announced</strong><small>Follow for the next fixture</small></div><div className="event-list"><SectionLabel>Editable fixture board</SectionLabel>{types.map((type, index) => <article key={type}><span>0{index + 1}</span><h2>{type}</h2><p>To be announced</p></article>)}<ArrowLink to={links.instagram} external className="under-link">Follow updates</ArrowLink></div></div></section></>;
}

export function CommunityPage() {
  return <><PageHero label="Game Dome / Community" title={<>The screen is only<br /><i>half the story.</i></>} copy="Play, hang out, compete, watch, come back. The point is being in the room." image={gallery[1].src} /><section className="community community-page"><div className="community-collage"><figure className="collage-main"><img src={gallery[1].src} alt={gallery[1].alt} /><figcaption>Bring the group chat.</figcaption></figure><figure className="collage-top"><img src={gallery[2].src} alt={gallery[2].alt} /></figure><figure className="collage-bottom"><img src={gallery[4].src} alt={gallery[4].alt} /></figure><p>The familiar faces are great. The first-time players are part of it too.</p></div></section><section className="community-social"><SectionLabel>Keep in the loop</SectionLabel><a href={links.instagram} target="_blank" rel="noreferrer"><span>Follow</span> @gamedome_<b>↗</b></a><p>Fixtures, moments from the room, and whatever happens next.</p></section></>;
}

export function VisitPage() {
  return <><PageHero label="Game Dome / Visit" title={<>Pick your game.<br /><i>Bring your people.</i></>} copy="Choose a location, bring the group chat, and make a night of it." image={gallery[0].src} /><section className="visit-page"><SectionLabel>Find Game Dome</SectionLabel><h2>Two rooms.<br />One <i>reason to stay.</i></h2><div className="visit-location-list">{locations.map((location, index) => <article key={location.id}><span>0{index + 1}</span><div><h3>{location.name}</h3><p>{location.area}</p></div><a href={location.href} target="_blank" rel="noreferrer">Directions ↗</a></article>)}</div><a className="visit-instagram" href={links.instagram} target="_blank" rel="noreferrer">Follow @gamedome_ <b>↗</b></a></section></>;
}
