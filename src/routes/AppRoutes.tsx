import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatPage from '../pages/ChatPage';
import DashboardPage from '../pages/DashboardPage';
import TipsPage from '../pages/TipsPage';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/chat" replace />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="*" element={<p className="text-center mt-10 text-white">404: Page Not Found</p>} />
      </Routes>
    </Router>
  );
}