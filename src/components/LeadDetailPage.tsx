import { ArrowLeft, MapPin, User, TrendingUp, Activity, Mail, Calendar } from 'lucide-react';

interface LeadDetailPageProps {
  lead: any;
  onBack: () => void;
  onOpenQuotePrep: () => void;
}

const LeadDetailPage = ({ onBack, onOpenQuotePrep }: LeadDetailPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-50">
      <div className="bg-slate-900/30 border-b border-slate-700/50">
        <div className="max-w-[1600px] mx-auto px-8 py-12">
          <h1 className="text-4xl font-light text-white mb-4">
            Hi Nirmal, this <span className="text-blue-400 font-semibold">$120K opportunity</span> needs immediate attention.
          </h1>
          <p className="text-base text-blue-300 leading-relaxed max-w-4xl">
            ACME CORP is showing warning signs of disengagement. The decision maker has changed, communication has gone silent for 14 days, and competitors are being evaluated. I've prepared an intervention strategy with 88% confidence based on similar recovery scenarios.
          </p>
        </div>
      </div>
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-[1600px] mx-auto px-8 py-5">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Leads</span>
          </button>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-light text-white">ACME CORP</h1>
                <div className="px-3 py-1.5 bg-red-500 text-white text-xs font-normal uppercase shadow-md" style={{ borderRadius: '0.35rem' }}>
                  OVERDUE
                </div>
              </div>
              <p className="text-base text-blue-300 mb-2">Opportunity: Server Migration Project</p>
              <div className="flex items-center gap-5 text-sm">
                <span className="text-blue-300">Value: <span className="font-bold text-white">$120K</span></span>
                <span className="text-blue-300">Stage: <span className="font-bold text-white">Negotiation</span></span>
                <span className="text-blue-300">Close: <span className="font-bold text-white">Jan 31</span></span>
              </div>
            </div>
            <button className="px-5 py-3 bg-white text-slate-900 text-xs font-normal uppercase tracking-wider hover:bg-blue-50 transition-colors shadow-md" style={{ borderRadius: '0.35rem' }}>
              INSIGHT VIEW
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-8 py-10">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xs uppercase tracking-wider text-blue-600 mb-6 flex items-center gap-2 font-semibold">
                <Activity className="w-4 h-4" />
                Contextual Intelligence
              </h3>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-xs uppercase tracking-wide text-slate-500 font-medium">Location</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900">San Francisco, CA</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-blue-500" />
                    <span className="text-xs uppercase tracking-wide text-slate-500 font-medium">Decision Maker</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900">Sarah Jenkins</p>
                  <p className="text-xs text-slate-600 mb-2">Interim CTO</p>
                  <div className="mt-2 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                    <p className="text-xs text-slate-700 italic">Previous DM left organization</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span className="text-xs uppercase tracking-wide text-slate-500 font-medium">Key Signals</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                      <p className="text-xs text-slate-900 font-medium">No email reply (14 days)</p>
                    </div>
                    <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                      <p className="text-xs text-slate-900 font-medium">Declined QBR invite</p>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                      <p className="text-xs text-slate-900 font-medium">LinkedIn: Hiring "Cloud Architect"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-5">
              <h4 className="text-xs uppercase tracking-wider text-blue-600 mb-4 font-semibold">Quick Actions</h4>
              <div className="space-y-2">
                <button className="w-full py-2.5 px-4 bg-white border border-slate-200 text-slate-900 text-xs font-normal hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center justify-between" style={{ borderRadius: '0.35rem' }}>
                  <span>Send Follow-up</span>
                  <Mail className="w-3.5 h-3.5" />
                </button>
                <button className="w-full py-2.5 px-4 bg-white border border-slate-200 text-slate-900 text-xs font-normal hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center justify-between" style={{ borderRadius: '0.35rem' }}>
                  <span>Update Timeline</span>
                  <Calendar className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenQuotePrep}
                  className="w-full py-3 px-4 bg-slate-900 text-white text-xs font-normal hover:bg-slate-800 transition-colors shadow-md"
                  style={{ borderRadius: '0.35rem' }}
                >
                  Quote Prep →
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9 space-y-6">
            {/* Top Row: Recommended Actions & Model Confidence side by side */}
            <div className="grid grid-cols-2 gap-6">
              {/* Recommended Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-7">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 bg-slate-900 flex items-center justify-center rounded-lg">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Recommended Actions</h3>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg mb-5">
                  <p className="text-sm text-slate-800 leading-relaxed">
                    Role change and communication silence detected. Standard follow-up insufficient. Intervention plan prepared.
                  </p>
                </div>

                <div className="space-y-3 mb-5">
                  <button className="w-full py-3 px-4 bg-white border border-slate-200 text-left hover:border-blue-400 hover:bg-blue-50 transition-all" style={{ borderRadius: '0.35rem' }}>
                    <span className="font-bold text-slate-900 text-sm">Send Follow-up Email</span>
                    <p className="text-xs text-slate-600 mt-1">Standard outreach template</p>
                  </button>
                  <button className="w-full py-3 px-4 bg-white border border-slate-200 text-left hover:border-blue-400 hover:bg-blue-50 transition-all" style={{ borderRadius: '0.35rem' }}>
                    <span className="font-bold text-slate-900 text-sm">Update Close Date</span>
                    <p className="text-xs text-slate-600 mt-1">Adjust timeline expectations</p>
                  </button>
                </div>

                <button className="w-full py-4 px-4 bg-slate-900 text-white text-sm font-normal hover:bg-slate-800 transition-colors shadow-md" style={{ borderRadius: '0.35rem' }}>
                  Execute: Send "New Leadership" Kit →
                </button>

                <p className="text-xs text-slate-500 text-center mt-3">
                  Auto-generates email draft + schedules courier for physical kit.
                </p>
              </div>

              {/* Model Confidence */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl shadow-lg p-7">
                <h3 className="text-xs uppercase tracking-wider text-blue-300 mb-5 font-semibold">MODEL CONFIDENCE</h3>
                <div className="flex items-end gap-4 mb-5">
                  <span className="text-6xl font-light">88%</span>
                  <div className="pb-2">
                    <div className="px-4 py-1.5 bg-white text-slate-900 font-normal text-xs" style={{ borderRadius: '0.35rem' }}>
                      HIGH
                    </div>
                  </div>
                </div>
                <div className="w-full h-3 bg-slate-700 rounded-full mb-5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Based on historical churn data from similar accounts with stakeholder turnover patterns.
                </p>
              </div>
            </div>

            {/* Agent Notes */}
            <div className="bg-white rounded-2xl shadow-lg p-7">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h3 className="text-xs uppercase tracking-wider text-blue-600 font-semibold">AGENT NOTES</h3>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-wide">Why This Is Flagged:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-900 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm text-slate-700">Expected close date passed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-900 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm text-slate-700">No stage update in 14 days</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-900 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm text-slate-700">Primary champion (CTO) has left the company</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-wide">Recommendation:</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Bypass standard check-in. Pivot to establishing value with the Interim CTO immediately via the "New Leadership" intervention. This approach has shown 73% success rate in similar scenarios where stakeholder turnover creates relationship reset opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeadDetailPage;
