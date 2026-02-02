import { AlertTriangle, Clock, MapPin, User, TrendingUp, ArrowRight } from 'lucide-react';

interface LeadsPageProps {
  onOpenLeadDetail: (lead: any) => void;
}

const LeadsPage = ({ onOpenLeadDetail }: LeadsPageProps) => {
  const immediateFocusLeads = [
    {
      id: 1,
      company: 'ACME CORP',
      industry: 'IT SERVICES',
      time: '10:30 AM',
      type: 'On-site Visit',
      contact: 'David Martinez',
      title: 'Director of IT',
      location: 'Boston, MA',
      lastContact: '14 days ago',
      risk: 'No recent activity',
      insight: 'No engagement since initial inquiry. Competitor evaluation likely. On-site visit is critical to re-establish value.'
    },
    {
      id: 2,
      company: 'NOVA HEALTH',
      industry: 'HEALTHCARE',
      time: '1:00 PM',
      type: 'Virtual Meeting',
      contact: 'Dr. Sarah Thompson',
      title: 'Chief Medical Officer',
      location: 'Remote',
      lastContact: '3 days ago',
      risk: 'Notes incomplete',
      insight: 'Standard check-in. Previous meeting notes are missing. Review past interactions before call.'
    },
    {
      id: 3,
      company: 'TECHFLOW INDUSTRIES',
      industry: 'MANUFACTURING',
      time: '2:00 PM',
      type: 'Executive Call',
      contact: 'Robert Chen',
      title: 'CEO',
      location: 'San Jose, CA',
      lastContact: '2 days ago',
      risk: 'Budget decision pending',
      insight: 'TechCorp closing prep call. Decision maker ready to finalize terms. Quote and technical specs pre-approved.'
    },
    {
      id: 4,
      company: 'ORION LOGISTICS',
      industry: 'TRANSPORTATION',
      time: '4:15 PM',
      type: 'Phone Call',
      contact: 'James Wilson',
      title: 'VP Operations',
      location: 'Chicago, IL',
      lastContact: '1 week ago',
      risk: 'Previous: Interested',
      insight: 'Follow-up on pricing inquiry sent last week. No response to email. Opportunity to address concerns directly.'
    }
  ];

  const pipelineLeads = [
    {
      id: 5,
      company: 'GLOBAL DYNAMICS',
      industry: 'FINANCE',
      time: 'Tuesday',
      type: 'Discovery Call',
      contact: 'Amanda Foster',
      title: 'CFO',
      location: 'New York, NY',
      lastContact: '5 days ago',
      risk: 'New opportunity',
      insight: 'Inbound lead from webinar. High intent signals detected. Enterprise budget confirmed. Schedule discovery to qualify needs.'
    },
    {
      id: 6,
      company: 'SUMMIT RETAIL',
      industry: 'RETAIL',
      time: 'Wednesday',
      type: 'Demo Session',
      contact: 'Kevin Park',
      title: 'VP of Operations',
      location: 'Seattle, WA',
      lastContact: '8 days ago',
      risk: 'Competitor comparison',
      insight: 'Evaluating three vendors. Demo requested for inventory management module. Technical requirements documented.'
    },
    {
      id: 7,
      company: 'NEXUS PHARMA',
      industry: 'PHARMACEUTICAL',
      time: 'Thursday',
      type: 'Virtual Meeting',
      contact: 'Dr. Maria Santos',
      title: 'Head of R&D',
      location: 'Remote',
      lastContact: '6 days ago',
      risk: 'Compliance review needed',
      insight: 'Follow-up on compliance requirements. Legal team reviewing terms. Positive signals but timeline extending into Q2.'
    },
    {
      id: 8,
      company: 'VERTEX ENERGY',
      industry: 'ENERGY',
      time: 'Friday',
      type: 'On-site Visit',
      contact: 'Michael Torres',
      title: 'Director of IT',
      location: 'Houston, TX',
      lastContact: '4 days ago',
      risk: 'Technical validation pending',
      insight: 'Infrastructure assessment visit scheduled. Engineering team needs to validate integration requirements before proposal.'
    }
  ];

  return (
    <>
      <div className="bg-slate-900/30 border-b border-slate-700/50">
        <div className="max-w-[1600px] mx-auto px-8 py-12">
          <h1 className="text-4xl font-light text-white mb-4">
            Hi Nirmal, you have <span className="text-blue-400 font-semibold">12 leads</span> requiring attention this week.
          </h1>
          <p className="text-base text-blue-300 leading-relaxed max-w-4xl">
            Your calendar shows 4 critical meetings today. ACME CORP needs immediate follow-up after 14 days of silence, while TechFlow's CEO call at 2 PM could close the deal. I've prioritized your pipeline and flagged conversation gaps that need addressing.
          </p>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-8 py-10">
        {/* Immediate Focus: Today */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">Immediate Focus: Today</h2>
          <div className="grid grid-cols-3 gap-6">
            {immediateFocusLeads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-7">
                  <div className="flex gap-4 mb-6">
                    <div className="w-14 h-14 bg-slate-900 text-white flex items-center justify-center flex-shrink-0 rounded-xl shadow-md">
                      <span className="text-xl font-bold">{lead.id}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{lead.company}</h3>
                      <p className="text-xs text-blue-600 uppercase tracking-wide font-semibold">{lead.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-slate-900">{lead.time}</span>
                      <span className="text-slate-600">{lead.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-slate-900">{lead.contact}</span>
                    </div>
                    <div className="text-xs text-slate-600 ml-6">{lead.title}</div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span className="text-slate-600">{lead.location}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-700">Risk Assessment</span>
                    </div>
                    <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                      <p className="text-sm font-semibold text-slate-900 mb-1">{lead.risk}</p>
                      <p className="text-xs text-slate-600">Last contact: {lead.lastContact}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-700">Agent Context</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{lead.insight}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <button className="w-full py-2.5 px-4 bg-white border border-slate-200 text-slate-900 text-sm font-normal hover:border-blue-400 hover:bg-blue-50 transition-all" style={{ borderRadius: '0.35rem' }}>
                      Call Before Visit
                    </button>
                    <button className="w-full py-2.5 px-4 bg-white border border-slate-200 text-slate-900 text-sm font-normal hover:border-blue-400 hover:bg-blue-50 transition-all" style={{ borderRadius: '0.35rem' }}>
                      Reschedule
                    </button>
                  </div>

                  <button
                    onClick={() => onOpenLeadDetail(lead)}
                    className="w-full py-3.5 px-4 bg-slate-900 text-white text-sm font-normal hover:bg-slate-800 transition-colors flex items-center justify-between"
                    style={{ borderRadius: '0.35rem' }}
                  >
                    <span>Open Lead Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline: This Week */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">Pipeline: This Week</h2>
          <div className="grid grid-cols-3 gap-6">
            {pipelineLeads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-7">
                  <div className="flex gap-4 mb-6">
                    <div className="w-14 h-14 bg-slate-900 text-white flex items-center justify-center flex-shrink-0 rounded-xl shadow-md">
                      <span className="text-xl font-bold">{lead.id}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{lead.company}</h3>
                      <p className="text-xs text-blue-600 uppercase tracking-wide font-semibold">{lead.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-slate-900">{lead.time}</span>
                      <span className="text-slate-600">{lead.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-slate-900">{lead.contact}</span>
                    </div>
                    <div className="text-xs text-slate-600 ml-6">{lead.title}</div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span className="text-slate-600">{lead.location}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-700">Risk Assessment</span>
                    </div>
                    <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                      <p className="text-sm font-semibold text-slate-900 mb-1">{lead.risk}</p>
                      <p className="text-xs text-slate-600">Last contact: {lead.lastContact}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-700">Agent Context</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{lead.insight}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <button className="w-full py-2.5 px-4 bg-white border border-slate-200 text-slate-900 text-sm font-normal hover:border-blue-400 hover:bg-blue-50 transition-all" style={{ borderRadius: '0.35rem' }}>
                      Call Before Visit
                    </button>
                    <button className="w-full py-2.5 px-4 bg-white border border-slate-200 text-slate-900 text-sm font-normal hover:border-blue-400 hover:bg-blue-50 transition-all" style={{ borderRadius: '0.35rem' }}>
                      Reschedule
                    </button>
                  </div>

                  <button
                    onClick={() => onOpenLeadDetail(lead)}
                    className="w-full py-3.5 px-4 bg-slate-900 text-white text-sm font-normal hover:bg-slate-800 transition-colors flex items-center justify-between"
                    style={{ borderRadius: '0.35rem' }}
                  >
                    <span>Open Lead Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default LeadsPage;
