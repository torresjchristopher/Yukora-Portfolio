import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Layers,
  MessageSquare
} from 'lucide-react';

// --- Cinematic Background ---
const NeuralBackground = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
    <div className="grain-overlay" />
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, -30, 0]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="glow-orb top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20"
    />
    <motion.div 
      animate={{ 
        scale: [1.2, 1, 1.2],
        x: [0, -40, 0],
        y: [0, 60, 0]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="glow-orb bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/20"
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#020617]/40 backdrop-blur-xl border-b border-white/[0.03]">
    <div className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center text-xs font-bold uppercase tracking-[0.3em]">
      <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center group-hover:invert transition-all duration-700">
          <span className="text-black font-black text-lg italic">Y</span>
        </div>
        <span className="text-white opacity-80 group-hover:opacity-100 transition-opacity">Yukora</span>
      </div>
      
      <div className="hidden md:flex gap-12 text-slate-500">
        <a href="#suite" className="hover:text-white transition-colors">The Suite</a>
        <a href="#demos" className="hover:text-white transition-colors">Demos</a>
        <a href="#benchmarks" className="hover:text-white transition-colors">Performance</a>
        <a href="#archives" className="hover:text-white transition-colors">Archives</a>
      </div>

      <button className="px-6 py-3 border border-white/10 rounded-sm hover:bg-white hover:text-black transition-all duration-700">
        Access Suite
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-64 pb-48 px-8 min-h-screen flex flex-col justify-center items-center text-center">
    <motion.div 
      initial={{ opacity: 0, letterSpacing: "1em" }}
      animate={{ opacity: 1, letterSpacing: "0.5em" }}
      transition={{ duration: 2 }}
      className="mb-12 text-[10px] text-blue-500 font-black uppercase"
    >
      Sovereign Standard v4.2
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="text-7xl md:text-[10rem] font-black text-white mb-12 tracking-[-0.05em] leading-[0.85] italic uppercase"
    >
      Logic at <br/>
      <span className="gradient-text drop-shadow-[0_0_50px_rgba(59,130,246,0.2)]">Zero.</span>
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
      className="text-xl md:text-2xl text-slate-500 max-w-3xl mb-20 leading-relaxed font-medium italic"
    >
      A post-installation era has arrived. Replace persistent infrastructure with high-caliber, **Zip-and-Detonate** workflows.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-center gap-12"
    >
      <button className="px-12 py-6 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_60px_rgba(255,255,255,0.1)] rounded-sm">
        Initialize Ingestion
      </button>
      <div className="font-mono text-[11px] text-blue-400/60 tracking-[0.2em]">
        $ irm get.yukora.org | iex
      </div>
    </motion.div>
  </section>
);

const ProofOfZero = () => {
  const [drift, setDrift] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDrift(prev => prev === 0 ? Math.random() * 0.00001 : 0);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass rounded-xl p-6 border-blue-500/10 flex items-center justify-between gap-8 max-w-sm mx-auto mb-32">
      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">System Drift Audit</div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-mono font-bold text-emerald-400">{drift.toFixed(8)}</span>
        <span className="text-[10px] text-slate-600">BYTES</span>
      </div>
    </div>
  );
};

const TheSuite = () => (
  <section id="suite" className="max-w-7xl mx-auto px-8 py-48 border-t border-white/[0.03]">
    <div className="grid lg:grid-cols-3 gap-px bg-white/[0.03] border border-white/[0.03] rounded-sm overflow-hidden shadow-2xl">
      {[
        { 
          title: "Forge Engine", 
          label: "The Muscle", 
          desc: "Recursive RAM-only detonation. 10.5x faster than legacy Docker/Airflow stacks.",
          icon: <Zap size={32} />,
          color: "group-hover:text-blue-400"
        },
        { 
          title: "Pidgeon Mesh", 
          label: "The Memory", 
          desc: "Native context sharing. Negates web-based file transfers via direct peer pulling.",
          icon: <MessageSquare size={32} />,
          color: "group-hover:text-emerald-400"
        },
        { 
          title: "Nexus OS", 
          label: "The Will", 
          desc: "Deep-autofill shell environment. The command-caliber gateway for the trinity.",
          icon: <Layers size={32} />,
          color: "group-hover:text-purple-400"
        }
      ].map((item, i) => (
        <div key={i} className="illusive-card p-16 group relative h-[450px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-12 text-6xl font-black text-white/[0.02] italic">{i+1}</div>
          <div>
            <div className={`mb-12 transition-colors duration-700 ${item.color}`}>
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 italic uppercase tracking-tighter">{item.title}</h3>
            <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] mb-8">{item.label}</div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs">{item.desc}</p>
          </div>
          <div className="text-[9px] font-mono text-slate-800 uppercase tracking-widest group-hover:text-slate-600 transition-colors">
            Verified_Protocol_Active
          </div>
        </div>
      ))}
    </div>
  </section>
);

