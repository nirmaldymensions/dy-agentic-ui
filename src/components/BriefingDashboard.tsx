import { ChevronRight, Clock, FileText, ArrowRight } from 'lucide-react';

interface BriefingDashboardProps {
  onOpenDetail: (opportunity: any) => void;
  onNavigateToLeads: () => void;
  onNavigateToOverdueDeals: () => void;
  onNavigateToQuotePrep: () => void;
}

const BriefingDashboard = ({ onOpenDetail, onNavigateToLeads, onNavigateToOverdueDeals, onNavigateToQuotePrep }: BriefingDashboardProps) => {
  const userName = "Nirmal";

  const recentOrchestrations = [
    {
      id: 1,
      timestamp: "10:42 AM",
      account: "Global Systems Inc.",
      opportunity: "Server Migration",
      status: "RISK DETECTED",
      reasoning: "Stakeholder churn (CTO left) identified; 'Win-Back' playbook recommended."
    },
    {
      id: 2,
      timestamp: "09:15 AM",
      account: "Apex Logistics",
      opportunity: "Fleet Tracking",
      status: "RESEARCH COMPLETE",
      reasoning: "Competitor analysis compiled from Q3 earnings call to support negotiation."
    }
  ];

  return (
    <>
      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-8 py-12">
        {/* Agent Briefing Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-white mb-2">
            Good morning, {userName}.
          </h1>
          <p className="text-lg text-blue-300">
            Your priority today is the <span className="font-semibold text-white">TechCorp closing</span>. You have <span className="font-semibold text-white">4 appointments</span> today; a summary is drafted for the <span className="font-semibold text-white">2:00 PM call</span>. <span className="font-semibold text-white">Attention Needed: 2 Opportunities</span> (Project Phoenix, SolarLink) are overdue for a follow-up. <span className="font-semibold text-white">Quick Win:</span> Acme Inc. has moved to 'Decision' stage—quote is prepared for review.
          </p>
        </div>

        {/* Agent Insight Cards */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {/* Card 1: Appointments Today */}
          <div style={{ backgroundColor: '#e3e8f2' }} className="rounded-2xl shadow-lg p-7 hover:shadow-xl transition-all flex flex-col">
            <div className="flex-1 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-slate-600" />
                <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold">APPOINTMENTS TODAY</div>
              </div>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Site visit with Acme Corp scheduled for 10:30 AM.</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Activity gap detected. This visit is critical for re-engagement. 'IT Services' pitch deck recommended for review.
              </p>
            </div>
            <button
              onClick={onNavigateToLeads}
              className="w-full py-3 px-4 bg-slate-900 text-white text-sm font-normal hover:bg-slate-800 transition-colors flex items-center justify-between"
              style={{ borderRadius: '0.35rem' }}
            >
              <span>View Today's Leads</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Overdue Opportunities */}
          <div style={{ backgroundColor: '#e3e8f2' }} className="rounded-2xl shadow-lg p-7 hover:shadow-xl transition-all flex flex-col">
            <div className="flex-1 mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-600" />
                  <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold">OVERDUE OPPORTUNITIES</div>
                </div>
                <div className="px-2.5 py-1 bg-slate-300 text-slate-900 text-xs font-semibold" style={{ borderRadius: '0.35rem' }}>ACTION REQUIRED</div>
              </div>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Global Systems opportunity is at risk.</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                No activity for 14 days. Primary stakeholder changed roles on LinkedIn yesterday. Immediate re-engagement required.
              </p>
            </div>
            <button
              onClick={onNavigateToOverdueDeals}
              className="w-full py-3 px-4 bg-slate-900 text-white text-sm font-normal hover:bg-slate-800 transition-colors flex items-center justify-between"
              style={{ borderRadius: '0.35rem' }}
            >
              <span>Review Overdue Deals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Ready for Quote */}
          <div style={{ backgroundColor: '#e3e8f2' }} className="rounded-2xl shadow-lg p-7 hover:shadow-xl transition-all flex flex-col">
            <div className="flex-1 mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-600" />
                  <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold">READY FOR QUOTE</div>
                </div>
                <div className="px-2.5 py-1 bg-slate-300 text-slate-900 text-xs font-semibold" style={{ borderRadius: '0.35rem' }}>READY</div>
              </div>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Delta Manufacturing expansion deal.</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pricing validation complete. Legal terms approved. Proposal draft created based on "Expansion Deal" tier.
              </p>
            </div>
            <button
              onClick={onNavigateToQuotePrep}
              className="w-full py-3 px-4 bg-slate-900 text-white text-sm font-normal hover:bg-slate-800 transition-colors flex items-center justify-between"
              style={{ borderRadius: '0.35rem' }}
            >
              <span>Generate Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Recent System Actions */}
        <div className="rounded-2xl shadow-lg overflow-hidden" style={{ backgroundColor: '#e3e8f2' }}>
          <div className="px-7 py-4 flex items-center justify-between">
            <h3 className="text-xs uppercase tracking-wider text-slate-600 font-semibold">RECENT SYSTEM ACTIONS</h3>
            <span className="text-xs text-slate-500">Showing last 24 hours</span>
          </div>
          <div className="divide-y divide-slate-300">
            {recentOrchestrations.map((item) => (
              <button
                key={item.id}
                onClick={() => onOpenDetail(item)}
                className="w-full px-7 py-6 hover:bg-slate-200/50 transition-all text-left flex items-center justify-between group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-xs text-slate-600 font-medium mt-1">{item.timestamp}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-base font-semibold text-slate-900">{item.account} / {item.opportunity}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 bg-slate-300 text-slate-900 text-xs font-semibold tracking-wide" style={{ borderRadius: '0.35rem' }}>{item.status}</span>
                      <p className="text-sm text-slate-700">{item.reasoning}</p>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-700 transition-colors ml-6 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default BriefingDashboard;
