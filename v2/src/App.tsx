import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Zap, Terminal,
  Shield, Layers, ArrowRight, 
  CheckCircle, Gauge
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <span className="text-black font-black text-xl tracking-tighter">Y</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">YUKORA</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
        <a href="#platform" onClick={(e) => { e.preventDefault(); document.getElementById('platform')?.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-white transition-colors">Platform</a>
        <a href="#solutions" onClick={(e) => { e.preventDefault(); document.getElementById('solutions')?.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-white transition-colors">Solutions</a>
        <a href="#technology" onClick={(e) => { e.preventDefault(); document.getElementById('technology')?.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-white transition-colors">Technology</a>
        <a href="#enterprise" onClick={(e) => { e.preventDefault(); document.getElementById('enterprise')?.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-white transition-colors">Enterprise</a>
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/torresjchristopher" target="_blank" rel="noreferrer" className="px-5 py-2.5 text-xs font-bold text-white border border-white/10 rounded-lg hover:bg-white/5 transition-all">
          GitHub
        </a>
        <button className="px-5 py-2.5 text-xs font-bold bg-white text-black rounded-lg hover:bg-slate-200 transition-all">
          Get Started
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-48 pb-32 px-6 min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full opacity-50" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
    >
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      Nexus OS v4.0 Enterprise Release
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1]"
    >
      Compute without <br/>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Liability.</span>
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed"
    >
      The first <strong>Sovereign Intelligence Platform</strong>. We replace persistent cloud infrastructure with ephemeral, zero-inertia local execution. Zero data retention. Zero drift.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2">
        Deploy Nexus OS <ArrowRight size={16} />
      </button>
      <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold text-sm transition-all">
        Read the Whitepaper
      </button>
    </motion.div>
  </section>
);

const ArchitectureDiagram = () => (
  <section id="platform" className="max-w-7xl mx-auto px-6 py-32">
    <div className="text-center mb-24">
      <h2 className="text-4xl font-bold text-white mb-6">The Sovereign Trinity</h2>
      <p className="text-slate-400 max-w-2xl mx-auto">
        A unified ecosystem designed to eliminate infrastructure bloat. Three components working in perfect synchronization to deliver secure, ephemeral compute.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Nexus OS */}
      <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 relative group hover:bg-white/[0.04] transition-all">
        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
          <Terminal size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Nexus OS</h3>
        <div className="text-xs font-bold text-blue-500 mb-6 tracking-wider uppercase">The Interface</div>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          The sovereign shell. It manages the "Context Messaging" workflow, allowing you to pack, send, and detonate logic-seeds (`.nxs` artifacts) as easily as sending an email.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <CheckCircle size={14} className="text-blue-500" /> Dataless Shell Environment
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <CheckCircle size={14} className="text-blue-500" /> Artifact Transport Layer
          </div>
        </div>
      </div>

      {/* Forge Engine */}
      <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 relative group hover:bg-white/[0.04] transition-all">
        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
          <Zap size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Forge Engine</h3>
        <div className="text-xs font-bold text-purple-500 mb-6 tracking-wider uppercase">The Execution</div>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          Recursive orchestration. Forge hydrates the logic-seeds from Nexus into volatile RAM-only containers, executes the task, and shreds the environment upon completion.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <CheckCircle size={14} className="text-purple-500" /> Zero-Inertia Runtime
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <CheckCircle size={14} className="text-purple-500" /> O(1) Storage Footprint
          </div>
        </div>
      </div>

      {/* Nemo A.I. */}
      <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 relative group hover:bg-white/[0.04] transition-all">
        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
          <Activity size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Nemo A.I.</h3>
        <div className="text-xs font-bold text-emerald-500 mb-6 tracking-wider uppercase">The Context</div>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          Relational telemetry. Nemo observes the detonation process using self-supervised models to generate understanding without ever storing specific data.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <CheckCircle size={14} className="text-emerald-500" /> Screen-to-Token Telemetry
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <CheckCircle size={14} className="text-emerald-500" /> Local-Only Inference
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BentoGrid = () => (
  <section id="solutions" className="max-w-7xl mx-auto px-6 mb-32">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
      
      {/* Large Feature */}
      <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-blue-900/20 to-slate-900/50 border border-white/10 p-10 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all" />
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Zip-and-Detonate Deployment</h3>
          <p className="text-slate-400 max-w-md">Replace your "installed" software with logic-seeds. Applications propagate into existence only when called and vanish immediately after use.</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-white/5 rounded-lg text-xs font-mono text-blue-300">nexus pack ./app</div>
          <div className="px-4 py-2 bg-white/5 rounded-lg text-xs font-mono text-purple-300">nexus send app.nxs</div>
        </div>
      </div>

      {/* Security Feature */}
      <div className="rounded-3xl bg-[#0a0f1e] border border-white/10 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden hover:border-emerald-500/30 transition-all">
        <div className="mb-6 p-4 bg-emerald-500/10 rounded-2xl text-emerald-400">
          <Shield size={32} />
        </div>
        <h4 className="text-xl font-bold text-white mb-2">GDPR Zero-Touch</h4>
        <p className="text-slate-500 text-sm">Because data is never stored at rest, compliance is automatic.</p>
      </div>

      {/* Speed Feature */}
      <div className="rounded-3xl bg-[#0a0f1e] border border-white/10 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden hover:border-amber-500/30 transition-all">
        <div className="mb-6 p-4 bg-amber-500/10 rounded-2xl text-amber-400">
          <Gauge size={32} />
        </div>
        <h4 className="text-xl font-bold text-white mb-2">10.5x Faster</h4>
        <p className="text-slate-500 text-sm">Benchmarks confirm Forge outpaces Docker/Airflow stacks by an order of magnitude.</p>
      </div>

      {/* Integration Feature */}
      <div className="md:col-span-2 rounded-3xl bg-[#0a0f1e] border border-white/10 p-10 flex items-center justify-between relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4">Legacy Bridge Technology</h3>
          <p className="text-slate-400 max-w-sm mb-6">Don't rewrite. Ingest. Our shims convert standard Docker containers and Airflow DAGs into Sovereign Artifacts instantly.</p>
          <a href="/forge" className="text-blue-400 text-sm font-bold flex items-center gap-2 hover:text-blue-300">
            View Migration Guide <ArrowRight size={14} />
          </a>
        </div>
        <div className="hidden md:block relative z-10">
          <Layers size={120} className="text-slate-800 group-hover:text-slate-700 transition-colors" />
        </div>
      </div>

    </div>
  </section>
);

const InteractiveTerminal = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [running, setRunning] = useState(false);

  const runSim = () => {
    setRunning(true);
    setLogs([]);
    const steps = [
      { t: "> nexus unpack enterprise_etl.nxs --detonate", c: "text-white" },
      { t: "[NEXUS] Authenticating via VaultZero (Hardware ID)...", c: "text-slate-500", d: 500 },
      { t: "[FORGE] Hydrating Logic-Seed into RAM...", c: "text-blue-400", d: 800 },
      { t: "[EXEC] Task 1: Ingest_Stream [SUCCESS]", c: "text-emerald-400", d: 600 },
      { t: "[PRUNE] Task 1 Artifacts Shredded.", c: "text-slate-600", d: 300 },
      { t: "[EXEC] Task 2: Transform_Vector [SUCCESS]", c: "text-emerald-400", d: 700 },
      { t: "[PRUNE] Task 2 Artifacts Shredded.", c: "text-slate-600", d: 300 },
      { t: "[NEMO] Context Token Generated: 0x4A9...", c: "text-purple-400", d: 500 },
      { t: "[EXIT] System Imploded. Zero Drift Verified.", c: "text-slate-400", d: 400 },
    ];

    let delay = 0;
    steps.forEach((s, i) => {
      delay += (s.d || 0);
      setTimeout(() => {
        setLogs(prev => [...prev, s.t]); // Simplification: just pushing text for now
        if (i === steps.length - 1) setRunning(false);
      }, delay);
    });
  };

  return (
    <section id="technology" className="max-w-7xl mx-auto px-6 mb-32">
      <div className="bg-[#0f111a] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row">
        <div className="p-12 md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5">
          <div className="inline-flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-widest mb-6">
            <Activity size={14} /> Live Simulation
          </div>
          <h3 className="text-4xl font-bold text-white mb-6">See It In Action.</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Experience the "Zip-and-Detonate" lifecycle. Watch as Nexus OS receives a secure context artifact, detonates it using Forge, and allows Nemo to observe the result—all without leaving a footprint.
          </p>
          <button 
            onClick={runSim} 
            disabled={running}
            className="self-start px-6 py-3 bg-white text-black font-bold rounded-lg text-sm hover:bg-slate-200 disabled:opacity-50 transition-all"
          >
            {running ? "Processing..." : "Run Detonation"}
          </button>
        </div>
        <div className="p-8 md:w-1/2 bg-black font-mono text-xs overflow-y-auto min-h-[400px]">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
          </div>
          <div className="space-y-2">
            <div className="text-slate-600"># Nexus Sovereign Shell v4.0.2</div>
            <div className="text-slate-600"># Waiting for input...</div>
            {logs.map((l, i) => (
              <div key={i} className="text-slate-300">{l}</div>
            ))}
            {running && <div className="animate-pulse text-blue-500">_</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

const EnterpriseCTA = () => (
  <section id="enterprise" className="py-32 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold text-white mb-8">Ready to reclaim your infrastructure?</h2>
      <p className="text-xl text-slate-400 mb-12">
        Join the organizations moving to Sovereign Intelligence. Reduce liability, increase speed, and own your compute.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="px-10 py-5 bg-white text-black rounded-xl font-bold text-lg hover:bg-slate-200 transition-all">
          Contact Sales
        </button>
        <button className="px-10 py-5 bg-transparent border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
          View Documentation
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-[#020617]">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
      <div className="col-span-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-black font-black text-lg">Y</span>
          </div>
          <span className="text-lg font-bold text-white">YUKORA</span>
        </div>
        <p className="text-slate-500 max-w-sm">
          The Enterprise OS for Sovereign Compute. Replacing cloud dependency with local, ephemeral intelligence.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-white mb-6">Platform</h4>
        <ul className="space-y-4 text-slate-500">
          <li><a href="#" className="hover:text-blue-400">Nexus OS</a></li>
          <li><a href="#" className="hover:text-blue-400">Forge Engine</a></li>
          <li><a href="#" className="hover:text-blue-400">Nemo Intelligence</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-6">Resources</h4>
        <ul className="space-y-4 text-slate-500">
          <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
          <li><a href="#" className="hover:text-blue-400">GitHub</a></li>
          <li><a href="#" className="hover:text-blue-400">Enterprise Support</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex justify-between text-xs text-slate-600">
      <div>© 2026 Yukora Organization</div>
      <div>Privacy Policy • Terms of Service</div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <ArchitectureDiagram />
      <BentoGrid />
      <InteractiveTerminal />
      <EnterpriseCTA />
      <Footer />
    </div>
  );
}
