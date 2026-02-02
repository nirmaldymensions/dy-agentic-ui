import { ArrowLeft, Building2, TrendingUp, Users, Mail, Phone, Globe, Zap, ChevronRight, DollarSign, Activity } from 'lucide-react';

interface Customer360PageProps {
  onBack: () => void;
}

const Customer360Page = ({ onBack }: Customer360PageProps) => {
  return (
    <>
      <div className="bg-slate-900/30 border-b border-slate-700/50">
        <div className="max-w-[1600px] mx-auto px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Quote Prep</span>
          </button>

          <h1 className="text-4xl font-light text-white mb-4">
            Hi Nirmal, Azure Services Corp has <span className="text-blue-400 font-semibold">$90.5K</span> in active pipeline.
          </h1>
          <p className="text-base text-blue-300 leading-relaxed max-w-4xl mb-6">
            This Gold Tier account maintains an 85% health score with $250K lifetime value. Cloud Migration Phase 2 is overdue and requires intervention. I've analyzed their engagement patterns, key contacts, and recent interactions to recommend the highest-impact next steps for account acceleration.
          </p>

          <div className="flex gap-2">
            <button className="px-5 py-2.5 bg-white text-slate-900 text-xs font-normal hover:bg-blue-50 transition-colors shadow-md" style={{ borderRadius: '0.35rem' }}>
              Azure Services Corp
            </button>
            <button className="px-5 py-2.5 bg-slate-800 border border-slate-700 text-slate-300 text-xs font-normal hover:bg-slate-700 transition-colors" style={{ borderRadius: '0.35rem' }}>
              SecureBank Inc
            </button>
            <button className="px-5 py-2.5 bg-slate-800 border border-slate-700 text-slate-300 text-xs font-normal hover:bg-slate-700 transition-colors" style={{ borderRadius: '0.35rem' }}>
              EduTech Solutions
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-8 py-10">
        {/* Account Header */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-slate-900 flex items-center justify-center flex-shrink-0 rounded-2xl shadow-md">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-2xl font-bold text-slate-900">Azure Services Corp</h2>
                <div className="px-4 py-1.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-md">
                  GOLD TIER
                </div>
              </div>
              <p className="text-base text-slate-700 mb-4">
                Leading provider of managed cloud services and infrastructure.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span className="text-slate-600 font-medium">azure-services.corp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-500" />
                  <span className="text-slate-600 font-medium">Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-slate-600 font-medium">500-1000 employees</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-xs uppercase tracking-wide text-blue-600 font-bold">Health Score</span>
            </div>
            <div className="text-4xl font-light text-slate-900 mb-3">85%</div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <span className="text-xs uppercase tracking-wide text-blue-600 font-bold">Total Pipeline</span>
            </div>
            <div className="text-4xl font-light text-slate-900">$90.5k</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-xs uppercase tracking-wide text-blue-600 font-bold">LTV</span>
            </div>
            <div className="text-4xl font-light text-slate-900">$250k</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-xs uppercase tracking-wide text-blue-600 font-bold">Contacts</span>
            </div>
            <div className="text-4xl font-light text-slate-900">12</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-4 space-y-6">
            {/* Key Contacts */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-5">KEY CONTACTS</h3>
              <div className="space-y-3">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="font-bold text-base text-slate-900 mb-1">Michael Chen</p>
                  <p className="text-xs text-slate-600 mb-3">VP of Engineering</p>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-400 transition-all" style={{ borderRadius: '0.35rem' }}>
                      <Mail className="w-3.5 h-3.5 text-slate-600" />
                    </button>
                    <button className="p-2 bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-400 transition-all" style={{ borderRadius: '0.35rem' }}>
                      <Phone className="w-3.5 h-3.5 text-slate-600" />
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="font-bold text-base text-slate-900 mb-1">Lisa Rodriguez</p>
                  <p className="text-xs text-slate-600 mb-3">Director, Cloud Operations</p>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-400 transition-all" style={{ borderRadius: '0.35rem' }}>
                      <Mail className="w-3.5 h-3.5 text-slate-600" />
                    </button>
                    <button className="p-2 bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-400 transition-all" style={{ borderRadius: '0.35rem' }}>
                      <Phone className="w-3.5 h-3.5 text-slate-600" />
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="font-bold text-base text-slate-900 mb-1">James Park</p>
                  <p className="text-xs text-slate-600 mb-3">Procurement Manager</p>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-400 transition-all" style={{ borderRadius: '0.35rem' }}>
                      <Mail className="w-3.5 h-3.5 text-slate-600" />
                    </button>
                    <button className="p-2 bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-400 transition-all" style={{ borderRadius: '0.35rem' }}>
                      <Phone className="w-3.5 h-3.5 text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Engagement */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-5">RECENT ENGAGEMENT</h3>
              <div className="space-y-5">
                <div className="pb-5 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900">Technical call with Michael Chen</span>
                    <span className="text-xs text-blue-600 font-medium">3 days ago</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">Discussed Phase 2 architecture requirements. Positive sentiment detected.</p>
                </div>

                <div className="pb-5 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900">Contract signed: Annual Maintenance</span>
                    <span className="text-xs text-blue-600 font-medium">1 week ago</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">$48K ARR secured. 24-month commitment confirmed.</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900">QBR scheduled for Q2</span>
                    <span className="text-xs text-blue-600 font-medium">2 weeks ago</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">Quarterly business review with executive stakeholders confirmed.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-8 space-y-6">
            {/* Agentic Recommendations */}
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl shadow-lg p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-xl shadow-md">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Agentic Recommendations</h2>
              </div>
              <p className="text-slate-700 mb-6 text-base">AI-driven next steps for account acceleration</p>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center flex-shrink-0 rounded-xl shadow-md">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-900 mb-3">Stagnant Pipeline Rescue</h3>
                    <p className="text-slate-700 mb-5 text-base leading-relaxed">
                      "Cloud Migration Phase 2" is overdue. Send a personalized follow-up addressing potential budget blockers mentioned in previous notes.
                    </p>
                    <button className="px-6 py-3 bg-slate-900 text-white text-sm font-normal hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-md" style={{ borderRadius: '0.35rem' }}>
                      <span>Draft Follow-up</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Opportunities */}
            <div className="bg-white rounded-2xl shadow-lg p-7">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-xl shadow-md">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Active Opportunities</h2>
                </div>
                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-sm font-semibold">
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded-xl shadow-md">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-slate-900 mb-1">Cloud Migration Phase 2</h3>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-slate-600">Negotiation</span>
                          <span className="text-sm font-bold text-slate-900">$75,000</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-slate-900 transition-colors" />
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded-xl shadow-md">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-slate-900 mb-1">SaaS License Expansion</h3>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-sm text-slate-600">Quote Ready</span>
                          <span className="text-sm font-bold text-slate-900">$15,500</span>
                        </div>
                        <div className="px-3 py-1.5 bg-slate-900 text-white text-xs font-bold inline-block rounded-lg shadow-md">
                          READY TO QUOTE
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-slate-900 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Customer360Page;
