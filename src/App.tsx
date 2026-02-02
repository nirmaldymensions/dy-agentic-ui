import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import BriefingDashboard from './components/BriefingDashboard';
import OpportunityDetail from './components/OpportunityDetail';
import LeadsPage from './components/LeadsPage';
import LeadDetailPage from './components/LeadDetailPage';
import QuotePrepPage from './components/QuotePrepPage';
import Customer360Page from './components/Customer360Page';
import QuotesPage from './components/QuotesPage';
import PipelinePage from './components/PipelinePage';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenDetail = (opportunity: any) => {
    navigate('/opportunity', { state: { opportunity } });
  };

  const handleBackToBriefing = () => {
    navigate('/');
  };

  const handleNavigateToLeads = () => {
    navigate('/leads');
  };

  const handleNavigate = (view: 'briefing' | 'leads' | 'customer360' | 'quotes' | 'pipeline') => {
    const routes: Record<string, string> = {
      briefing: '/',
      leads: '/leads',
      customer360: '/customer360',
      quotes: '/quotes',
      pipeline: '/pipeline',
    };
    navigate(routes[view]);
  };

  const handleNavigateToOverdueDeals = () => {
    navigate('/opportunity', {
      state: {
        opportunity: {
          account: "Acme Corporation",
          opportunity: "Enterprise Platform Migration",
        }
      }
    });
  };

  const handleNavigateToQuotePrep = () => {
    navigate('/quote-prep');
  };

  const handleOpenLeadDetail = (lead: any) => {
    navigate('/lead', { state: { lead } });
  };

  const handleBackToLeads = () => {
    navigate('/leads');
  };

  const handleGenerateQuote = () => {
    navigate('/customer360');
  };

  const handleBackToQuotePrep = () => {
    navigate('/quote-prep');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-50">
      <Header currentView={location.pathname} onNavigate={handleNavigate} />

      <Routes>
        <Route
          path="/"
          element={
            <BriefingDashboard
              onOpenDetail={handleOpenDetail}
              onNavigateToLeads={handleNavigateToLeads}
              onNavigateToOverdueDeals={handleNavigateToOverdueDeals}
              onNavigateToQuotePrep={handleNavigateToQuotePrep}
            />
          }
        />
        <Route
          path="/opportunity"
          element={
            <OpportunityDetail
              opportunity={location.state?.opportunity}
              onBack={handleBackToBriefing}
            />
          }
        />
        <Route
          path="/leads"
          element={
            <LeadsPage
              onOpenLeadDetail={handleOpenLeadDetail}
            />
          }
        />
        <Route
          path="/lead"
          element={
            <LeadDetailPage
              lead={location.state?.lead}
              onBack={handleBackToLeads}
              onOpenQuotePrep={handleNavigateToQuotePrep}
            />
          }
        />
        <Route
          path="/quote-prep"
          element={
            <QuotePrepPage
              onBack={handleBackToBriefing}
              onGenerateQuote={handleGenerateQuote}
            />
          }
        />
        <Route
          path="/customer360"
          element={<Customer360Page onBack={handleBackToQuotePrep} />}
        />
        <Route
          path="/quotes"
          element={<QuotesPage />}
        />
        <Route
          path="/pipeline"
          element={<PipelinePage />}
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
