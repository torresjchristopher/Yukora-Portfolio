import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Layers,
  MessageSquare,
  Eye
} from 'lucide-react';

// --- Premium Background ---
const NeuralBackground = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
    <motion.div 
      animate={{ 
        scale: [1, 1.08, 1],
        x: [0, 30, 0],
        y: [0, -20, 0]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-15%] right-[-15%] w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[100px]"
    />
    <motion.div 
      animate={{ 
        scale: [1.1, 0.9, 1.1],
        x: [0, -35, 0],
        y: [0, 40, 0]
      }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-slate-200/20 rounded-full blur-[100px]"
    />
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
      <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
          <span className="text-white font-black text-sm">E</span>
        </div>
        <span className="text-slate-900 font-bold text-lg tracking-tight">Ethereal</span>
      </div>
      
      <div className="hidden md:flex gap-16 text-sm text-slate-600">
        <a href="#suite" className="hover:text-slate-900 transition-colors font-medium">Platform</a>
        <a href="#updates" className="hover:text-slate-900 transition-colors font-medium">Updates</a>
        <a href="#demos" className="hover:text-slate-900 transition-colors font-medium">Use Cases</a>
        <a href="#benchmarks" className="hover:text-slate-900 transition-colors font-medium">Performance</a>
      </div>

      <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-sm shadow-sm hover:shadow-md">
        Get Started
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-32 px-8 min-h-screen flex flex-col justify-center items-center text-center">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mb-8 text-sm text-blue-600 font-semibold uppercase tracking-wider"
    >
      Enterprise Infrastructure Platform
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight max-w-4xl"
    >
      Ephemeral Compute Infrastructure
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1.2 }}
      className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-12 leading-relaxed font-normal"
    >
      Deploy workloads without infrastructure. Execute in isolated memory. Zero persistence. Perfect for DevOps, data processing, and secure collaboration.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex flex-col md:flex-row items-center justify-center gap-6"
    >
      <button className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
        Start Free Trial
      </button>
      <button className="px-8 py-3.5 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all">
        View Documentation
      </button>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="mt-16 text-sm text-slate-500 font-mono"
    >
      $ ethereal deploy --ephemeral
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
    <div className="bg-white border border-slate-200 rounded-xl p-8 flex items-center justify-between gap-8 max-w-2xl mx-auto mb-32 shadow-sm">
      <div className="flex-1">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Zero Residue Guarantee</div>
        <p className="text-sm text-slate-600">All computations are ephemeral. No infrastructure footprint remains.</p>
      </div>
      <div className="flex items-baseline gap-3 text-right">
        <span className="text-4xl font-bold text-blue-600">{drift.toFixed(8)}</span>
        <span className="text-sm text-slate-500">bytes persisted</span>
      </div>
    </div>
  );
};

