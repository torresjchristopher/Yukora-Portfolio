import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Layers, ArrowRight, 
  Settings, Code, ZapOff,
  Shield, Gauge, Activity
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

const BentoGrid = () => (
  <section id="solutions" className="max-w-7xl mx-auto px-6 mb-32">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
      
      {/* Bridge Sync Feature */}
      <div className="md:col-span-2 rounded-3xl bg-[#0a0f1e] border border-white/10 p-10 flex items-center justify-between relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4">Ambient Synchronization</h3>
          <p className="text-slate-400 max-w-sm mb-6">Beyond shipment. Bridge maintains a live, sovereign link between co-creators, ambiently priming the Forge buffer as work evolves in real-time.</p>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Live Mirroring</span>
            <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-blue-400 uppercase tracking-widest">Delta Tracking</span>
          </div>
        </div>
        <div className="hidden md:block relative z-10 p-8 bg-emerald-500/10 rounded-full">
          <Activity size={60} className="text-emerald-400 animate-pulse" />
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

const SystemMetrics = () => {
  const stats = [
    { label: "Orchestration Latency", val: "1.04", unit: "s", delta: "-90%", desc: "6-Task Recursive DAG vs Airflow/Docker (10.90s)" },
    { label: "Memory Footprint", val: "18.2", unit: "MB", delta: "-96%", desc: "Runtime ceiling for volatile context hydration" },
    { label: "Storage Inertia", val: "0.00", unit: "B", delta: "FIXED", desc: "Residual system drift after 10k execution cycles" },
    { label: "Propagation Rate", val: "4.2", unit: "GB/s", delta: "PEAK", desc: "JIT RAM-Disk hydration on NVMe/DDR5 bus" }
  ];

  return (
    <section id="benchmarks" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Empirical Performance.</h2>
          <p className="text-slate-400 max-w-xl">Phase 7 verified telemetry. Forge doesn't just improve performance—it redefines the ceiling of ephemeral compute.</p>
        </div>
        <div className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em]">
          Telemetry_Source: Local_Silicon_Audit_2026
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {stats.map((s, i) => (
          <div key={i} className="p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
              <Activity size={40} className="text-blue-500" />
            </div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-8">{s.label}</div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-white tracking-tighter">{s.val}</span>
              <span className="text-xl font-bold text-blue-500/50">{s.unit}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[10px] font-bold mb-6">
              {s.delta}
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed uppercase font-medium">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-[3rem] p-12 overflow-hidden relative">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <Gauge size={20} className="text-blue-500" /> Stress-Test: Recursive Depth Analysis
            </h3>
            <div className="space-y-8">
              {[
                { label: "Node Ingestion (100+ Tasks)", forge: "0.8s", legacy: "14.2s", p: 95 },
                { label: "Artifact Encryption (AES-256-GCM)", forge: "0.12s", legacy: "0.9s", p: 88 },
                { label: "Memory Shredding (DoD 5220.22-M)", forge: "0.04s", legacy: "N/A", p: 100 }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-bold mb-3 uppercase tracking-wider">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-blue-400">{item.forge} <span className="text-slate-700 ml-2">vs</span> <span className="text-slate-600 ml-2">{item.legacy}</span></span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.p}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center border-l border-white/5 pl-16">
            <div className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-6 italic">Architecture Audit</div>
            <h4 className="text-3xl font-bold text-white mb-6 italic leading-tight">Dataless at <br/>Absolute Rest.</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Our audit confirms that Forge maintains a true zero-drift baseline. Residual logs, temporary files, and metadata are pruned recursively during execution, not after.
            </p>
            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 font-mono text-[10px] text-blue-400">
              SHA-256 Baseline: MATCHED<br/>
              Forensic Recovery: FAILED (0 Bytes)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkflowMapping = () => {
  const mappings = [
    { legacy: "Docker / Podman", sovereign: "Forge Ingestion", desc: "Flattened logic-seeds replace heavy multi-layer images." },
    { legacy: "Airflow / Prefect", sovereign: "Recursive DAGs", desc: "Self-consuming task graphs eliminate log & metadata bloat." },
    { legacy: "Kubernetes (K8s)", sovereign: "Nexus Artifact Mesh", desc: "Peer-to-peer context sharing replaces centralized cluster overhead." },
    { legacy: "CI/CD Runners", sovereign: "Sovereign Detonation", desc: "Immediate execution in RAM with absolute zero forensic footprint." }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-4 italic uppercase">The Great Mapping.</h2>
        <p className="text-slate-400 max-w-2xl">Forge and Nexus OS are architecturally designed to replace the entire legacy container stack. Here is how your current workflow translates to Sovereign Intelligence.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
        {mappings.map((m, i) => (
          <div key={i} className="bg-[#020617] p-12 hover:bg-white/[0.02] transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Legacy Target</div>
              <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Sovereign Equivalent</div>
            </div>
            <div className="flex items-center gap-6 mb-8">
              <span className="text-xl font-bold text-slate-500 line-through decoration-red-500/50">{m.legacy}</span>
              <ArrowRight size={20} className="text-blue-500 group-hover:translate-x-2 transition-transform" />
              <span className="text-2xl font-bold text-white italic">{m.sovereign}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const InteractiveTerminal = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [running, setRunning] = useState(false);

  const runSim = () => {
    setRunning(true);
    setLogs([]);
    const steps = [
      { t: "> nexus enter", c: "text-white" },
      { t: "[NEXUS] START: Sovereign Shell v4.1.0", c: "text-slate-500", d: 400 },
      { t: "> bridge follow collaborator_01", c: "text-white", d: 800 },
      { t: "[BRIDGE] Establishing live sovereign link...", c: "text-blue-400", d: 400 },
      { t: "[PIDGEON] Subscribing to delta context stream...", c: "text-emerald-400", d: 600 },
      { t: "[PRIME] Forge: Pre-hydrating incoming RAM buffer...", c: "text-slate-500", d: 1000 },
      { t: "[STATUS] Mirroring Active. Work Synchronized.", c: "text-emerald-500", d: 600 },
      { t: " Collaborator :: push mod_v2", c: "text-slate-400 italic", d: 1200 },
      { t: "[DETONATE] bridge pull mod_v2 --instant", c: "text-blue-400", d: 800 },
      { t: "[EXIT] System Baseline Maintained. Zero Drift.", c: "text-slate-400", d: 400 },
    ];

    let delay = 0;
    steps.forEach((s, i) => {
      delay += (s.d || 0);
      setTimeout(() => {
        setLogs(prev => [...prev, s.t]);
        if (i === steps.length - 1) setRunning(false);
      }, delay);
    });
  };

  return (
    <section id="technology" className="max-w-7xl mx-auto px-6 mb-32">
      <div className="bg-[#0f111a] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row">
        <div className="p-12 md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5">
          <div className="inline-flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest mb-6">
            <Layers size={14} /> Bridge Logistics
          </div>
          <h3 className="text-4xl font-bold text-white mb-6">See It In Action.</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Experience the "Ship-and-Detonate" lifecycle. Watch as Bridge coordinates Forge and Pidgeon to move functional contexts across the mesh instantly.
          </p>
          <button 
            onClick={runSim} 
            disabled={running}
            className="self-start px-6 py-3 bg-white text-black font-bold rounded-lg text-sm hover:bg-slate-200 disabled:opacity-50 transition-all"
          >
            {running ? "Processing..." : "Run Shipment"}
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
      <BentoGrid />
      <DeveloperBridge />
      <SystemMetrics />
      <WorkflowMapping />
      <InteractiveTerminal />
      <ArchiveSection />
      <EnterpriseCTA />
      <Footer />
    </div>
  );
}
