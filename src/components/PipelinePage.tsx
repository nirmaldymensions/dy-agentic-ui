import { useState } from 'react';
import { TrendingUp, AlertCircle, Target, ArrowRight, Calendar, FileText } from 'lucide-react';
import DealDetailPanel from './DealDetailPanel';

const PipelinePage = () => {
  const userName = "Nirmal";
  const totalPipelineValue = 282000;
  const [selectedDeal, setSelectedDeal] = useState<any>(null);
  const activeDeals = [
    {
      id: 1,
      title: 'Cloud Migration Phase 2',
      company: 'Acme Corp',
      amount: 75000,
      status: 'NEGOTIATION',
      statusColor: 'amber',
      risk: 'OVERDUE',
      dueDate: '12/20/2025',
      insight: 'Project timeline slipping. Client concerned about resource allocation. Schedule alignment meeting to address scope and delivery commitments.'
    },
    {
      id: 2,
      title: 'Enterprise Security Audit',
      company: 'FinanceHub',
      amount: 42000,
      status: 'QUOTE READY',
      statusColor: 'blue',
      risk: null,
      dueDate: '2/5/2025',
      insight: 'Security requirements finalized. Quote prepared and ready for review. High confidence based on prior engagement success.'
    },
    {
      id: 3,
      title: 'Hardware Refresh 2024',
      company: 'TechFlow Industries',
      amount: 85000,
      status: 'PROPOSAL',
      statusColor: 'purple',
      risk: null,
      dueDate: '1/28/2025',
      insight: 'CFO sign-off pending. Proposal addresses all technical requirements. Budget approved, awaiting final executive review.'
    },
    {
      id: 4,
      title: 'Custom CRM Integration',
      company: 'Startup Hub',
      amount: 28000,
      status: 'QUOTE READY',
      statusColor: 'blue',
      risk: 'OVERDUE',
      dueDate: '1/29/2025',
      insight: 'Quote ready but client engagement has stalled. Competitor evaluation likely. Proactive outreach recommended to re-establish momentum.'
    },
    {
      id: 5,
      title: 'SaaS License Expansion',
      company: 'Blue Service Corp',
      amount: 15500,
      status: 'QUOTE READY',
      statusColor: 'blue',
      risk: null,
      dueDate: '1/31/2025',
      insight: 'Straightforward renewal with expansion. Decision maker aligned. High probability close within current quarter.'
    },
    {
      id: 6,
      title: 'AI Analytics Pilot',
      company: 'Tech Labs Inc',
      amount: 9200,
      status: 'QUOTE READY',
      statusColor: 'blue',
      risk: null,
      dueDate: '1/30/2025',
      insight: 'Pilot program scoped and priced. Technical validation complete. Awaiting procurement approval to proceed.'
    },
    {
      id: 7,
      title: 'Infrastructure Resilience Pack',
      company: 'CloudTech Systems',
      amount: 42000,
      status: 'QUOTE READY',
      statusColor: 'blue',
      risk: null,
      dueDate: '2/8/2025',
      insight: 'Infrastructure assessment completed. Solution architecture approved. Quote reflects custom requirements and timeline.'
    },
    {
      id: 8,
      title: 'Mobile App Revamp',
      company: 'Swift Digital',
      amount: 65000,
      status: 'QUOTE READY',
      statusColor: 'blue',
      risk: null,
      dueDate: '2/10/2025',
      insight: 'Design phase completed successfully. Development scope finalized. Strong relationship with stakeholders indicates high win probability.'
    }
  ];

  const atRiskCount = activeDeals.filter(deal => deal.risk === 'OVERDUE').length;
  const highPotentialDeals = activeDeals.filter(deal => deal.amount >= 50000);

  const getStatusBadgeColors = (color: string) => {
    const colors = {
      amber: 'bg-amber-100 text-amber-700 border-amber-200',
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      green: 'bg-green-100 text-green-700 border-green-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <div className="bg-slate-900/30 border-b border-slate-700/50">
        <div className="max-w-[1600px] mx-auto px-8 py-12">
          <h1 className="text-4xl font-light text-white mb-4">
            Hi {userName}, your pipeline holds <span className="text-blue-400 font-semibold">${(totalPipelineValue / 1000).toFixed(0)}K</span> in potential.
          </h1>
          <p className="text-base text-blue-300 leading-relaxed max-w-4xl">
            While your momentum is generally good, the 'Cloud Migration Phase 2' deal with Acme Services is now 1 day overdue. With a competitive review in progress and CFO sign-off pending, this $75K opportunity needs immediate intervention to prevent stalling.
          </p>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-8 py-10">
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Pipeline Intelligence</h2>
              <p className="text-sm text-blue-300">Manage active deals and review <span className="text-red-400 font-semibold">{atRiskCount} stalled opportunities</span></p>
            </div>
            <button className="px-5 py-3 bg-white text-slate-900 text-xs font-normal uppercase tracking-wider hover:bg-blue-50 transition-colors shadow-md" style={{ borderRadius: '0.35rem' }}>
              VIEW DEAL MAP
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Pipeline Value</span>
              </div>
              <div className="text-3xl font-bold text-white">${(totalPipelineValue / 1000).toFixed(1)}K</div>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">At Risk / Overdue</span>
              </div>
              <div className="text-3xl font-bold text-white">{atRiskCount} Deals</div>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-green-400" />
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">High Potential</span>
              </div>
              <div className="text-3xl font-bold text-white">{highPotentialDeals.length} Strategic</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {activeDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded-xl shadow-md">
                    {deal.risk === 'OVERDUE' ? (
                      <AlertCircle className="w-6 h-6 text-amber-400" />
                    ) : (
                      <TrendingUp className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">POTENTIAL</div>
                    <div className="text-2xl font-bold text-slate-900">${deal.amount.toLocaleString()}</div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">{deal.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{deal.company}</p>

                <div className="flex items-center gap-2 flex-wrap mb-5">
                  <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide border rounded-full ${getStatusBadgeColors(deal.statusColor)}`}>
                    {deal.status}
                  </span>
                  {deal.risk && (
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide border rounded-full bg-red-100 text-red-700 border-red-200">
                      {deal.risk}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-6 text-sm">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="font-semibold text-slate-900">{deal.dueDate}</span>
                </div>

                <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-700">Agent Context</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{deal.insight}</p>
                </div>

                <div className="space-y-2 mb-4">
                  {deal.risk === 'OVERDUE' && (
                    <button className="w-full py-2.5 px-4 bg-white border border-slate-200 text-slate-900 text-sm font-normal hover:border-blue-400 hover:bg-blue-50 transition-all" style={{ borderRadius: '0.35rem' }}>
                      Pivot Strategy
                    </button>
                  )}
                  <button className="w-full py-2.5 px-4 bg-white border border-slate-200 text-slate-900 text-sm font-normal hover:border-blue-400 hover:bg-blue-50 transition-all" style={{ borderRadius: '0.35rem' }}>
                    View Quote
                  </button>
                </div>

                <button
                  onClick={() => setSelectedDeal(deal)}
                  className="w-full py-3.5 px-4 bg-slate-900 text-white text-sm font-normal hover:bg-slate-800 transition-colors flex items-center justify-between"
                  style={{ borderRadius: '0.35rem' }}
                >
                  <span>Full Context</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedDeal && (
        <DealDetailPanel
          deal={selectedDeal}
          onClose={() => setSelectedDeal(null)}
        />
      )}
    </>
  );
};

export default PipelinePage;