const TheSuite = () => (
  <section id="suite" className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-200 bg-slate-50">
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">The Ethereal Platform</h2>
      <p className="text-xl text-slate-600 max-w-2xl">Three core components working together as unified ephemeral infrastructure.</p>
    </div>
    <div className="grid lg:grid-cols-2 gap-6 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      {[
        { 
          title: "Forge Engine", 
          label: "Memory-First Execution", 
          desc: "Execute workloads in isolated memory buffers. Zero infrastructure footprint. 10x faster than persistent stacks.",
          icon: <Zap size={28} />,
          color: "text-blue-600"
        },
        { 
          title: "Pidgeon", 
          label: "Secure Sync Layer", 
          desc: "P2P encrypted synchronization. Direct context transfer. Native encryption. No external infrastructure.",
          icon: <MessageSquare size={28} />,
          color: "text-emerald-600"
        },
        { 
          title: "Ghost Identity", 
          label: "Anonymous Collaboration", 
          desc: "Ephemeral masked identities. Collaborate securely without exposing real identity. Secure by design.",
          icon: <Eye size={28} />,
          color: "text-indigo-600"
        },
        { 
          title: "Nexus Lens", 
          label: "Workspace Orchestration", 
          desc: "Real-time workspace mapping. Intelligent context management. Unified control plane.",
          icon: <Layers size={28} />,
          color: "text-purple-600"
        }
      ].map((item, i) => (
        <div key={i} className="p-10 border-l-4 border-blue-600 hover:bg-slate-50 transition-colors group">
          <div className={`mb-6 ${item.color}`}>
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">{item.label}</div>
          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const IntelligenceReports = () => (
  <section id="updates" className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-200">
    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
      <div>
        <h2 className="text-4xl font-bold text-slate-900 mb-3">Latest Developments</h2>
        <p className="text-lg text-slate-600">Recent updates to the Ethereal Framework.</p>
      </div>
    </div>

    <div className="grid lg:grid-cols-1 gap-8">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-12 relative overflow-hidden">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-12">
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider rounded-full">Release 1.1</span>
            <span className="text-slate-600 text-sm font-medium">February 13, 2026</span>
          </div>
          
          <h3 className="text-4xl font-bold text-slate-900 mb-10 leading-tight">Nexus 1.1: Intelligent Context Awareness</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Platform Synthesis</h4>
                <p className="text-slate-700 leading-relaxed">
                  Forge Engine, Pidgeon, and Nexus Lens now operate as a unified platform. Built on <strong>Zero-Residue</strong> principles—all computation happens in ephemeral memory with zero infrastructure footprint.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">How It Works</h4>
                <p className="text-slate-700 leading-relaxed">
                  Nexus Lens maps your workspace. Forge Engine executes tasks in isolated buffers. Pidgeon handles encrypted sync between teams. No servers. No persistence. Pure results.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-base mb-4">Context Intelligence</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Nexus 1.1 learns usage patterns and pre-loads compute buffers in memory. 65% latency reduction vs. previous generation.
                </p>
                <div className="font-mono text-xs text-slate-500 bg-slate-50 p-3 rounded">
                  Status: Context Learning [STABLE]
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">What's Next</h4>
                <p className="text-slate-700 leading-relaxed">
                  Multi-tenant ephemeral sessions. Teams spin up collaborative compute environments that exist only for project duration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WorkingDemos = () => {
  const [activeTab, setActiveTab] = useState(0);

  const demos = [
    {
      title: "Enterprise Data Pipeline",
      subtitle: "ETL Orchestration",
      logs: [
        "$ ethereal deploy data-pipeline.yaml",
        "[INIT] Forge Engine: 2GB buffer allocated",
        "[EXEC] Processing 50M records in memory...",
        "[SYNC] Pidgeon: Syncing results to team...",
        "[SUCCESS] Pipeline complete. 0B infrastructure footprint."
      ]
    },
    {
      title: "Microservices Stack",
      subtitle: "K8s Replacement",
      logs: [
        "$ ethereal compose --ephemeral",
        "[INIT] Nexus Lens: Mapping workspace...",
        "[FORGE] Starting services in memory buffers",
        "[DB] Postgres:5432 [READY]",
        "[STATUS] Stack active. Zero persistence."
      ]
    },
    {
      title: "Team Collaboration",
      subtitle: "Secure Sync",
      logs: [
        "$ ethereal invite --team",
        "[PIDGEON] Encrypted context sync active",
        "[GHOST] Identity masked as: team-session-01",
        "[STATUS] 3 collaborators connected",
        "[RESULT] Changes synced instantly."
      ]
    },
    {
      title: "Infrastructure Audit",
      subtitle: "Zero-Residue Verification",
      logs: [
        "$ ethereal audit --verify",
        "[SCAN] Checking for infrastructure artifacts...",
        "[RESULT] 0 bytes persisted",
        "[CLEAN] Workspace verified clean",
        "[SUCCESS] Zero-residue guarantee confirmed."
      ]
    }
  ];

  return (
    <section id="demos" className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-200">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-3">Use Cases in Action</h2>
        <p className="text-lg text-slate-600 max-w-2xl">See how enterprises leverage Ethereal for DevOps, data processing, and secure collaboration.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="space-y-3">
            {demos.map((d, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(i)}
                className={`w-full text-left p-6 rounded-lg border transition-all ${
                  activeTab === i 
                    ? "bg-blue-50 border-blue-300" 
                    : "bg-white border-slate-200 hover:border-slate-300 opacity-60 hover:opacity-100"
                }`}
              >
                <div className="font-semibold text-slate-900">{d.title}</div>
                <div className="text-sm text-blue-600 font-medium">{d.subtitle}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="bg-slate-900 text-slate-100 rounded-xl p-8 font-mono text-sm min-h-[400px] border border-slate-700 shadow-lg">
            <div className="flex gap-2 mb-6 opacity-40">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-3">
              {demos[activeTab].logs.map((log, i) => (
                <motion.div 
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={log.includes('[SUCCESS]') ? 'text-green-400' : log.includes('[ERROR]') ? 'text-red-400' : 'text-slate-300'}
                >
                  {log}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SystemMetrics = () => (
  <section id="benchmarks" className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-200 bg-slate-50">
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-3">Performance Benchmarks</h2>
      <p className="text-lg text-slate-600">Enterprise-grade metrics across key infrastructure dimensions.</p>
    </div>
    <div className="grid md:grid-cols-4 gap-8">
      {[
        { label: "Startup Latency", val: "1.04s", desc: "Time to first execution" },
        { label: "Memory Footprint", val: "18.2MB", desc: "Runtime allocation ceiling" },
        { label: "Data Persistence", val: "0.00B", desc: "Zero-residue guarantee" },
        { label: "Throughput", val: "4.2GB/s", desc: "Peak memory bandwidth" }
      ].map((s, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-xl p-8">
          <div className="text-4xl font-bold text-slate-900 mb-3">{s.val}</div>
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">{s.label}</div>
          <p className="text-slate-600 text-sm">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const DeploymentCTA = () => (
  <section className="py-24 px-8 border-t border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-bold text-white mb-8">Ready to Deploy?</h2>
      <p className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto">Join enterprises optimizing infrastructure without infrastructure.</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg">
          Start Free Trial
        </button>
        <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
          Schedule Demo
        </button>
      </div>
      <div className="mt-12 flex justify-center gap-8 flex-wrap text-sm text-blue-50 font-medium">
        <span>✓ Enterprise SLA</span>
        <span>✓ Zero Setup</span>
        <span>✓ Instant Deploy</span>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 border-t border-slate-200 bg-slate-50">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-black text-xs">E</span>
          </div>
          <span className="text-lg font-bold text-slate-900">Ethereal</span>
        </div>
        <div className="text-sm text-slate-600">
          © 2026 Yukora Organization. Enterprise Infrastructure.
        </div>
      </div>
      <div className="flex gap-12 text-sm text-slate-600">
        <a href="#" className="hover:text-slate-900">Documentation</a>
        <a href="#" className="hover:text-slate-900">API Reference</a>
        <a href="#" className="hover:text-slate-900">Security</a>
        <a href="#" className="hover:text-slate-900">Contact</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-blue-600 selection:text-white">
      <NeuralBackground />
      <Navbar />
      <Hero />
      <ProofOfZero />
      <TheSuite />
      <IntelligenceReports />
      <WorkingDemos />
      <SystemMetrics />
      
      <section id="archives" className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Extended Ecosystem</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-white border border-slate-200 rounded-xl overflow-hidden">
          {[
            { name: "Nemo", desc: "AI Context", path: "/nemo" },
            { name: "Spectre", desc: "Identity", path: "/spectre" },
            { name: "Prism", desc: "Analytics", path: "/prism" },
            { name: "Aegis", desc: "Security", path: "/aegis" },
            { name: "VaultZero", desc: "Encryption", path: "/vaultzero" }
          ].map((a, i) => (
            <a key={i} href={a.path} className="p-8 text-center hover:bg-blue-50 transition-colors border-r border-slate-200 last:border-r-0">
              <h4 className="text-slate-900 font-bold text-sm mb-1 uppercase tracking-wide">{a.name}</h4>
              <p className="text-xs text-slate-600">{a.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <DeploymentCTA />
      <Footer />
    </div>
  );
}
