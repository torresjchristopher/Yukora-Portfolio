import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Github, 
  Zap, Terminal,
  Database, Gauge, RefreshCw
} from 'lucide-react';

// --- Animated Background ---
const RadarBackground = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 grid-bg opacity-20" />
    <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark/50 to-dark" />
    <div className="scanline" />
    <motion.div 
      animate={{ 
        rotate: 360,
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] border-[1px] border-blue-500/5 rounded-full"
    >
      <div className="absolute top-0 left-1/2 w-px h-1/2 bg-gradient-to-b from-blue-500/20 to-transparent" />
    </motion.div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
    <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
      <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center group-hover:invert transition-all duration-500">
          <span className="text-dark font-black text-xl italic">Y</span>
        </div>
        <div className="text-2xl font-black tracking-[0.2em] text-white uppercase italic">Yukora</div>
      </div>
      <div className="hidden md:flex space-x-12 font-bold text-[9px] uppercase tracking-[0.3em] text-slate-500">
        <a href="#intelligence" onClick={(e) => { e.preventDefault(); document.getElementById('intelligence')?.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-white transition-colors">Intelligence</a>
        <a href="#orchestration" onClick={(e) => { e.preventDefault(); document.getElementById('orchestration')?.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-white transition-colors">Orchestration</a>
        <a href="#dataless" onClick={(e) => { e.preventDefault(); document.getElementById('dataless')?.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-white transition-colors">Zero-Inertia</a>
        <a href="#philosophy" onClick={(e) => { e.preventDefault(); document.getElementById('philosophy')?.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-white transition-colors">Philosophy</a>
      </div>
      <a href="https://github.com/torresjchristopher" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-500">
        <Github size={18} />
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-64 pb-48 px-8 overflow-hidden text-center min-h-screen flex flex-col justify-center">
    <div className="max-w-7xl mx-auto relative">
      <motion.div 
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, letterSpacing: "0.3em" }}
        transition={{ duration: 1.5 }}
        className="text-blue-500 text-[10px] font-black uppercase mb-12 tracking-[0.5em]"
      >
        Nexus OS | Absolute Sovereignty
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-7xl md:text-[10rem] font-black text-white mb-12 tracking-[-0.05em] leading-[0.85] italic uppercase"
      >
        Data is <br/>
        <span className="gradient-text drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">Propagative.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-16 leading-relaxed font-medium italic"
      >
        A post-infrastructure era has arrived. Replace persistent bloat with the **Sovereign Suite**. Zero inertia at rest. Lightning detonation on call.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-8"
      >
        <button 
          onClick={() => document.getElementById('orchestration')?.scrollIntoView({behavior: 'smooth'})}
          className="px-12 py-6 bg-white text-dark rounded-sm font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
        >
          Initialize Detonation
        </button>
        <div className="px-10 py-6 glass rounded-sm font-mono text-[11px] text-blue-400 flex items-center gap-6 border-white/5 group overflow-hidden relative">
          <div className="absolute inset-0 radar-sweep opacity-50" />
          <span className="text-slate-600 relative z-10">$</span> 
          <span className="relative z-10 group-hover:text-white transition-colors tracking-widest">pip install forge-sovereign</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const TechGrid = () => {
  const features = [
    {
      title: "Nexus OS",
      description: "A dataless shell that treats repositories as workflows. No UI. No bloat. Pure command-caliber execution.",
      icon: <Terminal className="text-white" />,
      tag: "SHELL"
    },
    {
      title: "Forge Engine",
      description: "Zip-and-Detonate orchestration. JIT-hydrated images that exist in RAM only. 10.5x faster than legacy stacks.",
      icon: <Zap className="text-white" />,
      tag: "COMPUTE"
    },
    {
      title: "Nemo Intelligence",
      description: "Self-supervised relational telemetry. Uses DINOv2 to understand context without data collection.",
      icon: <Activity className="text-white" />,
      tag: "A.I."
    },
    {
      title: "VaultZero",
      description: "Hardware-rooted identity. Intelligence and keys derived from local silicon. Absolute ownership.",
      icon: <Gauge className="text-white" />,
      tag: "SEC"
    }
  ];

  return (
    <section id="intelligence" className="max-w-7xl mx-auto px-8 mb-64">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="glass p-10 rounded-sm border-white/[0.03] group transition-all duration-500 hover:border-white/20 relative overflow-hidden"
          >
            <div className="text-[8px] font-black text-slate-600 mb-12 tracking-[0.4em]">{f.tag}</div>
            <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-dark transition-all duration-500">
              {f.icon}
            </div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-white italic">{f.title}</h3>
            <p className="text-slate-500 text-[11px] font-bold leading-relaxed uppercase tracking-wider">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const BenchmarkSection = () => (
  <section className="max-w-7xl mx-auto px-8 mb-64">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
      <div>
        <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter">Scientific <br/>Rigor.</h2>
        <p className="text-blue-500 uppercase tracking-[0.4em] text-[10px] font-black mt-4">Verified Phase 7 Metrics</p>
      </div>
      <div className="text-slate-600 font-mono text-[10px] uppercase tracking-widest">Target: Legacy Replacement</div>
    </div>
    
    <div className="glass rounded-sm overflow-hidden border-white/[0.03]">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/5 bg-white/[0.01]">
            <th className="p-10 text-[9px] font-black uppercase tracking-[0.3em] text-slate-600">Metric</th>
            <th className="p-10 text-[9px] font-black uppercase tracking-[0.3em] text-slate-600">Legacy Stack</th>
            <th className="p-10 text-[9px] font-black uppercase tracking-[0.3em] text-white">Forge Recursive</th>
            <th className="p-10 text-[9px] font-black uppercase tracking-[0.3em] text-blue-500">Delta</th>
          </tr>
        </thead>
        <tbody className="text-[11px] font-bold uppercase tracking-widest">
          <tr className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
            <td className="p-10 text-slate-400 italic">6-Task Runtime</td>
            <td className="p-10 text-slate-600">10.90s</td>
            <td className="p-10 text-white">1.04s</td>
            <td className="p-10 text-emerald-500">10.5x Faster</td>
          </tr>
          <tr className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
            <td className="p-10 text-slate-400 italic">Storage Inertia</td>
            <td className="p-10 text-slate-600">900MB</td>
            <td className="p-10 text-white">0.0MB</td>
            <td className="p-10 text-emerald-500">Infinite</td>
          </tr>
          <tr className="hover:bg-white/[0.01] transition-colors">
            <td className="p-10 text-slate-400 italic">System Drift</td>
            <td className="p-10 text-slate-600">High</td>
            <td className="p-10 text-white">0 Bytes</td>
            <td className="p-10 text-emerald-500">Fixed</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

const DatalessVisualizer = () => (
  <section id="dataless" className="max-w-7xl mx-auto px-8 mb-64">
    <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
      {[
        { step: "01", title: "THE SEED", desc: "Compressed encrypted manifest. Zero byte active footprint at rest.", icon: <Database /> },
        { step: "02", title: "DETONATION", desc: "On-call propagation into volatile RAM context. No disk I/O latency.", icon: <Zap /> },
        { step: "03", title: "IMPLOSION", desc: "Real-time shredding of execution artifacts. Absolute zero drift.", icon: <RefreshCw /> }
      ].map((s, i) => (
        <div key={i} className="glass p-16 group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-4xl font-black text-white/5 italic">{s.step}</div>
          <div className="w-12 h-12 mb-12 text-slate-500 group-hover:text-blue-400 transition-colors duration-500">
            {s.icon}
          </div>
          <h4 className="text-xl font-black text-white mb-6 tracking-tighter italic">{s.title}</h4>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const ForgeSection = () => {
  const [status, setStatus] = useState('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const runDemo = () => {
    setStatus('running');
    setLogs([]);
    const sequence = [
      { msg: "> forge recursive run --seed etl_logic.zip", color: "text-white" },
      { msg: "[DETONATE] Propagating runtime from seed...", color: "text-slate-600", delay: 800 },
      { msg: "[HYDRATE] RAM_DISK mounted at 0x8F2", color: "text-slate-600", delay: 600 },
      { msg: "[EXEC] Task: Extract_Data", color: "text-blue-400", delay: 1000 },
      { msg: "[PRUNE] Node Shredded.", color: "text-slate-700", delay: 500 },
      { msg: "[EXEC] Task: Transform_Relational", color: "text-blue-400", delay: 1000 },
      { msg: "[PRUNE] Node Shredded.", color: "text-slate-700", delay: 500 },
      { msg: "[BASELINE] Footprint: 0B Drift.", color: "text-emerald-400", delay: 800 },
      { msg: "// System Reverted to Zero.", color: "text-purple-400", delay: 500 },
    ];

    sequence.forEach((step, i) => {
      setTimeout(() => {
        setLogs(prev => [...prev, step.msg]);
        if (i === sequence.length - 1) setStatus('idle');
      }, sequence.slice(0, i + 1).reduce((acc, s) => acc + (s.delay || 0), 0));
    });
  };

  return (
    <section id="orchestration" className="max-w-7xl mx-auto px-8 mb-64">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="text-purple-500 text-[9px] font-black uppercase tracking-[0.5em] mb-12 italic">Real-Time Simulation</div>
          <h2 className="text-6xl font-black text-white mb-12 tracking-tighter italic uppercase leading-[0.9]">Destroy <br/>The Stack.</h2>
          <p className="text-slate-500 font-bold uppercase text-[11px] tracking-widest mb-12 leading-relaxed">
            Forge replaces traditional "Images" with logic-seeds. Watch the recursive engine consume its own execution path in real-time.
          </p>
          <button 
            onClick={runDemo}
            disabled={status === 'running'}
            className="px-12 py-6 border border-white/10 text-white rounded-sm font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-dark disabled:opacity-50"
          >
            {status === 'running' ? 'Processing...' : 'Trigger Detonation'}
          </button>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-white/5 blur-2xl rounded-full opacity-20" />
          <div className="bg-black/40 border border-white/5 rounded-sm p-12 font-mono text-[12px] min-h-[450px] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Terminal size={40} className="text-white" />
            </div>
            <div className="space-y-4">
              {logs.length === 0 && <div className="text-slate-700 animate-pulse tracking-[0.2em] uppercase text-[9px]">_ Awaiting Seed Instruction</div>}
              {logs.map((log, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -5 }} 
                  animate={{ opacity: 1, x: 0 }}
                  className={
                    log.includes('[PRUNE]') ? 'text-slate-700' : 
                    log.includes('[BASELINE]') ? 'text-emerald-500' :
                    log.includes('//') ? 'text-purple-500 italic' :
                    log.startsWith('>') ? 'text-white font-bold' : 'text-slate-500'
                  }
                >
                  {log}
                </motion.div>
              ))}
              {status === 'running' && <div className="text-blue-500 animate-pulse text-lg">_</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NemoDeepDive = () => (
  <section className="max-w-7xl mx-auto px-8 mb-64">
    <div className="grid lg:grid-cols-2 gap-32 items-center">
      <div className="relative group">
        <div className="absolute -inset-20 bg-blue-500/5 blur-[120px] rounded-full group-hover:bg-blue-500/10 transition-all duration-1000" />
        <div className="glass rounded-sm p-16 relative border-white/[0.03]">
          <div className="flex justify-between items-center mb-16">
            <div className="text-blue-500 text-[9px] font-black uppercase tracking-[0.4em] italic">Temporal Core</div>
            <div className="text-slate-700 font-mono text-[9px] tracking-widest uppercase">Encryption: VaultZero</div>
          </div>
          
          <div className="space-y-12">
            {[
              { icon: <Database />, title: "15-Min Snapshots", desc: "96 daily snapshots. Full week under 15MB." },
              { icon: <Gauge />, title: "Netflix-Scrubbing", desc: "Moment previews with instant restoration." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-black uppercase italic tracking-tighter text-lg mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-white/5 font-mono text-[10px] text-emerald-500/50 uppercase tracking-widest">
            <div>{">"} identity_match: verified</div>
            <div>{">"} state_restoration: 100%</div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-slate-600 text-[9px] font-black uppercase tracking-[0.5em] mb-12 italic">Relational Intelligence</div>
        <h2 className="text-7xl font-black text-white mb-12 tracking-tighter italic uppercase leading-[0.85]">Nemo <br/><span className="gradient-text">A.I.</span></h2>
        <p className="text-lg text-slate-500 mb-16 leading-relaxed font-bold uppercase tracking-wider italic">
          Intelligence without the cloud. By utilizing self-distillation frameworks, Nemo builds its own understanding of your workspace in total silence.
        </p>
        <div className="flex gap-8">
          <div className="text-[9px] font-black text-white uppercase tracking-[0.3em] border-b border-blue-500 pb-2 cursor-pointer hover:text-blue-400 transition-colors">DINOv2 Integration</div>
          <div className="text-[9px] font-black text-white uppercase tracking-[0.3em] border-b border-purple-500 pb-2 cursor-pointer hover:text-purple-400 transition-colors">Local-First</div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-32 border-t border-white/5 bg-black/20">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-4 gap-24 mb-32">
        <div className="col-span-2">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-dark font-black text-sm italic">Y</span>
            </div>
            <div className="text-2xl font-black tracking-widest text-white uppercase italic">Yukora</div>
          </div>
          <p className="text-slate-600 font-bold uppercase text-[10px] tracking-widest max-w-sm leading-relaxed">
            Building the infrastructure for human autonomy. No cloud. No tracking. Pure local power.
          </p>
        </div>
        <div>
          <h4 className="text-white font-black uppercase italic text-[9px] tracking-[0.4em] mb-12">Technologies</h4>
          <ul className="space-y-6 text-[9px] font-black uppercase tracking-[0.3em] text-slate-600">
            <li><a href="#" className="hover:text-white transition-colors">Forge Engine</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nemo A.I.</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nexus OS</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black uppercase italic text-[9px] tracking-[0.4em] mb-12">Ecosystem</h4>
          <ul className="space-y-6 text-[9px] font-black uppercase tracking-[0.3em] text-slate-600">
            <li><a href="https://github.com/torresjchristopher" className="hover:text-white transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Manifesto</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-16 border-t border-white/5 flex justify-between items-center text-slate-800 text-[8px] font-black uppercase tracking-[0.5em]">
        <div>© 2026 YUKORA ORGANIZATION</div>
        <div className="text-slate-900">SOVEREIGN_SYSTEMS_VERIFIED</div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-white selection:text-dark">
      <RadarBackground />
      <Navbar />
      <Hero />
      <TechGrid />
      <BenchmarkSection />
      <ForgeSection />
      <DatalessVisualizer />
      <NemoDeepDive />
      
      <section id="philosophy" className="max-w-5xl mx-auto px-8 py-64 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-7xl md:text-9xl font-black text-white mb-16 tracking-tighter italic uppercase opacity-10">Data Invisibility.</h2>
          <p className="text-2xl md:text-4xl text-slate-500 leading-tight font-black uppercase italic mb-24 max-w-4xl mx-auto">
            "The goal of intelligence is not to be seen, but to be effective."
          </p>
          <div className="flex justify-center gap-24">
            <div className="text-center">
              <div className="text-blue-500 font-black text-[9px] uppercase tracking-[0.5em] mb-4">Privacy</div>
              <div className="text-slate-700 text-[10px] font-black uppercase tracking-[0.2em]">Zero Telemetry</div>
            </div>
            <div className="text-center">
              <div className="text-purple-500 font-black text-[9px] uppercase tracking-[0.5em] mb-4">Ownership</div>
              <div className="text-slate-700 text-[10px] font-black uppercase tracking-[0.2em]">Local-First</div>
            </div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
}
