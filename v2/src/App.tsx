import { motion } from 'framer-motion';
import { 
  Activity, 
  ChevronRight, Github, 
  Eye, RefreshCw,
  Brain, Clock, Database, Gauge
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
    <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
      <div className="flex items-center space-x-4 group cursor-pointer">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
          <span className="text-white font-black text-xl italic">Y</span>
        </div>
        <div className="text-2xl font-black tracking-tighter text-white uppercase italic">Yukora</div>
      </div>
      <div className="hidden md:flex space-x-10 font-bold text-[10px] uppercase tracking-[0.2em] text-slate-400">
        <a href="#intelligence" className="hover:text-blue-400 transition-colors">Intelligence</a>
        <a href="#orchestration" className="hover:text-blue-400 transition-colors">Orchestration</a>
        <a href="#security" className="hover:text-blue-400 transition-colors">Security</a>
        <a href="#philosophy" className="hover:text-blue-400 transition-colors">Philosophy</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/torresjchristopher" target="_blank" rel="noreferrer" className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
          <Github size={14} /> GitHub
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-48 pb-32 px-8 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-purple-500/5 blur-[100px] rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8"
      >
        <Activity size={12} className="animate-pulse" />
        Sovereign Intelligence Systems v4.0.2
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] italic uppercase"
      >
        Orchestrate <br/>
        <span className="gradient-text">Intelligence.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium italic"
      >
        A self-recursive ecosystem where <span className="text-white">Forge</span> orchestrates the physical and <span className="text-white">Nemo A.I.</span> masters the temporal. Built on zero-label distillation and axiomatic attribution.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6"
      >
        <button className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-lg transition-all shadow-xl shadow-white/10 hover:scale-105 uppercase tracking-tighter">
          Explore Nemo A.I.
        </button>
        <button className="px-10 py-5 border border-white/10 rounded-2xl font-black text-lg hover:bg-white/5 transition-all uppercase tracking-tighter italic group flex items-center gap-2">
          View Technical Specs <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  </section>
);

