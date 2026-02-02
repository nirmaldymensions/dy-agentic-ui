import { ArrowLeft, CheckCircle2, XCircle, Sparkles, DollarSign } from 'lucide-react';

interface QuotePrepPageProps {
  onBack: () => void;
  onGenerateQuote: () => void;
}

const QuotePrepPage = ({ onBack, onGenerateQuote }: QuotePrepPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-50">
      <div className="bg-slate-900/30 border-b border-slate-700/50">
        <div className="max-w-[1600px] mx-auto px-8 py-12">
          <h1 className="text-4xl font-light text-white mb-4">
            Hi Nirmal, your <span className="text-blue-400 font-semibold">$156K quote</span> is validated and ready to generate.
          </h1>
          <p className="text-base text-blue-300 leading-relaxed max-w-4xl">
            All systems checked and approved. Delta Manufacturing's opportunity has passed pricing, discount threshold, legal review, and technical validation. I've confirmed no conflicting quotes exist. You can generate with confidence and I'll automatically notify your customer success team.
          </p>
        </div>
      </div>
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-[1600px] mx-auto px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Opportunity</span>
          </button>

          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-xs text-blue-300 uppercase tracking-wider font-semibold">SYSTEM CONFIRMATION</span>
              </div>
              <h1 className="text-3xl font-light text-white">
                Opportunity Ready for Quote
              </h1>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-bold text-white">Delta Manufacturing</h2>
              <p className="text-base text-blue-300">Expansion Deal</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-8 py-10">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-5">
            <div className="bg-white rounded-2xl shadow-lg p-7">
              <div className="mb-6">
                <div className="flex items-center justify-center w-20 h-20 bg-green-50 border-2 border-green-200 rounded-2xl mx-auto mb-5 shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <div className="text-center">
                  <div className="px-4 py-2 bg-slate-900 text-white text-xs font-normal uppercase tracking-wide inline-block mb-3 shadow-md" style={{ borderRadius: '0.35rem' }}>
                    CONFIDENCE SCORE: HIGH
                  </div>
                  <p className="text-sm text-slate-600">
                    All validation gates passed
                  </p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-100 mb-5 rounded-lg">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Ready to generate quote? Record Q-10983 will be created with standard Terms & Conditions attached.
                </p>
              </div>

              <button
                onClick={onGenerateQuote}
                className="w-full py-4 px-4 bg-slate-900 text-white font-normal hover:bg-slate-800 transition-colors mb-3 flex items-center justify-center gap-2 shadow-md"
                style={{ borderRadius: '0.35rem' }}
              >
                <Sparkles className="w-5 h-5" />
                <span>Generate Quote</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button className="py-2.5 px-3 bg-white border border-slate-200 text-xs font-normal hover:border-blue-400 hover:bg-blue-50 transition-all" style={{ borderRadius: '0.35rem' }}>
                  REVIEW
                </button>
                <button className="py-2.5 px-3 bg-white border border-slate-200 text-xs font-normal hover:border-blue-400 hover:bg-blue-50 transition-all" style={{ borderRadius: '0.35rem' }}>
                  NOT NOW
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-5">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <h3 className="text-xs uppercase tracking-wider text-blue-600 font-bold">QUOTE DETAILS</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-500 mb-2 font-medium">TOTAL VALUE</div>
                  <div className="text-2xl font-bold text-slate-900">$156,000</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  <div>
                    <div className="text-xs text-slate-500 mb-1 font-medium">TERM</div>
                    <div className="text-sm font-bold text-slate-900">24 months</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1 font-medium">PAYMENT</div>
                    <div className="text-sm font-bold text-slate-900">Net 30</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-xs text-slate-500 mb-1 font-medium">DELIVERY</div>
                  <div className="text-sm font-bold text-slate-900">45 days</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl shadow-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-blue-300">AGENT NOTES</h3>
              </div>
              <p className="text-sm text-blue-100 leading-relaxed">
                All validation gates passed. Quote generation will trigger automatic notification to customer success team and schedule 7-day follow-up reminder.
              </p>
            </div>
          </div>

          {/* Main Content: Validation Checklist */}
          <div className="col-span-9">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold mb-8 pb-5 border-b border-slate-200 flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-900 flex items-center justify-center rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                Validation Checklist
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-green-50 border border-green-200 rounded-xl hover:shadow-sm transition-all">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold mb-1 text-slate-900">Products Added</h3>
                    <p className="text-sm text-slate-600">3 SKUs from "Enterprise" catalog</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-green-50 border border-green-200 rounded-xl hover:shadow-sm transition-all">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold mb-1 text-slate-900">Pricing Approved</h3>
                    <p className="text-sm text-slate-600">Standard rate card applied</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-green-50 border border-green-200 rounded-xl hover:shadow-sm transition-all">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold mb-1 text-slate-900">Discount within Threshold</h3>
                    <p className="text-sm text-slate-600">5% applied (Manager approval not required)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-sm transition-all">
                  <XCircle className="w-6 h-6 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold mb-1 text-slate-900">No Active Quote Exists</h3>
                    <p className="text-sm text-slate-600">Verified in Siebel DB</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-green-50 border border-green-200 rounded-xl hover:shadow-sm transition-all">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold mb-1 text-slate-900">Legal Terms Reviewed</h3>
                    <p className="text-sm text-slate-600">Standard MSA applies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-green-50 border border-green-200 rounded-xl hover:shadow-sm transition-all">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold mb-1 text-slate-900">Technical Requirements Documented</h3>
                    <p className="text-sm text-slate-600">Solution architecture validated by engineering</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-slate-500 text-sm text-center italic">
                  Explicit validation check complete • User trust transparency active
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuotePrepPage;
