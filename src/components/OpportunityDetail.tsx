import { ArrowLeft } from 'lucide-react';

interface OpportunityDetailProps {
  opportunity: any;
  onBack: () => void;
}

const OpportunityDetail = ({ opportunity, onBack }: OpportunityDetailProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-50">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-[1600px] mx-auto px-8 py-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Briefing</span>
          </button>

          <div>
            <h1 className="text-5xl font-light text-white mb-3">{opportunity.account}</h1>
            <h2 className="text-2xl text-blue-300 mb-4">{opportunity.opportunity}</h2>
            <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg">
              <span className="text-sm font-medium text-blue-200">Agent Insight</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - 3 Column Layout */}
      <main className="max-w-[1600px] mx-auto px-8 py-12">
        <div className="grid grid-cols-3 gap-6 mb-12">
          {/* Left Column - Contextual Intelligence */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-sm uppercase tracking-wider text-blue-600 mb-6 font-semibold">CONTEXTUAL INTELLIGENCE</h3>

            <div className="space-y-6">
              <div>
                <div className="text-xs text-slate-500 mb-1 font-medium">LOCATION</div>
                <div className="text-slate-900 font-semibold">San Francisco, CA</div>
              </div>

              <div>
                <div className="text-xs text-slate-500 mb-1 font-medium">DECISION MAKER</div>
                <div className="text-slate-900 font-semibold">Sarah Chen</div>
                <div className="text-sm text-slate-600">VP of Engineering</div>
              </div>

              <div>
                <div className="text-xs text-slate-500 mb-1 font-medium">ACCOUNT VALUE</div>
                <div className="text-slate-900 font-semibold text-lg">$340,000</div>
              </div>

              <div>
                <div className="text-xs text-slate-500 mb-1 font-medium">STAGE</div>
                <div className="text-slate-900 font-semibold">Technical Validation</div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs text-slate-500 mb-3 font-medium">KEY SIGNALS</div>
                <div className="space-y-2">
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                    <div className="text-sm text-slate-900">Decision maker role change detected</div>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                    <div className="text-sm text-slate-900">45-day communication gap</div>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                    <div className="text-sm text-slate-900">Budget cycle closing in 21 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Agent Recommended Actions */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-sm uppercase tracking-wider text-blue-600 mb-6 font-semibold">AGENT RECOMMENDED ACTIONS</h3>

            <div className="space-y-3">
              <button className="w-full py-4 px-6 bg-white border border-slate-200 text-slate-900 font-normal hover:border-blue-400 hover:bg-blue-50 transition-all text-left" style={{ borderRadius: '0.35rem' }}>
                Launch Prep Panel
              </button>

              <button className="w-full py-4 px-6 bg-white border border-slate-200 text-slate-900 font-normal hover:border-blue-400 hover:bg-blue-50 transition-all text-left" style={{ borderRadius: '0.35rem' }}>
                Review SLA Documents
              </button>

              <button className="w-full py-4 px-6 bg-white border border-slate-200 text-slate-900 font-normal hover:border-blue-400 hover:bg-blue-50 transition-all text-left" style={{ borderRadius: '0.35rem' }}>
                Access Technical Requirements
              </button>

              <button className="w-full py-4 px-6 bg-white border border-slate-200 text-slate-900 font-normal hover:border-blue-400 hover:bg-blue-50 transition-all text-left" style={{ borderRadius: '0.35rem' }}>
                View Stakeholder Map
              </button>

              <button className="w-full py-4 px-6 bg-white border border-slate-200 text-slate-900 font-normal hover:border-blue-400 hover:bg-blue-50 transition-all text-left" style={{ borderRadius: '0.35rem' }}>
                Review Pricing History
              </button>

              <div className="pt-6">
                <button className="w-full py-5 px-6 bg-slate-900 text-white font-normal hover:bg-slate-800 transition-colors text-lg shadow-md" style={{ borderRadius: '0.35rem' }}>
                  Execute Next Best Action
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Agent Confidence */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-sm uppercase tracking-wider text-blue-600 mb-6 font-semibold">AGENT CONFIDENCE</h3>

            <div className="mb-8">
              <div className="flex items-end justify-between mb-4">
                <div className="text-6xl font-light text-slate-900">87%</div>
                <div className="px-4 py-2 bg-slate-900 text-white text-sm font-normal" style={{ borderRadius: '0.35rem' }}>HIGH</div>
              </div>

              <div className="w-full h-3 bg-slate-200 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-xs text-slate-500 mb-4 font-medium">CONFIDENCE FACTORS</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-700">Historical Win Pattern</span>
                    <span className="text-sm font-semibold text-slate-900">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-700">Engagement Velocity</span>
                    <span className="text-sm font-semibold text-slate-900">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-700">Competitive Position</span>
                    <span className="text-sm font-semibold text-slate-900">79%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-700">Budget Alignment</span>
                    <span className="text-sm font-semibold text-slate-900">94%</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <div className="text-xs text-slate-500 mb-4 font-medium">RISK INDICATORS</div>
                <div className="space-y-3">
                  <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                    <div className="text-sm font-semibold text-slate-900 mb-1">Extended Silence</div>
                    <div className="text-xs text-slate-600">Communication gap may indicate deprioritization</div>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                    <div className="text-sm font-semibold text-slate-900 mb-1">Stakeholder Shift</div>
                    <div className="text-xs text-slate-600">New decision maker requires relationship rebuild</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Analysis */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-sm uppercase tracking-wider text-blue-600 mb-6 font-semibold">NARRATIVE ANALYSIS</h3>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-700 leading-relaxed mb-4 text-base">
              This opportunity requires immediate strategic attention due to a confluence of concerning signals detected by the orchestration agent. The primary decision maker, Sarah Chen, assumed the VP of Engineering role 38 days ago, coinciding with a complete cessation of engagement from the technical evaluation team.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4 text-base">
              Historical pattern analysis indicates that opportunities experiencing both stakeholder turnover and communication gaps exceeding 30 days show a 67% probability of stalling or moving to competitor evaluation. However, the account's budget cycle closes in 21 days, creating a time-sensitive window for re-engagement.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              Agent recommendation: Execute immediate outreach positioning technical validation completion and business value realization timeline. Leverage existing champion relationship with Director of Platform Engineering to facilitate warm introduction to new decision maker. Probability of successful re-engagement is 73% if action is taken within 72 hours.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OpportunityDetail;
