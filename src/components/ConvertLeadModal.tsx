import { useState, useEffect } from 'react'
import { X, Sparkles, ChevronRight, Target } from 'lucide-react'

export interface Lead {
  id: number
  company: string
  industry: string
  time: string
  type: string
  contact: string
  title: string
  location: string
  lastContact: string
  risk: string
  insight: string
}

interface ConvertLeadModalProps {
  lead: Lead | null
  onClose: () => void
  onCreateOpportunity: () => void
}

const LOADING_DURATION_MS = 2600

function getSuggestedName(lead: Lead): string {
  const company = lead.company.replace(/\s+(CORP|INC|SYSTEMS)$/i, '')
  if (lead.company.toUpperCase().includes('TECHFLOW'))
    return `${company} Cloud Infrastructure Modernization`
  if (lead.company.toUpperCase().includes('ACME'))
    return `${company} IT Services Engagement`
  if (lead.industry === 'HEALTHCARE')
    return `${company} Digital Health Platform`
  if (lead.industry === 'FINANCE')
    return `${company} Compliance & Security Initiative`
  return `${company} ${lead.industry} Initiative`
}

function getEstPotential(lead: Lead): string {
  if (
    lead.company.toUpperCase().includes('ACME') ||
    lead.company.toUpperCase().includes('TECHFLOW')
  )
    return '75,000'
  if (
    lead.company.toUpperCase().includes('GLOBAL') ||
    lead.industry === 'FINANCE'
  )
    return '55,000'
  return '25,000'
}

function getStrategicPath(lead: Lead): string {
  const industry = lead.industry.toLowerCase()
  if (lead.insight) {
    return `Leverage the prospect's high interest by aligning the proposal with their stated priorities. ${lead.insight.slice(
      0,
      80
    )}${lead.insight.length > 80 ? '…' : ''}`
  }
  return `Leverage the prospect's engagement in ${industry} by providing a clear value narrative during the next review. Focus on outcomes that match their decision timeline and stakeholder concerns.`
}

function getExtractedRequirements(lead: Lead): string[] {
  const base = [
    'Technical feasibility assessment',
    'Integration with existing systems',
    'Security and compliance alignment',
  ]
  if (lead.industry === 'HEALTHCARE')
    return ['Compliance review (HIPAA)', ...base]
  if (lead.industry === 'FINANCE') return ['Regulatory alignment', ...base]
  if (
    lead.company.toUpperCase().includes('TECHFLOW') ||
    lead.company.toUpperCase().includes('CLOUD')
  ) {
    return [
      'Cloud migration architecture planning',
      'Advanced infrastructure security',
      ...base,
    ]
  }
  return ['Discovery and scoping', ...base]
}

