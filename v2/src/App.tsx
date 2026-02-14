import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Layers, ArrowRight, 
  Settings, Code, ZapOff
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
        <a href="#forge" onClick={(e) => { e.preventDefault(); document.getElementById('forge')?.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-white transition-colors">Forge Engine</a>
        <a href="#bridge" onClick={(e) => { e.preventDefault(); document.getElementById('bridge')?.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-white transition-colors">Developer Bridge</a>
        <a href="#benchmarks" onClick={(e) => { e.preventDefault(); document.getElementById('benchmarks')?.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-white transition-colors">Performance</a>
        <a href="#archives" onClick={(e) => { e.preventDefault(); document.getElementById('archives')?.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-white transition-colors">Research</a>
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/torresjchristopher" target="_blank" rel="noreferrer" className="px-5 py-2.5 text-xs font-bold text-white border border-white/10 rounded-lg hover:bg-white/5 transition-all">
          GitHub
        </a>
        <button className="px-5 py-2.5 text-xs font-bold bg-white text-black rounded-lg hover:bg-slate-200 transition-all">
          Get Forge
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-48 pb-32 px-6 min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full opacity-50" />
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400"
    >
      <Zap size={14} />
      Forge Enterprise: System Modernization Layer
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1]"
    >
      Modify Everything. <br/>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-500">Keep Nothing.</span>
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed"
    >
      Forge Engine allows enterprises to ingest legacy infrastructure and transform it into <strong>ephemeral, high-speed execution paths</strong>. Zero-inertia compute for the modern age.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2">
        Deploy Forge Core <ArrowRight size={16} />
      </button>
      <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold text-sm transition-all">
        Ingestion Guide
      </button>
    </motion.div>
  </section>
);

const ForgeCore = () => (
  <section id="forge" className="max-w-7xl mx-auto px-6 py-32">
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">The Modernization Engine</h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          Forge is designed to modify existing systems without permanently altering them. By treating software as a <strong>"Seed"</strong>, we hydrate the environment into RAM, execute the modification, and shred the artifacts.
        </p>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0 text-blue-400">
              <Layers size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Recursive DAG Logic</h4>
              <p className="text-slate-500 text-sm">Automate complex system changes with self-consuming task graphs that minimize storage drift.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0 text-emerald-400">
              <ZapOff size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Zero-Inertia Baseline</h4>
              <p className="text-slate-500 text-sm">After every operation, the host system returns to its original state. No forensic trace, no liability.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-12">
        <div className="font-mono text-xs text-blue-400 space-y-4">
          <div className="text-slate-600"># Ingest legacy system</div>
          <div className="text-white">$ forge ingest legacy_crm_db</div>
          <div className="text-slate-600">// Analysis complete. 4 layers flattened.</div>
          <div className="text-slate-600">// Seed generated: crm_mod_v1.nxs</div>
          <div className="mt-8 text-slate-600"># Execute modification in RAM</div>
          <div className="text-white">$ forge detonate crm_mod_v1 --shred</div>
          <div className="text-emerald-500">// Task: Schema_Update [SUCCESS]</div>
          <div className="text-emerald-500">// Task: Audit_Cleanup [SUCCESS]</div>
          <div className="text-purple-500">// Final State: Baseline Restored (0B Drift)</div>
        </div>
      </div>
    </div>
  </section>
);

const DeveloperBridge = () => (
  <section id="bridge" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
    <div className="text-center mb-24">
      <h2 className="text-4xl font-bold text-white mb-6">The Developer Bridge</h2>
      <p className="text-slate-400 max-w-2xl mx-auto">
        Don't rewrite your infrastructure. Bridge it. Forge provides native shims for the industry's most popular tools.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-900/20 to-slate-900/50 border border-white/10 group hover:bg-white/[0.04] transition-all">
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 text-blue-400">
          <Settings size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Docker Shim</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          Flatten Docker layers into single-detonation seeds. Eliminate the Docker daemon at runtime and run containers with 10.5x less overhead.
        </p>
        <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Available Now</div>
      </div>

      <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-purple-900/20 to-slate-900/50 border border-white/10 group hover:bg-white/[0.04] transition-all">
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 text-purple-400">
          <Code size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Airflow Bridge</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          Wrap existing Airflow DAGs. Forge transforms them into Recursive Graphs that automatically prune metadata as tasks complete.
        </p>
        <div className="text-[10px] font-bold text-purple-500 uppercase tracking-widest">Available Now</div>
      </div>
    </div>
  </section>
);

const ArchiveSection = () => {
  const archives = [
    { name: "Project Nemo", desc: "Volatile Intelligence & Pattern Memory.", path: "/nemo" },
    { name: "Nexus OS", desc: "Sovereign Shell & Artifact Mesh.", path: "/nexus" },
    { name: "Spectre", desc: "Hardware-rooted identity protocol.", path: "/spectre" },
    { name: "Prism", desc: "Volatile UI visualization layer.", path: "/prism" },
    { name: "VaultZero", desc: "Foundational local-first storage.", path: "/vaultzero" }
  ];

  return (
    <section id="archives" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-2">Experimental Research & Core Prototypes</h2>
        <p className="text-slate-500 text-sm">High-threshold initiatives currently in active R&D. Developed for future collaboration.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {archives.map((a, i) => (
          <a 
            key={i} 
            href={a.path}
            className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all group"
          >
            <h4 className="text-white font-bold text-sm mb-2 group-hover:text-blue-400 transition-colors">{a.name}</h4>
            <p className="text-slate-600 text-[10px] leading-relaxed uppercase tracking-wider">{a.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

const EnterpriseCTA = () => (
  <section id="enterprise" className="py-32 px-6 text-center border-t border-white/5">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold text-white mb-8">Modernize Infrastructure without the Bloat.</h2>
      <p className="text-xl text-slate-400 mb-12">
        Forge Enterprise is the solution for organizations that need high-caliber modifications with zero forensic trace.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="px-10 py-5 bg-white text-black rounded-xl font-bold text-lg hover:bg-slate-200 transition-all">
          Contact Sales
        </button>
        <button className="px-10 py-5 bg-transparent border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
          Download Case Study
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
          Enterprise Systems Modernization. Ephemeral compute for high-speed infrastructure.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-white mb-6">Platform</h4>
        <ul className="space-y-4 text-slate-500">
          <li><a href="/forge" className="hover:text-blue-400">Forge Engine</a></li>
          <li><a href="/nexus" className="hover:text-blue-400">Nexus OS</a></li>
          <li><a href="/nemo" className="hover:text-blue-400">Nemo Research</a></li>
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
      <ForgeCore />
      <DeveloperBridge />
      <ArchiveSection />
      <EnterpriseCTA />
      <Footer />
    </div>
  );
}
