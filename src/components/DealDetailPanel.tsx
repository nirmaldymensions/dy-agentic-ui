import { X, Building2, DollarSign, Sparkles, CheckCircle, AlertCircle, FileText, Plus } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';

interface Deal {
  id: number;
  title: string;
  company: string;
  amount: number;
  status: string;
  statusColor: string;
  risk: string | null;
  dueDate: string;
  insight: string;
}

interface DealDetailPanelProps {
  deal: Deal;
  onClose: () => void;
}

const DealDetailPanel = ({ deal, onClose }: DealDetailPanelProps) => {
  const aiInsight = `With the scope finalized and the stage set to '${deal.status}', the priority is speed and precision. This deal represents a ${deal.amount >= 50000 ? 'high-value strategic opportunity' : 'important tactical opportunity'} where execution excellence is critical. ${deal.risk === 'OVERDUE' ? 'Immediate action required to re-engage and prevent deal stalling. Competitor awareness is high, and client concerns need to be addressed proactively.' : 'The technical requirements have been validated and stakeholder alignment is strong.'} Do not introduce new features now; focus on closing the deal based on the agreed technical scope to secure the $${(deal.amount / 1000).toFixed(1)}K revenue.`;

  const suggestedSteps = deal.risk === 'OVERDUE'
    ? [
        'Schedule an urgent alignment call with key stakeholders to address concerns and re-establish momentum.',
        'Review competitor positioning and prepare counter-messaging that highlights unique value propositions.',
        'Prepare an executive summary deck with clear ROI metrics and timeline commitments for immediate delivery.'
      ]
    : [
        'Generate and send the formal quote immediately, ensuring all technical requirements are highlighted in the executive summary.',
        `Schedule a ${deal.amount >= 50000 ? '45-minute' : '30-minute'} review call with the decision makers to walk through the pricing and confirm the procurement path.`,
        'Prepare the final Statement of Work (SOW) for signature to send immediately upon quote approval.'
      ];

  const lastActivity = deal.risk === 'OVERDUE'
    ? 'Last contact 14 days ago. No response to follow-up emails. Competitor evaluation likely in progress.'
    : 'Finalized scope of work with technical team. All requirements documented and approved.';

  const knownBlockers = deal.risk === 'OVERDUE'
    ? ['Timeline concerns from client side', 'Competing vendor proposals under review', 'Budget approval still pending with CFO']
    : [];

  const keyRequirements = [
    deal.amount >= 50000 ? 'Enterprise-grade security and compliance controls' : 'Standard security protocols and data protection',
    'Detailed implementation timeline with milestones',
    deal.company.toLowerCase().includes('bank') || deal.company.toLowerCase().includes('finance') ? 'PCI-DSS compliance certification' : 'Industry-standard compliance',
    'Dedicated support and onboarding resources'
  ];

  const { displayedText: aiInsightText, isComplete: aiInsightComplete } = useTypingEffect(aiInsight, 8, 200);

  return (
    <>
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-[480px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 z-10">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-2">
                {deal.risk === 'OVERDUE' ? 'DEAL DRILL-DOWN' : 'DEAL OVERVIEW'}
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{deal.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>
        </div>

        <div className="px-8 py-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-4 h-4 text-slate-600" />
                <span className="text-xs text-slate-600 uppercase tracking-wider font-semibold">Company</span>
              </div>
              <div className="text-lg font-bold text-slate-900">{deal.company}</div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-slate-600" />
                <span className="text-xs text-slate-600 uppercase tracking-wider font-semibold">Potential Value</span>
              </div>
              <div className="text-lg font-bold text-slate-900">${deal.amount.toLocaleString()}</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-wider">AI Strategic Insights</span>
            </div>
            <p className="text-base leading-relaxed">
              {aiInsightText}
              {!aiInsightComplete && <span className="inline-block w-1 h-4 bg-white ml-1 animate-pulse" />}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="text-sm uppercase tracking-wider font-bold text-slate-700">Suggested Next Steps</span>
            </div>
            <div className="space-y-3">
              {suggestedSteps.map((step, index) => (
                <AnimatedStep key={index} step={step} index={index} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-slate-600" />
              <span className="text-sm uppercase tracking-wider font-bold text-slate-700">Last Activity</span>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <p className="text-sm text-slate-700">{lastActivity}</p>
            </div>
          </div>

          {knownBlockers.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="text-sm uppercase tracking-wider font-bold text-slate-700">Known Blockers</span>
              </div>
              <div className="space-y-2">
                {knownBlockers.map((blocker, index) => (
                  <div key={index} className="bg-red-50 rounded-lg p-3 border border-red-200">
                    <p className="text-sm text-red-900">{blocker}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-slate-600" />
              <span className="text-sm uppercase tracking-wider font-bold text-slate-700">Key Requirements</span>
            </div>
            <div className="space-y-2">
              {keyRequirements.map((requirement, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <p className="text-sm text-slate-700">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-slate-200 px-8 py-6 space-y-3">
          <button className="w-full py-2.5 px-4 bg-white border border-slate-200 text-slate-900 text-sm font-normal hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center justify-center gap-2" style={{ borderRadius: '0.35rem' }}>
            <Plus className="w-4 h-4" />
            Add Task
          </button>
          <button className="w-full py-3.5 px-4 bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors" style={{ borderRadius: '0.35rem' }}>
            Update Lead
          </button>
        </div>
      </div>
    </>
  );
};

const AnimatedStep = ({ step, index }: { step: string; index: number }) => {
  const { displayedText, isComplete } = useTypingEffect(step, 8, 600 + (index * 300));

  return (
    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
      <p className="text-sm text-slate-800 leading-relaxed">
        {displayedText}
        {!isComplete && <span className="inline-block w-1 h-3 bg-blue-600 ml-1 animate-pulse" />}
      </p>
    </div>
  );
};

export default DealDetailPanel;