const WorkingDemos = () => {
  const [activeTab, setActiveTab] = useState(0);

  const demos = [
    {
      title: "Enterprise ETL",
      subtitle: "Airflow Replacement",
      logs: [
        "[BRIDGE] START: Logistics Manager Active.",
        "[PRIME] Forge: Hydrating Ingestion Compactor...",
        "[DETONATE] finance_etl.nxs [SUCCESS]",
        "[EXIT] Session Complete. 0.00B Drift."
      ]
    },
    {
      title: "Microservices",
      subtitle: "K8s Replacement",
      logs: [
        "[FORGE] Parsing docker-compose.yml...",
        "[DETONATE] Hydrating RAM-Mesh network...",
        "[SVC] Postgres:5432 [ACTIVE]",
        "[STATUS] Stack running. JIT Latency: 1.2s"
      ]
    },
    {
      title: "Live Hotfix",
      subtitle: "Pidgeon Sync",
      logs: [
        "[BRIDGE] bridge follow collaborator_01",
        "[PIDGEON] Subscribed to delta stream...",
        "[PRIME] Forge: Pre-hydrating RAM buffer...",
        "[STATUS] Mirroring Active. Work Synchronized."
      ]
    }
  ];

  return (
    <section id="demos" className="max-w-7xl mx-auto px-8 py-48 border-t border-white/[0.03]">
      <div className="grid lg:grid-cols-2 gap-32 items-center">
        <div>
          <h2 className="text-5xl font-black text-white italic uppercase mb-12 tracking-tighter">Market <br/>Readiness.</h2>
          <div className="space-y-4">
            {demos.map((d, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(i)}
                className={`w-full text-left p-10 border transition-all duration-700 ${
                  activeTab === i 
                    ? "bg-white/[0.03] border-white/10" 
                    : "bg-transparent border-transparent opacity-40 hover:opacity-100"
                }`}
              >
                <div className="text-lg font-bold text-white mb-1">{d.title}</div>
                <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{d.subtitle}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-10 bg-blue-500/5 blur-[100px] rounded-full group-hover:bg-blue-500/10 transition-all duration-1000" />
          <div className="glass rounded-sm p-12 font-mono text-xs relative border-white/[0.05] min-h-[400px]">
            <div className="flex gap-2 mb-8 opacity-20">
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <div className="space-y-4">
              {demos[activeTab].logs.map((log, i) => (
                <motion.div 
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={log.includes('[EXIT]') || log.includes('[SUCCESS]') ? 'text-emerald-400' : 'text-slate-400'}
                >
                  {log}
                </motion.div>
              ))}
              <div className="text-blue-500 animate-pulse">_</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SystemMetrics = () => (
  <section id="benchmarks" className="max-w-7xl mx-auto px-8 py-48 border-t border-white/[0.03]">
    <div className="grid md:grid-cols-4 gap-16 text-center">
      {[
        { label: "Detonation Latency", val: "1.04s", desc: "90% reduction vs legacy" },
        { label: "Memory Footprint", val: "18.2MB", desc: "Runtime hydration ceiling" },
        { label: "System Drift", val: "0.00B", desc: "Absolute zero forenisc trace" },
        { label: "Propagation", val: "4.2GB/s", desc: "Peak NVMe/DDR5 hydration" }
      ].map((s, i) => (
        <div key={i}>
          <div className="text-4xl font-black text-white mb-4 italic tracking-tighter">{s.val}</div>
          <div className="text-[9px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4">{s.label}</div>
          <p className="text-slate-600 text-[10px] uppercase font-bold tracking-widest">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const DeploymentCTA = () => (
  <section className="py-64 px-8 text-center border-t border-white/[0.03] bg-gradient-to-b from-transparent to-blue-950/10">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-6xl font-black text-white mb-12 italic uppercase tracking-tighter leading-tight">Ready to <br/>Detonate?</h2>
      <div className="inline-flex items-center gap-8 p-1 glass border-white/5 rounded-full mb-16 pl-8">
        <div className="font-mono text-sm text-blue-400">irm get.yukora.org | iex</div>
        <button className="px-8 py-4 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all">
          Copy Command
        </button>
      </div>
      <div className="flex justify-center gap-12 text-[10px] font-black text-slate-700 uppercase tracking-[0.4em]">
        <span>Enterprise v4.2</span>
        <span>Hardware Verified</span>
        <span>Local-Only</span>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-32 border-t border-white/[0.03] bg-black/20">
    <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
          <span className="text-black font-black text-xs italic">Y</span>
        </div>
        <span className="text-lg font-bold text-white tracking-tighter">YUKORA</span>
      </div>
      <div className="text-[9px] font-black text-slate-800 uppercase tracking-[0.5em]">
        © 2026 YUKORA ORGANIZATION. SOVEREIGN_SYSTEMS_ACTIVE.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-white selection:text-black">
      <NeuralBackground />
      <Navbar />
      <Hero />
      <ProofOfZero />
      <TheSuite />
      <WorkingDemos />
      <SystemMetrics />
      
      <section id="archives" className="max-w-7xl mx-auto px-8 py-48 border-t border-white/[0.03]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/[0.03] border border-white/[0.03] rounded-sm overflow-hidden">
          {[
            { name: "Nemo", path: "/nemo" },
            { name: "Spectre", path: "/spectre" },
            { name: "Prism", path: "/prism" },
            { name: "Aegis", path: "/aegis" },
            { name: "VaultZero", path: "/vaultzero" }
          ].map((a, i) => (
            <a key={i} href={a.path} className="illusive-card p-12 text-center group">
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors">{a.name}</h4>
            </a>
          ))}
        </div>
      </section>

      <DeploymentCTA />
      <Footer />
    </div>
  );
}
