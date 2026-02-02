import { useState, useMemo } from 'react'
import {
  ArrowLeft,
  ShoppingCart,
  Plus,
  Trash2,
  TrendingUp,
  Sparkles,
  Activity,
  FileCheck,
  Layers,
  FileText,
  RotateCw,
  Send,
  Loader2,
  Check,
} from 'lucide-react'

export interface Quote {
  id: number
  title: string
  company: string
  amount: number
  dueDate: string
  status: string
}

interface ServiceItem {
  id: string
  name: string
  category: string
  price: number
}

const AVAILABLE_SERVICES: ServiceItem[] = [
  {
    id: 'svc-1',
    name: 'Supremo MPLS Fiber (1Gbps)',
    category: 'NETWORK',
    price: 12000,
  },
  {
    id: 'svc-2',
    name: 'Enterprise Security Suite',
    category: 'SECURITY',
    price: 8500,
  },
  {
    id: 'svc-3',
    name: 'Cloud Migration Pilot (3m)',
    category: 'CLOUD',
    price: 15000,
  },
  {
    id: 'svc-4',
    name: '24/7 Managed Support Tier 1',
    category: 'SUPPORT',
    price: 2500,
  },
  {
    id: 'svc-5',
    name: 'API Integration Bridge',
    category: 'INTEGRATION',
    price: 4500,
  },
  {
    id: 'svc-6',
    name: 'Business VoIP (50 Seats)',
    category: 'VOICE',
    price: 1200,
  },
  {
    id: 'svc-7',
    name: 'Infrastructure Resilience Pack',
    category: 'INFRASTRUCTURE',
    price: 9000,
  },
  {
    id: 'svc-8',
    name: 'AI Predictive Analytics Module',
    category: 'ANALYTICS',
    price: 18000,
  },
]

type ViewMode = 'builder' | 'review'
type SendState = 'idle' | 'sending' | 'sent'
type Tone = 'professional' | 'persuasive' | 'concise' | 'friendly'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']

function getProposalRef(quote: Quote): string {
  const d = new Date()
  const y = d.getFullYear()
  const sh = quote.company.replace(/\s+/g, '').slice(0, 2).toUpperCase()
  return `#${quote.id}-${sh}-${y}`
}

