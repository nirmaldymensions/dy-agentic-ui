import { useState } from 'react'
import {
  AlertTriangle,
  Clock,
  MapPin,
  User,
  TrendingUp,
  Mail,
  ChevronRight,
  ExternalLink,
} from 'lucide-react'
import ConvertLeadModal, { type Lead } from './ConvertLeadModal'

interface LeadsPageProps {
  onOpenLeadDetail: (lead: Lead) => void
  onConvertToPipeline: () => void
}

const LeadsPage = ({
  onOpenLeadDetail,
  onConvertToPipeline,
}: LeadsPageProps) => {
  const [convertModalLead, setConvertModalLead] = useState<Lead | null>(null)

  const immediateFocusLeads: Lead[] = [
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
      insight:
        'No engagement since initial inquiry. Competitor evaluation likely. On-site visit is critical to re-establish value.',
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
      insight:
        'Standard check-in. Previous meeting notes are missing. Review past interactions before call.',
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
      insight:
        'TechCorp closing prep call. Decision maker ready to finalize terms. Quote and technical specs pre-approved.',
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
      insight:
        'Follow-up on pricing inquiry sent last week. No response to email. Opportunity to address concerns directly.',
    },
  ]

  const pipelineLeads: Lead[] = [
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
      insight:
        'Inbound lead from webinar. High intent signals detected. Enterprise budget confirmed. Schedule discovery to qualify needs.',
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
      insight:
        'Evaluating three vendors. Demo requested for inventory management module. Technical requirements documented.',
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
      insight:
        'Follow-up on compliance requirements. Legal team reviewing terms. Positive signals but timeline extending into Q2.',
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
      insight:
        'Infrastructure assessment visit scheduled. Engineering team needs to validate integration requirements before proposal.',
    },
  ]

  const leadCard = (lead: Lead) => (
    <div
      key={lead.id}
      className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all'
    >
      <div className='p-4'>
        {/* Header: name/category + detail icon */}
        <div className='flex items-start gap-3 mb-3'>
          <div className='w-10 h-10 bg-slate-900 text-white flex items-center justify-center flex-shrink-0 rounded-lg shadow-md'>
            <span className='text-sm font-bold'>{lead.id}</span>
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className='text-base font-bold text-slate-900 truncate'>
              {lead.company}
            </h3>
            <p className='text-xs text-blue-600 uppercase tracking-wide font-semibold'>
              {lead.industry}
            </p>
          </div>
          <button
            type='button'
            onClick={() => onOpenLeadDetail(lead)}
            className='p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500 hover:text-slate-900 flex-shrink-0'
            aria-label='Open lead details'
          >
            <ExternalLink className='w-4 h-4' />
          </button>
        </div>

        {/* Compact meta row */}
        <div className='flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 mb-3'>
          <span className='flex items-center gap-1'>
            <Clock className='w-3.5 h-3.5 text-blue-500' />
            {lead.time} · {lead.type}
          </span>
          <span className='flex items-center gap-1'>
            <User className='w-3.5 h-3.5 text-blue-500' />
            {lead.contact}
          </span>
          <span className='flex items-center gap-1'>
            <MapPin className='w-3.5 h-3.5 text-blue-500' />
            {lead.location}
          </span>
        </div>
        <p className='text-xs text-slate-500 mb-2 ml-0.5'>{lead.title}</p>

        {/* Risk & Agent context - compact */}
        <div className='grid grid-cols-1 gap-2 mb-3'>
          <div className='p-2.5 bg-red-50 border border-red-100 rounded-lg'>
            <div className='flex items-center gap-1.5 mb-0.5'>
              <AlertTriangle className='w-3.5 h-3.5 text-red-500' />
              <span className='text-xs font-semibold text-slate-800'>Risk</span>
            </div>
            <p className='text-xs text-slate-700'>
              {lead.risk} · Last contact: {lead.lastContact}
            </p>
          </div>
          <div className='p-2.5 bg-slate-50 border border-slate-200 rounded-lg'>
            <div className='flex items-center gap-1.5 mb-0.5'>
              <TrendingUp className='w-3.5 h-3.5 text-blue-500' />
              <span className='text-xs font-semibold text-slate-700'>
                Agent context
              </span>
            </div>
            <p className='text-xs text-slate-600 line-clamp-2'>
              {lead.insight}
            </p>
          </div>
        </div>

        {/* Actions: Email + Convert */}
        <div className='flex gap-2'>
          <button
            type='button'
            className='flex-1 py-2 px-3 bg-white border border-slate-200 text-slate-900 text-xs font-medium rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center justify-center gap-1.5'
          >
            <Mail className='w-3.5 h-3.5' />
            Email
          </button>
          <button
            type='button'
            onClick={() => setConvertModalLead(lead)}
            className='flex-1 py-2 px-3 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5'
          >
            <span>Convert</span>
            <ChevronRight className='w-3.5 h-3.5' />
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className='bg-slate-900/30 border-b border-slate-700/50'>
        <div className='max-w-[1600px] mx-auto px-8 py-8'>
          <h1 className='text-4xl font-light text-white mb-3'>
            Hi Nirmal, you have{' '}
            <span className='text-blue-400 font-semibold'>12 leads</span>{' '}
            requiring attention this week.
          </h1>
          <p className='text-base text-blue-300 leading-relaxed max-w-4xl'>
            Your calendar shows 4 critical meetings today. ACME CORP needs
            immediate follow-up after 14 days of silence, while TechFlow's CEO
            call at 2 PM could close the deal. I've prioritized your pipeline
            and flagged conversation gaps that need addressing.
          </p>
        </div>
      </div>

      <main className='max-w-[1600px] mx-auto px-8 py-8'>
        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-white mb-4'>
            Immediate Focus: Today
          </h2>
          <div className='grid grid-cols-3 gap-5'>
            {immediateFocusLeads.map(leadCard)}
          </div>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-white mb-4'>
            Pipeline: This Week
          </h2>
          <div className='grid grid-cols-3 gap-5'>
            {pipelineLeads.map(leadCard)}
          </div>
        </div>
      </main>

      <ConvertLeadModal
        lead={convertModalLead}
        onClose={() => setConvertModalLead(null)}
        onCreateOpportunity={onConvertToPipeline}
      />
    </>
  )
}

export default LeadsPage
