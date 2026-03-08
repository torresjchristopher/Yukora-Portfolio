import { useState, type FormEvent } from 'react';

const requestRecipient = 'inquiries@yukora.org';
const requestEndpoint = `https://formsubmit.co/ajax/${encodeURIComponent(requestRecipient)}`;

const portfolioLinks = [
  {
    label: 'dreastaruniverse.com',
    href: 'https://dreastaruniverse.com',
  },
];

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

type RequestFormState = {
  email: string;
  request: string;
};

type SubmissionResponse = {
  success?: string;
  error?: string;
};

const initialFormState: RequestFormState = {
  email: '',
  request: '',
};

const defaultMessage =
  'Enter your email and the website you want Yukora to build, then send the request.';

const feedbackStyles: Record<SubmissionStatus, string> = {
  idle: 'border-white/10 bg-white/[0.03] text-slate-400',
  submitting: 'border-blue-400/40 bg-blue-500/10 text-blue-100',
  success: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-100',
  error: 'border-rose-400/40 bg-rose-500/10 text-rose-100',
};

export default function App() {
  const [formState, setFormState] = useState<RequestFormState>(initialFormState);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState(defaultMessage);

  const resetFeedback = () => {
    if (submissionStatus === 'idle') {
      return;
    }

    setSubmissionStatus('idle');
    setFeedbackMessage(defaultMessage);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = formState.email.trim();
    const request = formState.request.trim();

    if (!email || !request) {
      setSubmissionStatus('error');
      setFeedbackMessage('Please enter both your email and the website request before sending.');
      return;
    }

    setSubmissionStatus('submitting');
    setFeedbackMessage('Sending your request to Yukora...');

    try {
      const response = await fetch(requestEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          request,
          _subject: `Yukora request from ${email}`,
          _replyto: email,
          source: 'yukora.org landing page',
          submitted_at: new Date().toISOString(),
        }),
      });

      const data = (await response.json()) as SubmissionResponse;

      if (!response.ok || data.error) {
        throw new Error(data.error ?? 'Your request could not be delivered. Please try again.');
      }

      setFormState(initialFormState);
      setSubmissionStatus('success');
      setFeedbackMessage(`Request sent. Yukora can now reply to ${email}.`);
    } catch (error) {
      setSubmissionStatus('error');
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : 'A network error prevented the request from being delivered.',
      );
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_32%),radial-gradient(circle_at_80%_18%,_rgba(168,85,247,0.14),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#02030a_100%)]" />
        <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-16 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between pb-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
            Yukora
          </div>
          <p className="hidden text-[11px] uppercase tracking-[0.35em] text-slate-500 md:block">
            Direct requests only
          </p>
        </header>

        <main className="flex flex-1 items-center">
          <section className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="mb-5 text-xs uppercase tracking-[0.45em] text-slate-500">
                Request a website
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                A quiet front door for new builds.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Send your email and describe the website you want. Yukora will review the request
                and follow up directly.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Access</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Existing Yukora destinations remain live, but this landing page no longer
                    routes visitors into them.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Delivery</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Requests are delivered by email so replies can happen from the address you
                    submit here.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_28px_90px_rgba(2,6,23,0.75)] backdrop-blur-2xl sm:p-8">
              <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Intake</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Website request form</h2>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-lg text-cyan-100 shadow-[0_0_32px_rgba(34,211,238,0.18)]">
                  Y
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="request-email" className="text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    id="request-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formState.email}
                    onChange={(event) => {
                      resetFeedback();
                      setFormState((current) => ({ ...current, email: event.target.value }));
                    }}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-base text-white outline-none transition focus:border-cyan-300/60 focus:bg-white/[0.06]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="request-details" className="text-sm font-medium text-slate-200">
                    Website request
                  </label>
                  <textarea
                    id="request-details"
                    name="request"
                    required
                    minLength={10}
                    rows={6}
                    value={formState.request}
                    onChange={(event) => {
                      resetFeedback();
                      setFormState((current) => ({ ...current, request: event.target.value }));
                    }}
                    placeholder="Tell Yukora what you want built, the feel you want, and what the site needs to do."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-base text-white outline-none transition focus:border-cyan-300/60 focus:bg-white/[0.06]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submissionStatus === 'submitting'}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-950 transition hover:scale-[1.01] hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submissionStatus === 'submitting' ? 'Sending request' : 'Send request'}
                </button>

                <div
                  aria-live="polite"
                  className={`rounded-2xl border px-4 py-4 text-sm leading-6 ${feedbackStyles[submissionStatus]}`}
                >
                  {feedbackMessage}
                </div>

                <p className="text-xs leading-6 text-slate-500">
                  By submitting, you are asking Yukora to respond to your request using the email
                  address above.
                </p>
              </form>
            </div>
          </section>
        </main>

        <footer className="mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-center gap-5">
              <div className="brand-mark flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_40px_rgba(56,189,248,0.16)]">
                <span className="brand-glyph text-4xl font-semibold text-white">Y</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Portfolio</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
                  Public destinations live here. More websites can be added to this list as the
                  portfolio grows.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[420px]">
              {portfolioLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-cyan-300/40 hover:bg-white/[0.05]"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Website</p>
                  <p className="mt-2 text-sm font-medium text-white transition group-hover:text-cyan-100">
                    {link.label}
                  </p>
                </a>
              ))}
              <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-5 py-4">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Next</p>
                <p className="mt-2 text-sm text-slate-400">More destinations soon.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Yukora</p>
            <p>Legacy paths remain direct-access only.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