function getProposalDate(): string {
  const d = new Date()
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

interface QuoteDetailPageProps {
  quote: Quote | null
  onBack: () => void
}

const QuoteDetailPage = ({ quote, onBack }: QuoteDetailPageProps) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [showCatalog, setShowCatalog] = useState(false)
  const [view, setView] = useState<ViewMode>('builder')
  const [sendState, setSendState] = useState<SendState>('idle')
  const [tone, setTone] = useState<Tone>('professional')

  const selectedItems = useMemo(
    () => AVAILABLE_SERVICES.filter(s => selectedIds.has(s.id)),
    [selectedIds]
  )
  const totalValue = useMemo(
    () => selectedItems.reduce((sum, s) => sum + s.price, 0),
    [selectedItems]
  )

  const addProduct = (id: string) => {
    setSelectedIds(prev => new Set(prev).add(id))
  }
  const removeProduct = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }

  const handleGenerateReview = () => {
    setView('review')
  }

  const handleSendToCustomer = () => {
    if (sendState !== 'idle') return
    setSendState('sending')
    setTimeout(() => {
      setSendState('sent')
      setTimeout(() => setSendState('idle'), 2000)
    }, 1200)
  }

  if (!quote) {
    return (
      <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-50 flex items-center justify-center'>
        <p className='text-slate-400'>
          No quote selected.{' '}
          <button
            type='button'
            onClick={onBack}
            className='text-blue-400 hover:underline'
          >
            Back to list
          </button>
        </p>
      </div>
    )
  }

  const proposalContent = (
    <div className='prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 text-sm'>
      <h1 className='text-xl font-bold text-slate-900 border-b border-slate-200 pb-2'>
        Proposal: {quote.title}
      </h1>
      <p className='text-slate-600 mt-2'>
        <strong>Prepared For:</strong> {quote.company}
      </p>
      <p className='text-slate-600'>
        <strong>Project:</strong> {quote.title} &amp; Infrastructure
      </p>
      <p className='text-slate-600'>
        <strong>Date:</strong> {getProposalDate()}
      </p>
      <p className='text-slate-600 mb-4'>
        <strong>Reference:</strong> {getProposalRef(quote)}
      </p>
      <hr className='border-slate-200 my-6' />

      <h2 className='text-base font-bold text-slate-900 mt-6'>
        1. Executive Summary
      </h2>
      <p>
        {quote.company} is at a critical growth juncture. To scale effectively,
        the friction between legacy systems and your target environment must be
        reduced. This proposal outlines a strategic plan built around the
        selected solutions below. By implementing the chosen services—including
        integration, security, and infrastructure where selected—{quote.company}{' '}
        can move toward a unified operational view.
      </p>

      <h2 className='text-base font-bold text-slate-900 mt-6'>
        2. Project Scope
      </h2>
      <p>The core objective is to deliver {quote.title} with clear outcomes:</p>
      <ul className='list-disc pl-5 space-y-1 mt-2'>
        <li>Align systems and data for better visibility and reporting.</li>
        <li>
          Reduce manual work and errors through automation where applicable.
        </li>
        <li>
          Strengthen security and compliance posture with the selected
          offerings.
        </li>
      </ul>

      {selectedItems.length > 0 && (
        <>
          <h2 className='text-base font-bold text-slate-900 mt-6'>
            3. Included Solutions &amp; Services
          </h2>
          <p className='mb-4'>
            The following components are included in this proposal:
          </p>
          {selectedItems.map((svc, idx) => (
            <div key={svc.id} className='mb-4'>
              <h3 className='text-sm font-semibold text-slate-900'>
                {ROMAN[idx]}. {svc.name}
              </h3>
              <p className='text-slate-700 mt-1'>
                {svc.category} solution. Investment: $
                {svc.price.toLocaleString()}
              </p>
            </div>
          ))}

          <h2 className='text-base font-bold text-slate-900 mt-6'>
            4. Investment Summary
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border border-slate-200 rounded-lg overflow-hidden'>
              <thead>
                <tr className='bg-slate-50'>
                  <th className='text-left py-2 px-3 font-semibold text-slate-900 border-b border-slate-200'>
                    Item
                  </th>
                  <th className='text-left py-2 px-3 font-semibold text-slate-900 border-b border-slate-200'>
                    Description
                  </th>
                  <th className='text-right py-2 px-3 font-semibold text-slate-900 border-b border-slate-200'>
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map(svc => (
                  <tr key={svc.id} className='border-b border-slate-100'>
                    <td className='py-2 px-3 text-slate-900 font-medium'>
                      {svc.name}
                    </td>
                    <td className='py-2 px-3 text-slate-600'>{svc.category}</td>
                    <td className='py-2 px-3 text-right font-semibold text-slate-900'>
                      ${svc.price.toLocaleString()}
                    </td>
                  </tr>
                ))}
                <tr className='bg-slate-50 font-semibold'>
                  <td colSpan={2} className='py-2 px-3 text-slate-900'>
                    Total investment
                  </td>
                  <td className='py-2 px-3 text-right text-slate-900'>
                    ${totalValue.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      <h2 className='text-base font-bold text-slate-900 mt-6'>
        5. Implementation Timeline
      </h2>
      <ol className='list-decimal pl-5 space-y-2 text-slate-700'>
        <li>
          <strong>Discovery &amp; mapping:</strong> Audit and requirements
          alignment.
        </li>
        <li>
          <strong>Infrastructure &amp; setup:</strong> Deployment of selected
          services.
        </li>
        <li>
          <strong>Integration &amp; migration:</strong> Execution and
          configuration.
        </li>
        <li>
          <strong>Testing &amp; UAT:</strong> Validation and sign-off.
        </li>
        <li>
          <strong>Go-live:</strong> Deployment and handover.
        </li>
      </ol>

      <h2 className='text-base font-bold text-slate-900 mt-6'>
        6. Why Partner With Us
      </h2>
      <p>
        We focus on connecting legacy and modern systems so you can grow without
        sacrificing existing data or processes. Our approach to security and
        delivery is designed to keep your rollout stable and compliant.
      </p>

      <h2 className='text-base font-bold text-slate-900 mt-6'>7. Approval</h2>
      <p className='mb-4'>
        To proceed under the terms and pricing above, please sign or return a
        digital confirmation.
      </p>
      <div className='grid grid-cols-2 gap-6 text-slate-700'>
        <div>
          <p className='font-semibold text-slate-900'>{quote.company}</p>
          <p className='mt-2 text-xs'>Name: __________________________</p>
          <p className='text-xs'>Title: ___________________________</p>
          <p className='text-xs'>Date: ___________________________</p>
        </div>
        <div>
          <p className='font-semibold text-slate-900'>[Your Company]</p>
          <p className='mt-2 text-xs'>Name: __________________________</p>
          <p className='text-xs'>Title: ___________________________</p>
          <p className='text-xs'>Date: ___________________________</p>
        </div>
      </div>
    </div>
  )

  if (view === 'review') {
    return (
      <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-50'>
        <div className='bg-slate-900/30 border-b border-slate-700/50'>
          <div className='max-w-[1600px] mx-auto px-8 py-6'>
            <button
              type='button'
              onClick={onBack}
              className='flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-4'
            >
              <ArrowLeft className='w-4 h-4' />
              <span className='text-sm font-medium'>Back to List</span>
            </button>
            <h1 className='text-4xl font-light text-white mb-2'>
              Proposal for review
            </h1>
            <p className='text-base text-blue-300'>
              Review the draft below. Use Edit products to change line items, or
              Send to Customer when ready.
            </p>
          </div>
        </div>

        <header className='bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50'>
          <div className='max-w-[1600px] mx-auto px-8 py-5'>
            <div className='flex items-center justify-between'>
              <div>
                <h2 className='text-2xl font-light text-white'>
                  {quote.title}
                </h2>
                <p className='text-sm text-blue-300 mt-0.5'>
                  Proposal for {quote.company}
                </p>
              </div>
              <div className='text-right'>
                <p className='text-xs text-slate-400 uppercase tracking-wider font-medium mb-0.5'>
                  Total quote value
                </p>
                <p className='text-3xl font-light text-white'>
                  ${totalValue.toLocaleString()}
                </p>
                <button
                  type='button'
                  onClick={() => setView('builder')}
                  className='text-xs text-blue-400 hover:text-white mt-1 block'
                >
                  Edit products
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className='max-w-[1600px] mx-auto px-8 py-10'>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-8 space-y-6 animate-proposal-review-in'>
              <div className='bg-white rounded-2xl shadow-lg p-7'>
                <h3 className='text-xs uppercase tracking-wider text-blue-600 font-semibold flex items-center gap-2 mb-4'>
                  <FileText className='w-4 h-4' />
                  AI proposal draft
                </h3>
                <div className='max-h-[420px] overflow-y-auto pr-2 border border-slate-200 rounded-xl bg-slate-50/30 p-5'>
                  {proposalContent}
                </div>

                <div className='mt-5'>
                  <p className='text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2'>
                    Tone
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {(
                      [
                        'professional',
                        'persuasive',
                        'concise',
                        'friendly',
                      ] as Tone[]
                    ).map(t => (
                      <button
                        key={t}
                        type='button'
                        onClick={() => setTone(t)}
                        className={`py-2 px-4 text-xs font-medium rounded-lg capitalize transition-colors ${
                          tone === t
                            ? 'bg-slate-900 text-white'
                            : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-300'
                        }`}
                        style={{ borderRadius: '0.35rem' }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className='mt-6 flex items-center justify-end gap-3'>
                  <button
                    type='button'
                    className='p-2.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors'
                    style={{ borderRadius: '0.35rem' }}
                    aria-label='Regenerate draft'
                  >
                    <RotateCw className='w-5 h-5' />
                  </button>
                  <button
                    type='button'
                    onClick={handleSendToCustomer}
                    disabled={sendState === 'sending'}
                    className='py-3 px-5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-80 disabled:cursor-not-allowed transition-all flex items-center gap-2 min-w-[180px] justify-center'
                    style={{ borderRadius: '0.35rem' }}
                  >
                    {sendState === 'sending' && (
                      <Loader2 className='w-4 h-4 animate-spin' />
                    )}
                    {sendState === 'sent' && <Check className='w-4 h-4' />}
                    {sendState === 'idle' && <Send className='w-4 h-4' />}
                    <span>
                      {sendState === 'sending' && 'Sending...'}
                      {sendState === 'sent' && 'Sent to Customer'}
                      {sendState === 'idle' && 'Send to Customer'}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div
              className='col-span-4 space-y-6 animate-proposal-review-in'
              style={{ animationDelay: '0.08s' }}
            >
              <div className='bg-white rounded-2xl shadow-lg p-6'>
                <h3 className='text-xs uppercase tracking-wider text-blue-600 mb-5 flex items-center gap-2 font-semibold'>
                  <TrendingUp className='w-4 h-4' />
                  Agent insight
                </h3>
                <div className='p-4 bg-blue-50 border border-blue-100 rounded-lg mb-4'>
                  <p className='text-sm text-slate-700 leading-relaxed'>
                    This draft is tailored to the line items you selected. A
                    clear scope and investment summary usually improves
                    acceptance with this segment.
                  </p>
                </div>
                <div className='p-4 bg-slate-50 border border-slate-200 rounded-lg'>
                  <p className='text-xs uppercase tracking-wide text-slate-500 font-medium mb-1'>
                    Suggestion
                  </p>
                  <p className='text-sm text-slate-700'>
                    You can adjust the tone above or edit products to regenerate
                    the draft.
                  </p>
                </div>
              </div>
              <div className='bg-white rounded-2xl shadow-lg p-6'>
                <h3 className='text-xs uppercase tracking-wider text-blue-600 mb-5 flex items-center gap-2 font-semibold'>
                  <Activity className='w-4 h-4' />
                  Account context
                </h3>
                <div className='space-y-4'>
                  <div>
                    <p className='text-xs uppercase tracking-wide text-slate-500 font-medium mb-1'>
                      Engagement
                    </p>
                    <p className='text-sm font-semibold text-slate-900'>
                      Strong · 8.4/10
                    </p>
                  </div>
                  <div>
                    <p className='text-xs uppercase tracking-wide text-slate-500 font-medium mb-1'>
                      Segment trend
                    </p>
                    <p className='text-sm font-semibold text-green-600'>
                      +12% YoY
                    </p>
                  </div>
                  <div className='pt-3 border-t border-slate-200'>
                    <div className='flex justify-between text-xs mb-1'>
                      <span className='text-slate-500 font-medium'>
                        Close likelihood
                      </span>
                      <span className='font-semibold text-slate-900'>85%</span>
                    </div>
                    <div className='w-full h-2 bg-slate-200 rounded-full overflow-hidden'>
                      <div
                        className='h-full bg-blue-500 rounded-full'
                        style={{ width: '85%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-white rounded-2xl shadow-lg p-6'>
                <h3 className='text-xs uppercase tracking-wider text-blue-600 mb-4 flex items-center gap-2 font-semibold'>
                  <FileCheck className='w-4 h-4' />
                  Terms &amp; compliance
                </h3>
                <p className='text-sm text-slate-700 leading-relaxed'>
                  Standard terms apply. Regional and security requirements (e.g.
                  SOC2, GDPR) are reflected in the proposal.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-50'>
      {/* Hero: same pattern as QuotePrep / LeadDetail */}
      <div className='bg-slate-900/30 border-b border-slate-700/50'>
        <div className='max-w-[1600px] mx-auto px-8 py-6'>
          <button
            type='button'
            onClick={onBack}
            className='flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-5'
          >
            <ArrowLeft className='w-4 h-4' />
            <span className='text-sm font-medium'>Back to List</span>
          </button>
          <h1 className='text-4xl font-light text-white mb-4'>
            Build your{' '}
            <span className='text-blue-400 font-semibold'>{quote.title}</span>{' '}
            proposal for {quote.company}.
          </h1>
          <p className='text-base text-blue-300 leading-relaxed max-w-4xl'>
            Add line items from the catalog below. The total updates as you go.
            Agent insights in the sidebar are based on this account and similar
            deals.
          </p>
        </div>
      </div>

      {/* Header strip: proposal title + total */}
      <header className='bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50'>
        <div className='max-w-[1600px] mx-auto px-8 py-5'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-xs text-blue-300 uppercase tracking-wider font-semibold mb-1'>
                Quote Builder
              </p>
              <h2 className='text-2xl font-light text-white'>{quote.title}</h2>
              <p className='text-sm text-blue-300 mt-0.5'>
                Proposal for {quote.company}
              </p>
            </div>
            <div className='text-right'>
              <p className='text-xs text-slate-400 uppercase tracking-wider font-medium mb-0.5'>
                Total quote value
              </p>
              <p className='text-3xl font-light text-white'>
                ${totalValue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className='max-w-[1600px] mx-auto px-8 py-10'>
        <div className='grid grid-cols-12 gap-6'>
          {/* Main: line items card */}
          <div className='col-span-8 space-y-6'>
            <div className='bg-white rounded-2xl shadow-lg p-7'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-xs uppercase tracking-wider text-blue-600 font-semibold flex items-center gap-2'>
                  <ShoppingCart className='w-4 h-4' />
                  Line items
                </h3>
                <button
                  type='button'
                  onClick={() => setShowCatalog(prev => !prev)}
                  className='py-2.5 px-4 bg-slate-900 text-white text-sm font-normal hover:bg-slate-800 transition-colors flex items-center gap-2'
                  style={{ borderRadius: '0.35rem' }}
                >
                  <Plus className='w-4 h-4' />
                  Add Product
                </button>
              </div>

              {showCatalog && (
                <div className='mb-6 p-5 bg-slate-50 border border-slate-200 rounded-xl'>
                  <p className='text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4'>
                    Catalog
                  </p>
                  <div className='space-y-2 max-h-56 overflow-y-auto'>
                    {AVAILABLE_SERVICES.map(svc => (
                      <div
                        key={svc.id}
                        className='flex items-center justify-between py-2.5 px-4 bg-white border border-slate-200 rounded-lg hover:border-blue-200 transition-colors'
                        style={{ borderRadius: '0.35rem' }}
                      >
                        <div>
                          <p className='text-sm font-medium text-slate-900'>
                            {svc.name}
                          </p>
                          <p className='text-xs text-slate-500'>
                            {svc.category}
                          </p>
                        </div>
                        <div className='flex items-center gap-3'>
                          <span className='text-sm font-semibold text-slate-900'>
                            ${svc.price.toLocaleString()}
                          </span>
                          <button
                            type='button'
                            onClick={() => addProduct(svc.id)}
                            className='p-2 bg-slate-900 text-white hover:bg-slate-800 transition-colors'
                            style={{ borderRadius: '0.35rem' }}
                            aria-label={`Add ${svc.name}`}
                          >
                            <Plus className='w-4 h-4' />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedItems.length === 0 && !showCatalog && (
                <div className='py-14 flex flex-col items-center justify-center text-slate-500 border border-slate-200 rounded-xl bg-slate-50/50'>
                  <ShoppingCart className='w-12 h-12 text-slate-300 mb-3' />
                  <p className='text-sm font-medium text-slate-600'>
                    No line items yet
                  </p>
                  <p className='text-xs mt-1 text-slate-500'>
                    Use Add Product to pull from the catalog.
                  </p>
                </div>
              )}

              {selectedItems.length > 0 && (
                <ul className='space-y-3'>
                  {selectedItems.map(svc => (
                    <li
                      key={svc.id}
                      className='flex items-center gap-4 py-3 px-4 bg-slate-50 border border-slate-200 rounded-xl'
                      style={{ borderRadius: '0.35rem' }}
                    >
                      <div className='w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <Layers className='w-5 h-5 text-slate-600' />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <p className='text-sm font-semibold text-slate-900'>
                          {svc.name}
                        </p>
                        <p className='text-xs text-slate-500'>{svc.category}</p>
                      </div>
                      <span className='text-sm font-semibold text-slate-900'>
                        ${svc.price.toLocaleString()}
                      </span>
                      <button
                        type='button'
                        onClick={() => removeProduct(svc.id)}
                        className='p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors'
                        style={{ borderRadius: '0.35rem' }}
                        aria-label={`Remove ${svc.name}`}
                      >
                        <Trash2 className='w-4 h-4' />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <div className='mt-6 pt-6 border-t border-slate-200'>
                <button
                  type='button'
                  onClick={handleGenerateReview}
                  className='w-full py-4 px-4 bg-slate-900 text-white font-normal hover:bg-slate-800 transition-colors flex items-center justify-center gap-2'
                  style={{ borderRadius: '0.35rem' }}
                >
                  <Sparkles className='w-5 h-5' />
                  Generate proposal for review
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar: agent insights – same card pattern as LeadDetail / Customer360 */}
          <div className='col-span-4 space-y-6'>
            <div className='bg-white rounded-2xl shadow-lg p-6'>
              <h3 className='text-xs uppercase tracking-wider text-blue-600 mb-5 flex items-center gap-2 font-semibold'>
                <TrendingUp className='w-4 h-4' />
                Agent insight
              </h3>
              <div className='p-4 bg-blue-50 border border-blue-100 rounded-lg mb-4'>
                <p className='text-sm text-slate-700 leading-relaxed'>
                  Structured proposals with clear line items tend to perform
                  better with this segment. I’ve aligned the catalog to what
                  similar accounts usually adopt.
                </p>
              </div>
              <div className='p-4 bg-slate-50 border border-slate-200 rounded-lg'>
                <p className='text-xs uppercase tracking-wide text-slate-500 font-medium mb-1'>
                  Suggestion
                </p>
                <p className='text-sm text-slate-700'>
                  Adding an analytics or support tier often improves win rate
                  for deals like this. You can include one from the catalog
                  above.
                </p>
              </div>
            </div>

            <div className='bg-white rounded-2xl shadow-lg p-6'>
              <h3 className='text-xs uppercase tracking-wider text-blue-600 mb-5 flex items-center gap-2 font-semibold'>
                <Activity className='w-4 h-4' />
                Account context
              </h3>
              <div className='space-y-4'>
                <div>
                  <p className='text-xs uppercase tracking-wide text-slate-500 font-medium mb-1'>
                    Engagement
                  </p>
                  <p className='text-sm font-semibold text-slate-900'>
                    Strong · 8.4/10
                  </p>
                </div>
                <div>
                  <p className='text-xs uppercase tracking-wide text-slate-500 font-medium mb-1'>
                    Segment trend
                  </p>
                  <p className='text-sm font-semibold text-green-600'>
                    +12% YoY
                  </p>
                </div>
                <div className='pt-3 border-t border-slate-200'>
                  <div className='flex justify-between text-xs mb-1'>
                    <span className='text-slate-500 font-medium'>
                      Close likelihood
                    </span>
                    <span className='font-semibold text-slate-900'>85%</span>
                  </div>
                  <div className='w-full h-2 bg-slate-200 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-blue-500 rounded-full'
                      style={{ width: '85%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-2xl shadow-lg p-6'>
              <h3 className='text-xs uppercase tracking-wider text-blue-600 mb-4 flex items-center gap-2 font-semibold'>
                <FileCheck className='w-4 h-4' />
                Terms & compliance
              </h3>
              <p className='text-sm text-slate-700 leading-relaxed'>
                Standard terms apply. Current regional and security requirements
                (e.g. SOC2, GDPR) are reflected in the proposal template.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default QuoteDetailPage