const ConvertLeadModal = ({
  lead,
  onClose,
  onCreateOpportunity,
}: ConvertLeadModalProps) => {
  const [phase, setPhase] = useState<'loading' | 'content'>('loading')

  useEffect(() => {
    if (!lead) return
    setPhase('loading')
    const t = setTimeout(() => setPhase('content'), LOADING_DURATION_MS)
    return () => clearTimeout(t)
  }, [lead?.id])

  if (!lead) return null

  const handleCreate = () => {
    onClose()
    onCreateOpportunity()
  }

  const suggestedName = getSuggestedName(lead)
  const estPotential = getEstPotential(lead)
  const strategicPath = getStrategicPath(lead)
  const requirements = getExtractedRequirements(lead)
  const subtitle = `EVALUATING ${lead.company.replace(/\s+/g, ' ')}`

  return (
    <>
      <div
        className='fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 transition-opacity duration-300'
        onClick={onClose}
        aria-hidden
      />
      <div
        className='fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none'
        aria-modal
        role='dialog'
        aria-labelledby='convert-modal-title'
      >
        <div
          className='w-full max-w-lg bg-white rounded-2xl shadow-2xl pointer-events-auto overflow-hidden transition-all duration-300'
          onClick={e => e.stopPropagation()}
        >
          {/* Header: Agentic Conversion + subtitle */}
          <div className='sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10'>
            <div>
              <div className='flex items-center gap-2'>
                <div className='w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center'>
                  <Sparkles className='w-4 h-4 text-white' />
                </div>
                <h2
                  id='convert-modal-title'
                  className='text-lg font-bold text-slate-900'
                >
                  Agentic Conversion
                </h2>
              </div>
              <p className='text-xs text-slate-500 uppercase tracking-wider font-medium mt-1'>
                {subtitle}
              </p>
            </div>
            <button
              type='button'
              onClick={onClose}
              className='p-2 hover:bg-slate-100 rounded-lg transition-colors'
              aria-label='Close'
            >
              <X className='w-5 h-5 text-slate-500' />
            </button>
          </div>

          <div className='px-6 py-5 min-h-[320px] relative'>
            {phase === 'loading' && (
              <div className='flex flex-col items-center justify-center py-12 animate-modal-step'>
                {/* Rotating C-shape with sparkle */}
                <div className='relative w-20 h-20 mb-6 animate-convert-loading-spin'>
                  <svg
                    className='w-full h-full'
                    viewBox='0 0 80 80'
                    fill='none'
                    aria-hidden
                  >
                    <circle
                      cx='40'
                      cy='40'
                      r='36'
                      stroke='currentColor'
                      strokeWidth='4'
                      strokeLinecap='round'
                      className='text-blue-500'
                      strokeDasharray='170 40'
                      strokeDashoffset='0'
                    />
                  </svg>
                  <div className='absolute inset-0 flex items-start justify-center pt-0.5'>
                    <div className='w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center shadow-sm'>
                      <Sparkles className='w-3 h-3 text-amber-900' />
                    </div>
                  </div>
                </div>
                <p className='text-base font-semibold text-slate-900 mb-1'>
                  Analyzing Lead Signals…
                </p>
                <p className='text-sm text-slate-500 text-center max-w-[280px]'>
                  Agent is cross-referencing industry benchmarks and your
                  meeting notes.
                </p>
              </div>
            )}

            {phase === 'content' && (
              <div className='space-y-4 animate-convert-content-in'>
                {/* Suggested Name & Est. Potential side by side */}
                <div className='grid grid-cols-2 gap-3'>
                  <div className='p-4 bg-slate-50 border border-slate-200 rounded-xl'>
                    <p className='text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1.5'>
                      Suggested Name
                    </p>
                    <p className='text-sm font-semibold text-slate-900 leading-snug'>
                      {suggestedName}
                    </p>
                  </div>
                  <div className='p-4 bg-slate-50 border border-slate-200 rounded-xl'>
                    <p className='text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1.5'>
                      Est. Potential
                    </p>
                    <p className='text-sm font-semibold text-slate-900'>
                      ${estPotential}
                    </p>
                  </div>
                </div>

                {/* Strategic Path */}
                <div className='p-4 bg-blue-50/70 border border-blue-100 rounded-xl'>
                  <div className='flex items-center gap-2 mb-2'>
                    <Target className='w-4 h-4 text-blue-600' />
                    <p className='text-xs uppercase tracking-wider text-blue-700 font-semibold'>
                      Strategic Path
                    </p>
                  </div>
                  <p className='text-sm text-slate-700 leading-relaxed'>
                    &ldquo;{strategicPath}&rdquo;
                  </p>
                </div>

                {/* Extracted Requirements */}
                <div>
                  <p className='text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2'>
                    Extracted Requirements
                  </p>
                  <ul className='flex flex-wrap gap-2'>
                    {requirements.map((req, i) => (
                      <li
                        key={i}
                        className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700'
                      >
                        <span className='w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0' />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Footer: only show when content is visible */}
          {phase === 'content' && (
            <div className='sticky bottom-0 bg-white border-t border-slate-200 px-6 py-4 flex items-center justify-between gap-4 animate-convert-content-in'>
              <button
                type='button'
                onClick={onClose}
                className='py-2.5 px-4 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors'
              >
                Cancel
              </button>
              <button
                type='button'
                onClick={handleCreate}
                className='py-2.5 px-5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2'
              >
                <span>Create Opportunity</span>
                <ChevronRight className='w-4 h-4' />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ConvertLeadModal