const TechGrid = () => {
  const features = [
    {
      title: "Recursive Tree-Logic",
      description: "Self-consuming DAGs that prune their own execution paths in real-time. Nodes destroy themselves upon completion to maintain a O(1) memory footprint.",
      icon: <RefreshCw className="text-blue-400" />,
      gradient: "from-blue-500/20 to-transparent"
    },
    {
      title: "Zip-and-Detonate",
      description: "Ephemeral deployment where the runtime exists as a compressed seed, propagates into RAM-only context on call, and implodes on exit.",
      icon: <Zap className="text-purple-400" />,
      gradient: "from-purple-500/20 to-transparent"
    },
    {
      title: "Dataless Propagation",
      description: "Replacing storage with state-tokens. Workflow results propagate forward via volatile snapshots that are shredded immediately after hand-off.",
      icon: <Activity className="text-emerald-400" />,
      gradient: "from-emerald-500/20 to-transparent"
    },
    {
      title: "Zero-Inertia Baselines",
      description: "Strict baseline enforcement where Forge monitors its own repository size and process handles to ensure absolute return to a zero-state.",
      icon: <Gauge className="text-amber-400" />,
      gradient: "from-amber-500/20 to-transparent"
    }
  ];

  return (
    <section id="intelligence" className="max-w-7xl mx-auto px-8 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className={`glass p-8 rounded-[2.5rem] relative overflow-hidden group`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${f.gradient} rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`} />
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h3 className="text-xl font-black mb-4 uppercase italic tracking-tighter text-white">{f.title}</h3>
            <p className="text-slate-500 text-sm font-bold leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const BenchmarkSection = () => (
  <section className="max-w-7xl mx-auto px-8 mb-40">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Scientific Rigor.</h2>
      <p className="text-slate-500 uppercase tracking-[0.4em] text-[10px] font-bold mt-2">Forge vs. Industry Standards (Phase 7 Data)</p>
    </div>
    <div className="glass rounded-[3rem] overflow-hidden border-white/5">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/5 bg-white/[0.02]">
            <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-500">Operation</th>
            <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-500">Podman/Docker</th>
            <th className="p-8 text-[10px] font-black uppercase tracking-widest text-blue-400">Forge Engine</th>
            <th className="p-8 text-[10px] font-black uppercase tracking-widest text-emerald-400">Gain</th>
          </tr>
        </thead>
        <tbody className="text-sm font-medium">
          <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
            <td className="p-8 text-white font-bold italic">Container Startup</td>
            <td className="p-8 text-slate-500">1200ms</td>
            <td className="p-8 text-white">245ms</td>
            <td className="p-8"><span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black italic">4.9X FASTER</span></td>
          </tr>
          <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
            <td className="p-8 text-white font-bold italic">Memory Footprint (Idle)</td>
            <td className="p-8 text-slate-500">85.2MB</td>
            <td className="p-8 text-white">18.5MB</td>
            <td className="p-8"><span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black italic">4.6X LEANER</span></td>
          </tr>
          <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
            <td className="p-8 text-white font-bold italic">Disk Accumulation (30d)</td>
            <td className="p-8 text-slate-500">3840MB</td>
            <td className="p-8 text-white">1248MB</td>
            <td className="p-8"><span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black italic">3.1X SMALLER</span></td>
          </tr>
          <tr className="hover:bg-white/[0.01] transition-colors">
            <td className="p-8 text-white font-bold italic">DAG Parsing Latency</td>
            <td className="p-8 text-slate-500">2-10s</td>
            <td className="p-8 text-white">&lt;100ms</td>
            <td className="p-8"><span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black italic">100X FASTER</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

const NemoDeepDive = () => (
  <section className="max-w-7xl mx-auto px-8 mb-40">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="absolute -inset-10 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="glass rounded-[3rem] p-12 relative overflow-hidden">
          <div className="flex justify-between items-center mb-12">
            <div className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest italic">Temporal Window</div>
            <div className="text-slate-600 font-mono text-[10px]">T-MINUS: 168h 00m 00s</div>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                <Database size={20} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-black uppercase italic tracking-tighter text-lg">15-Minute Snapshots</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">96 daily snapshots at ~200KB each. A full week of history fits in under 15MB.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                <Gauge size={20} className="text-purple-400" />
              </div>
              <div>
                <h4 className="text-white font-black uppercase italic tracking-tighter text-lg">Netflix-Style Scrubbing</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">Horizontal timeline navigation with live moment previews and instant restoration.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-dark/50 rounded-2xl border border-white/5 font-mono text-[10px] text-emerald-400/70">
            <div>{">"} nemo sync --vault zero</div>
            <div className="text-slate-600 italic">{">>"} Verifying hardware-rooted identity...</div>
            <div className="text-blue-400">{">>"} Identity: 0x7A4F... [MATCH]</div>
            <div>{">>"} Restoring desktop state to 2026-02-11T14:30:00...</div>
            <div className="text-white">{">>"} SUCCESS: 100% RECOVERY COMPLETE.</div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-purple-400 font-black text-[10px] uppercase tracking-[0.5em] mb-6 italic">The Intelligence layer</div>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter italic uppercase">Nemo <br/><span className="ghost-gradient font-normal">A.I.</span></h2>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium italic">
          Nemo represents the shift from <em>Generative AI</em> to <em>Sovereign Intelligence</em>. By utilizing self-supervised learning frameworks like <strong>DINOv2</strong>, Nemo builds its own understanding of your workspace without sending a single packet to the cloud.
        </p>
        <div className="flex gap-4">
          <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase italic tracking-widest">Self-Distillation</div>
          <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase italic tracking-widest">Local-First</div>
        </div>
      </div>
    </div>
  </section>
);

const ForgeSection = () => (
  <section id="orchestration" className="max-w-7xl mx-auto px-8 mb-40">
    <div className="grid lg:grid-cols-3 gap-12 items-center">
      <div className="lg:col-span-1">
        <h2 className="text-4xl font-black text-white mb-6 italic uppercase tracking-tighter">Detonate <br/>The Stack.</h2>
        <p className="text-slate-400 font-medium italic mb-8">
          Forge Engine replaces the "Installation" with "Propagation." Use JIT-hydrated images that exist only for the duration of a specific Airflow task.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="glass p-4 rounded-2xl border-blue-500/20">
            <div className="text-2xl font-black text-white italic">O(1)</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Storage Scalability</div>
          </div>
          <div className="glass p-4 rounded-2xl border-purple-500/20">
            <div className="text-2xl font-black text-white italic">Zero</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Leftover Data</div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="bg-[#0a0f1e] border border-white/10 rounded-[2.5rem] p-8 font-mono text-sm overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <Activity size={24} className="text-blue-500" />
          </div>
          <div className="space-y-2">
            <div className="text-slate-600 italic"># Detonate a Recursive Workflow</div>
            <div className="flex gap-2 text-blue-400">
              <span>$</span>
              <span className="text-white">forge recursive run --seed etl_logic.zip</span>
            </div>
            <div className="text-slate-500 mt-4">[DETONATE] Propagating runtime from seed...</div>
            <div className="text-slate-500">[PRUNE] Task:Extract complete. Node shredded.</div>
            <div className="text-slate-500">[PRUNE] Task:Transform complete. Node shredded.</div>
            <div className="text-emerald-400">[BASELINE] Verifying repo footprint: 0B Drift.</div>
            <div className="text-purple-400 italic">// Implosion complete. System at Zero Baseline.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-dark">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl italic">Y</span>
            </div>
            <div className="text-2xl font-black tracking-tighter text-white uppercase italic">Yukora</div>
          </div>
          <p className="text-slate-500 font-medium italic max-w-sm">
            Building the infrastructure for human autonomy. No cloud. No tracking. Pure local power.
          </p>
        </div>
        <div>
          <h4 className="text-white font-black uppercase italic text-xs tracking-widest mb-6">Technologies</h4>
          <ul className="space-y-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Forge Engine</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Nemo A.I.</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Nexus OS</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">VaultZero</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black uppercase italic text-xs tracking-widest mb-6">Ecosystem</h4>
          <ul className="space-y-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <li><a href="https://github.com/torresjchristopher" className="hover:text-blue-400 transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Sovereignty Manifesto</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 text-center">
        <div className="text-slate-700 font-black text-[10px] uppercase tracking-[0.5em]">
          © 2026 YUKORA ORGANIZATION. THE SOVEREIGN SUITE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <TechGrid />
      <BenchmarkSection />
      <ForgeSection />
      <NemoDeepDive />
      
      <section id="philosophy" className="max-w-4xl mx-auto px-8 mb-40 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-white mb-12 tracking-tighter italic uppercase underline decoration-blue-500 underline-offset-[12px]">Sovereignty First.</h2>
          <p className="text-2xl text-slate-400 leading-relaxed font-medium mb-12 italic">
            "Data Invisibility means that to us, you don't exist. Yukora software is a Ghost in the Machine. No telemetry. No cloud. No ransom. Your genius is yours alone."
          </p>
          <div className="flex justify-center gap-12">
            <div className="text-left">
              <div className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-2 italic">Privacy</div>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Zero telemetry by design.</div>
            </div>
            <div className="text-left">
              <div className="text-purple-400 font-black text-[10px] uppercase tracking-widest mb-2 italic">Ownership</div>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Local-first execution.</div>
            </div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
}
