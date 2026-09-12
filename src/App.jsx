import { Route, Routes } from 'react-router-dom';
import { AppShell } from './ui.jsx';
import { CommunityPage, ExperiencePage, EventsPage, GamesPage, HomePage, LocationsPage, VisitPage } from './pages.jsx';

export default function App() {
  return <Routes><Route element={<AppShell />}><Route index element={<HomePage />} /><Route path="experience" element={<ExperiencePage />} /><Route path="games" element={<GamesPage />} /><Route path="locations" element={<LocationsPage />} /><Route path="events" element={<EventsPage />} /><Route path="community" element={<CommunityPage />} /><Route path="visit" element={<VisitPage />} /></Route></Routes>;
}
