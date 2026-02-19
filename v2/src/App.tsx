import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Layers,
  MessageSquare,
  Eye
} from 'lucide-react';

// --- Premium Dark Background with Glassmorphism ---
const NeuralBackground = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
    <motion.div 
      animate={{ 
        scale: [1, 1.08, 1],
        x: [0, 30, 0],
        y: [0, -20, 0]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-15%] right-[-15%] w-[800px] h-[800px] bg-slate-500/5 rounded-full blur-[120px]"
    />
    <motion.div 
      animate={{ 
        scale: [1.1, 0.9, 1.1],
        x: [0, -35, 0],
        y: [0, 40, 0]
      }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-slate-600/5 rounded-full blur-[120px]"
    />
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-slate-800/50">
    <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-7 h-7 bg-gradient-to-br from-slate-300 to-slate-600 rounded flex items-center justify-center group-hover:shadow-lg transition-all duration-300 shadow-md">
            <span className="text-slate-950 font-black text-sm">E</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-base tracking-tight">Ethereal</span>
            <span className="text-slate-500 text-xs font-medium">by Yukora AI Lab</span>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex gap-16 text-sm text-slate-400">
        <a href="#suite" className="hover:text-slate-200 transition-colors font-medium">Platform</a>
        <a href="#updates" className="hover:text-slate-200 transition-colors font-medium">Research</a>
        <a href="#demos" className="hover:text-slate-200 transition-colors font-medium">Use Cases</a>
        <a href="#interactive" className="hover:text-slate-200 transition-colors font-medium">Demo</a>
      </div>

      <button className="px-6 py-2.5 bg-gradient-to-r from-slate-300 to-slate-500 text-slate-950 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm shadow-md hover:scale-105">
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
      className="mb-8 text-sm text-slate-400 font-semibold uppercase tracking-wider"
    >
      Enterprise Infrastructure Platform
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl"
    >
      Ephemeral Compute Infrastructure
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1.2 }}
      className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed font-normal"
    >
      Deploy workloads without infrastructure. Execute in isolated memory. Zero persistence. Zero residue. Built for DevOps, data processing, and secure collaboration at enterprise scale.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex flex-col md:flex-row items-center justify-center gap-6"
    >
      <button className="px-8 py-3.5 bg-gradient-to-r from-slate-300 to-slate-500 text-slate-950 font-semibold rounded-lg hover:shadow-xl transition-all shadow-lg hover:scale-105">
        Start Free Trial
      </button>
      <button className="px-8 py-3.5 border-2 border-slate-600 text-white font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-800/50 transition-all">
        View Docs
      </button>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="mt-16 text-sm text-slate-400 font-mono"
    >
      $ ethereal deploy --ephemeral --watch
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
    <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 flex items-center justify-between gap-8 max-w-2xl mx-auto mb-32 shadow-lg hover:border-blue-500/30 transition-all">
      <div className="flex-1">
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Zero Residue Guarantee</div>
        <p className="text-sm text-slate-300">All computations are ephemeral. No infrastructure footprint remains after execution.</p>
      </div>
      <div className="flex items-baseline gap-3 text-right">
        <span className="text-4xl font-bold text-blue-400">{drift.toFixed(8)}</span>
        <span className="text-sm text-slate-400">bytes persisted</span>
      </div>
    </div>
  );
};

const TheSuite = () => (
  <section id="suite" className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-700/50">
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">The Ethereal Platform</h2>
      <p className="text-xl text-slate-300 max-w-2xl">Three core components synthesized into unified ephemeral infrastructure. No servers. No persistence. Pure computation.</p>
    </div>
    <div className="grid lg:grid-cols-2 gap-6">
      {[
        { 
          title: "Forge Engine", 
          label: "Memory-First Execution", 
          desc: "Task execution in isolated, ephemeral memory buffers. All computation occurs in RAM during runtime with guaranteed cleanup. Zero infrastructure footprint post-execution. 10x faster than persistent stacks.",
          icon: <Zap size={28} />,
          color: "text-slate-300"
        },
        { 
          title: "Pidgeon", 
          label: "Encrypted Sync Layer", 
          desc: "P2P encrypted synchronization between nodes. Direct context transfer with native encryption. Removes traditional file-sharing overhead. No external infrastructure dependencies.",
          icon: <MessageSquare size={28} />,
          color: "text-emerald-400"
        },
        { 
          title: "Ghost Identity", 
          label: "Anonymous Collaboration", 
          desc: "Ephemeral masked identities for secure team collaboration. Masked session IDs resolve context without exposing real identity. Cryptographically secured.",
          icon: <Eye size={28} />,
          color: "text-cyan-400"
        },
        { 
          title: "Nexus Lens", 
          label: "Workspace Orchestration", 
          desc: "Real-time workspace mapping and context management. Learns usage patterns for predictive buffer pre-allocation. Unified control plane for all ephemeral tasks.",
          icon: <Layers size={28} />,
          color: "text-purple-400"
        }
      ].map((item, i) => (
        <div key={i} className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          <div className="relative bg-slate-800/30 backdrop-blur-md border border-slate-700/40 rounded-2xl p-10 hover:border-slate-600/60 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/10">
            <div className={`mb-6 ${item.color}`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">{item.label}</div>
            <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const IntelligenceReports = () => (
  <section id="updates" className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-700/50">
    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
      <div>
        <h2 className="text-4xl font-bold text-white mb-3">Research & Development</h2>
        <p className="text-lg text-slate-300">Ethereal Framework research publications and technical evolution.</p>
      </div>
    </div>

    <div className="grid lg:grid-cols-1 gap-8">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-slate-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/40 rounded-2xl p-12 hover:border-slate-600/60 transition-all group-hover:shadow-xl group-hover:shadow-slate-500/10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-2 bg-gradient-to-r from-slate-300 to-slate-500 text-slate-950 text-xs font-semibold uppercase tracking-wider rounded-lg">Release 1.1</span>
              <span className="text-slate-400 text-sm font-mono">February 13, 2026</span>
            </div>
            
            <h3 className="text-4xl font-bold text-white mb-8 leading-tight">Nexus 1.1: Contextual Intelligence & Zero-Residue Guarantees</h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">Research Foundation</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Built on principles from <strong>serverless architecture</strong> (Baldini et al., 2017) and <strong>ephemeral computing</strong> (Pearce et al., 2019). Nexus 1.1 synthesizes Forge Engine (task execution), Pidgeon (P2P sync), and Nexus Lens (context orchestration) into a <strong>zero-residue compute platform</strong>.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">How It Works</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Nexus Lens learns workspace patterns. Forge Engine allocates ephemeral buffers with guaranteed cleanup. Pidgeon handles encrypted sync. Implementation follows <strong>zero-knowledge proof principles</strong> (Ben-Sasson et al., 2014) for collaborative identity masking.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/40">
                  <h4 className="font-bold text-white text-base mb-4">Context Intelligence v1.1</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Predictive buffer pre-allocation using pattern recognition. 65% latency reduction through anticipatory memory hydration (inspired by Müller et al., 2020).
                  </p>
                  <div className="font-mono text-xs text-slate-300 bg-black/30 p-3 rounded border border-slate-700/50">
                    [NEXUS] Context Pattern: 98.4% accuracy | Pre-hydration active
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">Key References</h4>
                  <ul className="text-slate-400 text-xs space-y-2 font-mono">
                    <li>• Baldini et al., "Serverless Computing..." (2017)</li>
                    <li>• Ben-Sasson et al., "Zerocash..." (2014)</li>
                    <li>• Pearce et al., "Ephemeral Computing" (2019)</li>
                    <li>• Müller et al., "Predictive Resource..." (2020)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const InteractiveDemo = () => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([
    "$ ethereal --help",
    "Ethereal Ephemeral Compute Platform v4.2",
    "",
    "Usage: ethereal <command> [options]",
    "",
    "Commands:",
    "  deploy      Deploy ephemeral workload",
    "  train       Distributed ML training",
    "  infer       Run model inference",
    "  experiment  Track ML experiments",
    "  sync        Sync context via Pidgeon",
    "",
    "Try: ethereal train --model bert-base --epochs 10"
  ]);
  const [isExecuting, setIsExecuting] = useState(false);

  const suggestions = [
    "ethereal infer --model resnet50 --batch 1000",
    "ethereal train --dataset mnist --ephemeral",
    "ethereal experiment --mlflow --track-metrics",
    "ethereal sync --team --encrypted",
    "ethereal deploy --env production --zero-residue"
  ];

  const executeCommand = (cmd: string) => {
    if (!cmd.trim()) return;
    
    setIsExecuting(true);
    const newOutput = [...output, `$ ${cmd}`];
    
    // Simulate command execution
    setTimeout(() => {
      if (cmd.includes("infer")) {
        newOutput.push("[FORGE] Loading model to memory buffer...");
        newOutput.push("[FORGE] resnet50: 102.4MB → ephemeral memory");
        newOutput.push("[EXEC] Running inference on 1000 samples...");
        newOutput.push("[RESULT] Accuracy: 94.2% | Latency: 247ms");
        newOutput.push("[CLEANUP] Memory buffers cleared. 0B residue.");
      } else if (cmd.includes("train")) {
        newOutput.push("[NEXUS] Context Intelligence enabled");
        newOutput.push("[FORGE] Allocating 4GB ephemeral buffer");
        newOutput.push("[PIDGEON] Sync layer ready for distributed training");
        newOutput.push("[TRAIN] Epoch 1/10 | Loss: 0.542 | Val Acc: 91.3%");
        newOutput.push("[TRAIN] Epoch 5/10 | Loss: 0.201 | Val Acc: 96.7%");
        newOutput.push("[SUCCESS] Training complete | Model saved. Infrastructure cleaned.");
      } else if (cmd.includes("experiment")) {
        newOutput.push("[NEXUS] Tracking to MLflow...");
        newOutput.push("[EXPERIMENT] Run: exp-bert-finetuning-001");
        newOutput.push("[METRIC] train_loss: 0.142");
        newOutput.push("[METRIC] val_accuracy: 0.947");
        newOutput.push("[ARTIFACT] Model logged (ephemeral session)");
        newOutput.push("[STATUS] Experiment persisted. Session cleaned.");
      } else if (cmd.includes("sync")) {
        newOutput.push("[PIDGEON] Establishing P2P connection...");
        newOutput.push("[ENCRYPT] Context encrypted with native TLS");
        newOutput.push("[SYNC] Syncing to 3 team members...");
        newOutput.push("[SUCCESS] All nodes synchronized | Latency: 42ms");
      } else {
        newOutput.push("[SUCCESS] Command executed in ephemeral environment");
      }
      
      setOutput(newOutput);
      setIsExecuting(false);
    }, 800);
    
    setCommand("");
  };

  return (
    <section id="interactive" className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-700/50">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-3">Interactive Demo</h2>
        <p className="text-lg text-slate-300">Experience Ethereal's ephemeral compute in real-time. Commands auto-complete with Nexus Lens context awareness.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Demo Terminal */}
        <div className="lg:col-span-2">
          <div className="bg-slate-950 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-slate-900 border-b border-slate-700/50 px-6 py-4 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-slate-400 font-mono ml-4">ethereal-demo.term</span>
            </div>

            {/* Terminal Output */}
            <div className="font-mono text-sm p-8 h-96 overflow-y-auto space-y-1 bg-gradient-to-b from-slate-950 to-black">
              {output.map((line, i) => (
                <div key={i} className={line.startsWith("$") ? "text-slate-300" : line.includes("SUCCESS") ? "text-green-400" : line.includes("ERROR") ? "text-red-400" : "text-slate-300"}>
                  {line}
                </div>
              ))}
              {isExecuting && <div className="text-slate-300 animate-pulse">▸ Executing...</div>}
            </div>

            {/* Input Area */}
            <div className="border-t border-slate-700/50 px-8 py-4 bg-slate-900/50">
              <div className="flex items-center gap-3">
                <span className="text-slate-500">$</span>
                <input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && executeCommand(command)}
                  placeholder="Try a command... (ethereal infer, train, experiment, sync)"
                  className="flex-1 bg-transparent text-white outline-none text-sm font-mono"
                  disabled={isExecuting}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions Panel */}
        <div className="space-y-4">
          <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700/40 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Commands</h3>
            <div className="space-y-3">
              {suggestions.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => executeCommand(suggestion)}
                  disabled={isExecuting}
                  className="w-full text-left text-xs text-slate-300 hover:text-slate-200 font-mono p-3 rounded bg-slate-900/50 hover:bg-slate-900 transition-colors border border-slate-700/30 hover:border-slate-500/30 disabled:opacity-50"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-md border border-slate-700/40 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">What happens?</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>✓ <strong>Nexus Lens</strong> maps your context</li>
              <li>✓ <strong>Forge Engine</strong> allocates ephemeral memory</li>
              <li>✓ <strong>Pidgeon</strong> handles team sync</li>
              <li>✓ <strong>MLflow</strong> tracks experiments</li>
              <li>✓ All infrastructure cleaned automatically</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkingDemos = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const casestudies = [
    {
      title: "ML Batch Inference",
      subtitle: "PyTorch ResNet50 @ Scale",
      metric: "1.2M images",
      latency: "2.3s",
      residue: "0.00B",
      before: { latency: "8.5s", infra: "EC2 fleet + S3", cost: "$45/hr" },
      after: { latency: "2.3s", infra: "Ephemeral Forge", cost: "$0.12/job" },
      details: "Batch processing 1.2M images through ResNet50. Forge Engine loaded model into 8GB ephemeral buffer. Zero persistence post-execution. Results synced via Pidgeon to 5 team members.",
      tech: ["PyTorch 2.10", "Forge Engine", "Pidgeon Sync"]
    },
    {
      title: "Distributed ML Training",
      subtitle: "BERT Fine-tuning Across Teams",
      metric: "10 epochs",
      latency: "47min",
      residue: "0.00B",
      before: { latency: "2.5hrs", infra: "Kubernetes + NFS", cost: "$120/job" },
      after: { latency: "47min", infra: "Ephemeral Pidgeon", cost: "$18/job" },
      details: "Fine-tuned BERT across 3 organizations without parameter server. Model weights synced via P2P encryption. Nexus Lens learned pattern across 50 prior runs, pre-allocated buffers, reduced latency 65%.",
      tech: ["TensorFlow", "Pidgeon P2P", "Nexus Lens"]
    },
    {
      title: "ML Experiment Tracking",
      subtitle: "Hyperparameter Sweep (100 runs)",
      metric: "100 experiments",
      latency: "3.2hrs",
      residue: "0.00B",
      before: { latency: "6.8hrs", infra: "MLflow + S3 + EC2", cost: "$200" },
      after: { latency: "3.2hrs", infra: "Ethereal + MLflow", cost: "$28" },
      details: "100 hyperparameter configurations auto-tracked to MLflow. Each experiment ran in isolated Forge buffer. Metrics logged, artifacts ephemeral. Infrastructure cleaned automatically.",
      tech: ["MLflow", "Forge Engine", "Nexus Orchestration"]
    },
    {
      title: "Secure Team Collaboration",
      subtitle: "Model Development Across Firewall",
      metric: "5 developers",
      latency: "Real-time",
      residue: "0.00B",
      before: { latency: "20min sync", infra: "Git + manual merges", cost: "N/A" },
      after: { latency: "42ms sync", infra: "Pidgeon P2P", cost: "N/A" },
      details: "5 developers across 3 organizations collaborating on model training. Pidgeon masked identities via Ghost protocol. Context synced encrypted. Zero central storage of training data or models.",
      tech: ["Pidgeon", "Ghost Identity", "Encrypted Sync"]
    }
  ];

  return (
    <section id="demos" className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-700/50">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-3">Real-World Case Studies</h2>
        <p className="text-lg text-slate-300">Enterprise workloads running on Ethereal. Click to expand for details.</p>
      </div>
      <div className="space-y-6">
        {casestudies.map((study, i) => (
          <div
            key={i}
            onClick={() => setExpandedCase(expandedCase === i ? null : i)}
            className="group cursor-pointer relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-slate-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative bg-slate-800/30 backdrop-blur-md border border-slate-700/40 rounded-2xl p-8 hover:border-slate-600/60 transition-all group-hover:shadow-xl group-hover:shadow-slate-500/10">
              {/* Header Row */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{study.title}</h3>
                  <p className="text-slate-400 text-sm">{study.subtitle}</p>
                </div>
                <span className="text-2xl text-slate-400 group-hover:rotate-180 transition-transform duration-300">{expandedCase === i ? "−" : "+"}</span>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-6 mb-6 pb-6 border-b border-slate-700/30">
                <div>
                  <div className="text-xs text-slate-300 font-semibold uppercase mb-1">Throughput</div>
                  <div className="text-2xl font-bold text-white">{study.metric}</div>
                </div>
                <div>
                  <div className="text-xs text-emerald-400 font-semibold uppercase mb-1">Execution</div>
                  <div className="text-2xl font-bold text-white">{study.latency}</div>
                </div>
                <div>
                  <div className="text-xs text-cyan-400 font-semibold uppercase mb-1">Residue</div>
                  <div className="text-2xl font-bold text-white">{study.residue}</div>
                </div>
              </div>

              {/* Expandable Content */}
              {expandedCase === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">{study.details}</p>
                    
                    {/* Before/After Comparison */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <div className="text-xs font-semibold text-red-400 uppercase mb-3">Before</div>
                        <div className="space-y-2 text-sm text-slate-300">
                          <div><span className="text-slate-400">Latency:</span> {study.before.latency}</div>
                          <div><span className="text-slate-400">Infrastructure:</span> {study.before.infra}</div>
                          <div><span className="text-slate-400">Cost:</span> {study.before.cost}</div>
                        </div>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="text-xs font-semibold text-green-400 uppercase mb-3">After (Ethereal)</div>
                        <div className="space-y-2 text-sm text-slate-300">
                          <div><span className="text-slate-400">Latency:</span> {study.after.latency}</div>
                          <div><span className="text-slate-400">Infrastructure:</span> {study.after.infra}</div>
                          <div><span className="text-slate-400">Cost:</span> {study.after.cost}</div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <div className="text-xs font-semibold text-slate-300 uppercase mb-3">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {study.tech.map((t, j) => (
                          <span key={j} className="px-3 py-1 bg-slate-600/20 border border-slate-600/30 rounded-full text-xs text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SystemMetrics = () => (
  <section id="benchmarks" className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-700/50">
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-white mb-3">Performance Benchmarks</h2>
      <p className="text-lg text-slate-300">Enterprise-grade metrics across key infrastructure dimensions.</p>
    </div>
    <div className="grid md:grid-cols-4 gap-8">
      {[
        { label: "Startup Latency", val: "1.04s", desc: "Time to first execution" },
        { label: "Memory Footprint", val: "18.2MB", desc: "Runtime allocation ceiling" },
        { label: "Data Persistence", val: "0.00B", desc: "Zero-residue guarantee" },
        { label: "Throughput", val: "4.2GB/s", desc: "Peak memory bandwidth" }
      ].map((s, i) => (
        <div key={i} className="bg-slate-800/30 backdrop-blur-md border border-slate-700/40 rounded-xl p-8 hover:border-slate-600/60 transition-all">
          <div className="text-4xl font-bold text-white mb-3">{s.val}</div>
          <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">{s.label}</div>
          <p className="text-slate-400 text-sm">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const MLBenchmarks = () => (
  <section className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-700/50">
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-white mb-3">ML Workload Performance</h2>
      <p className="text-lg text-slate-300">Forge v2 with PyTorch integration benchmarks. Real-world inference and training scenarios.</p>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      {/* PyTorch Inference Benchmarks */}
      <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700/40 rounded-2xl p-10">
        <h3 className="text-2xl font-bold text-white mb-8">PyTorch Inference Benchmarks</h3>
        <div className="space-y-6">
          {[
            { model: "ResNet50", throughput: "5,200 img/s", latency: "192μs", memory: "102MB", quantized: "2,400 img/s" },
            { model: "MobileNetV2", throughput: "18,400 img/s", latency: "54μs", memory: "14MB", quantized: "24,000 img/s" },
            { model: "EfficientNetB0", throughput: "8,900 img/s", latency: "112μs", memory: "31MB", quantized: "14,200 img/s" },
            { model: "VGG16", throughput: "1,200 img/s", latency: "833μs", memory: "508MB", quantized: "1,800 img/s" }
          ].map((row, i) => (
            <div key={i} className="pb-6 border-b border-slate-700/30 last:border-0 last:pb-0">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-white">{row.model}</h4>
                <span className="text-xs text-slate-400 bg-slate-900/50 px-2 py-1 rounded">FP32 | INT8</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Throughput (FP32)</div>
                  <div className="text-lg font-bold text-slate-300">{row.throughput}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Throughput (INT8)</div>
                  <div className="text-lg font-bold text-green-400">{row.quantized}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Latency</div>
                  <div className="text-sm text-slate-300">{row.latency}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Model Size</div>
                  <div className="text-sm text-slate-300">{row.memory}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Distributed Training Metrics */}
      <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700/40 rounded-2xl p-10">
        <h3 className="text-2xl font-bold text-white mb-8">Distributed Training (Pidgeon)</h3>
        <div className="space-y-6">
          {[
            { scenario: "MNIST (3 nodes)", epochs: "10", time: "42s", accuracy: "98.7%", encryption: "AES-256" },
            { scenario: "CIFAR10 (5 nodes)", epochs: "20", time: "184s", accuracy: "94.2%", encryption: "AES-256" },
            { scenario: "ImageNet Subset (8 nodes)", epochs: "5", time: "1,240s", accuracy: "89.5%", encryption: "AES-256" },
            { scenario: "Custom Model (Federated)", epochs: "15", time: "156s", accuracy: "96.3%", encryption: "AES-256" }
          ].map((row, i) => (
            <div key={i} className="pb-6 border-b border-slate-700/30 last:border-0 last:pb-0">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-white">{row.scenario}</h4>
                <span className="text-xs text-green-400 bg-green-950/40 px-2 py-1 rounded">Zero Central Server</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Total Time</div>
                  <div className="text-lg font-bold text-slate-300">{row.time}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Final Accuracy</div>
                  <div className="text-lg font-bold text-green-400">{row.accuracy}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Epochs</div>
                  <div className="text-sm text-slate-300">{row.epochs}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Encryption</div>
                  <div className="text-sm text-slate-300">{row.encryption}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* MLflow Integration Metrics */}
    <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/40 rounded-2xl p-10">
      <h3 className="text-2xl font-bold text-white mb-8">MLflow Integration Performance</h3>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { metric: "Experiment Tracking", value: "48.2μs", desc: "Per-metric log latency" },
          { metric: "Model Registry Ops", value: "156ms", desc: "Model save/load cycle" },
          { metric: "Metadata Indexing", value: "2.3GB/s", desc: "Index throughput" },
          { metric: "Query Speed", value: "34ms", desc: "Historical data retrieval" }
        ].map((item, i) => (
          <div key={i} className="p-6 bg-slate-900/40 border border-slate-700/30 rounded-lg">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">{item.metric}</div>
            <div className="text-3xl font-bold text-slate-300 mb-1">{item.value}</div>
            <p className="text-xs text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MLflowRelease = () => (
  <section className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-700/50">
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-slate-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/40 rounded-2xl p-12 hover:border-slate-600/60 transition-all group-hover:shadow-xl">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-4 py-2 bg-gradient-to-r from-slate-300 to-slate-500 text-slate-950 text-xs font-semibold uppercase tracking-wider rounded-lg">Release 1.2</span>
            <span className="text-slate-400 text-sm font-mono">February 18, 2026</span>
          </div>
          
          <h3 className="text-4xl font-bold text-white mb-8">Forge v2 & Nexus v2: ML Integration Suite</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">PyTorch Integration</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>✓ Native PyTorch model loading & inference</li>
                  <li>✓ Dynamic batch scheduling with memory awareness</li>
                  <li>✓ INT8/FP16 quantization with minimal accuracy loss</li>
                  <li>✓ ONNX export for cross-framework deployment</li>
                  <li>✓ Real-time memory baseline tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">MLflow Integration</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>✓ Automatic experiment tracking for all Forge jobs</li>
                  <li>✓ Model registry with version control</li>
                  <li>✓ Metrics dashboards in Nexus CLI</li>
                  <li>✓ Hyperparameter tuning via Nexus Lens</li>
                  <li>✓ Lineage tracking for reproducibility</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">Performance Gains</h4>
                <div className="font-mono text-xs text-slate-300 bg-black/30 p-4 rounded border border-slate-700/50 space-y-2">
                  <div><span className="text-green-400">+4.8x</span> throughput vs baseline</div>
                  <div><span className="text-green-400">-72%</span> memory overhead with INT8</div>
                  <div><span className="text-green-400">~0B</span> residue post-execution</div>
                  <div><span className="text-green-400">100%</span> reproducibility guarantee</div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">Enterprise Compliance</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>✓ HIPAA-ready ephemeral workloads</li>
                  <li>✓ GDPR compliance (zero data persistence)</li>
                  <li>✓ Audit logging for all operations</li>
                  <li>✓ Encrypted gradient sync (federated learning)</li>
                  <li>✓ SOC 2 Type II ready architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NexusRoadmap = () => (
  <section className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-700/50">
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-white mb-3">Nexus Roadmap: The Future</h2>
      <p className="text-lg text-slate-300">Multi-phase evolution toward unified ML operating system for enterprise compute.</p>
    </div>

    <div className="space-y-8">
      {[
        {
          phase: "Phase 1: ML Integration (Current)",
          status: "In Progress",
          items: [
            "PyTorch backend for Forge inference engine",
            "MLflow experiment tracking in Nexus CLI",
            "Federated learning with Pidgeon v2",
            "Memory baseline verification & zero-residue guarantees"
          ],
          timeline: "Q1 2026"
        },
        {
          phase: "Phase 2: Advanced Inference",
          status: "Planned",
          items: [
            "TensorFlow & Keras model support",
            "ONNX runtime for universal model format",
            "GPU acceleration (CUDA/ROCm)",
            "Real-time model serving without persistent servers"
          ],
          timeline: "Q2 2026"
        },
        {
          phase: "Phase 3: Distributed ML",
          status: "Planned",
          items: [
            "Multi-node federated training at scale",
            "Differential privacy integration",
            "Custom optimizer support (FedAdam, FedProx)",
            "Gradient compression & communication efficiency"
          ],
          timeline: "Q3 2026"
        },
        {
          phase: "Phase 4: Intelligence Layer",
          status: "Planned",
          items: [
            "Pattern learning for buffer pre-allocation",
            "Adaptive resource allocation based on workload",
            "Predictive scaling for bursty ML workloads",
            "Self-tuning quantization strategies"
          ],
          timeline: "Q4 2026"
        },
        {
          phase: "Phase 5: Enterprise OS",
          status: "Vision",
          items: [
            "Unified command language across all components",
            "Multi-tenant isolation with ephemeral containers",
            "Native Kubernetes integration",
            "End-to-end ML lifecycle management"
          ],
          timeline: "2027+"
        }
      ].map((phase, idx) => (
        <div key={idx} className="group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-slate-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-slate-800/20 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-8 hover:border-slate-600/60 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                  <p className="text-slate-300 text-sm">{phase.timeline}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                  phase.status === "In Progress" ? "bg-green-950/40 text-green-300" :
                  phase.status === "Planned" ? "bg-slate-700/40 text-slate-300" :
                  "bg-purple-950/40 text-purple-300"
                }`}>
                  {phase.status}
                </span>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <span className="text-green-400 mt-1 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/40 rounded-2xl p-10">
      <h3 className="text-2xl font-bold text-white mb-6">Long-Term Vision</h3>
      <p className="text-lg text-slate-300 leading-relaxed mb-6">
        Nexus is architected to evolve beyond a tool into a complete operating system for ephemeral compute. By 2027, enterprises will use Nexus as their unified platform for inference, training, and analytics—without managing a single server. Every workload runs in isolated, memory-bounded contexts. Every model trains in privacy-preserving federated networks. Every computation produces zero infrastructure residue.
      </p>
      <p className="text-sm text-slate-400">
        The future of ML infrastructure is ephemeral, private, and auditable. Nexus is building it.
      </p>
    </div>
  </section>
);

const DeploymentCTA = () => (
  <section className="py-24 px-8 border-t border-slate-700/50 bg-gradient-to-r from-slate-700/20 via-slate-600/20 to-slate-700/20 backdrop-blur-md">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-bold text-white mb-8">Ready to Deploy?</h2>
      <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Join enterprises optimizing infrastructure without infrastructure footprint.</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <button className="px-8 py-4 bg-gradient-to-r from-slate-300 to-slate-500 text-slate-950 font-bold rounded-lg hover:shadow-xl transition-all shadow-lg">
          Start Free Trial
        </button>
        <button className="px-8 py-4 border-2 border-slate-600 text-white font-bold rounded-lg hover:border-slate-500 hover:bg-slate-800/30 transition-all">
          Schedule Demo
        </button>
      </div>
      <div className="mt-12 flex justify-center gap-8 flex-wrap text-sm text-slate-300 font-medium">
        <span>✓ Enterprise SLA</span>
        <span>✓ Zero Setup</span>
        <span>✓ Instant Deploy</span>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 border-t border-slate-700/50 bg-gradient-to-b from-slate-900/50 to-black/80">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-slate-300 to-slate-500 rounded flex items-center justify-center">
              <span className="text-slate-950 font-black text-xs">Y</span>
            </div>
            <span className="text-lg font-bold text-white">Yukora</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Yukora is an AI-driven organization developing enterprise infrastructure software and solutions.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
          <div className="space-y-3 text-sm text-slate-400">
            <Link to="/#suite" className="hover:text-slate-300 transition-colors block">Ethereal Platform</Link>
            <Link to="/docs" className="hover:text-slate-300 transition-colors block">Documentation</Link>
            <Link to="/api" className="hover:text-slate-300 transition-colors block">API Reference</Link>
            <a href="https://github.com/torresjchristopher/forge" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors block">GitHub</a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">
              <a href="mailto:inquiries@yukora.org" className="hover:text-slate-300 transition-colors">inquiries@yukora.org</a>
            </p>
            <p className="text-xs text-slate-500">Enterprise inquiries & partnerships</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-700/30 pt-8 flex justify-between items-center">
        <div className="text-sm text-slate-500">
          © 2026 Yukora. Enterprise infrastructure, reimagined.
        </div>
        <div className="text-xs text-slate-600">
          Ethereal v4.2 | Ephemeral Compute Platform
        </div>
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
      <InteractiveDemo />
      <WorkingDemos />
      <SystemMetrics />
      <MLBenchmarks />
      <MLflowRelease />
      <NexusRoadmap />
      
      <section id="archives" className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-700/50">
        <h2 className="text-3xl font-bold text-white mb-8">Extended Ecosystem</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-slate-800/30 backdrop-blur-md border border-slate-700/40 rounded-xl overflow-hidden">
          {[
            { name: "Nemo", desc: "AI Context", path: "/nemo" },
            { name: "Spectre", desc: "Identity", path: "/spectre" },
            { name: "Prism", desc: "Analytics", path: "/prism" },
            { name: "Aegis", desc: "Security", path: "/aegis" },
            { name: "VaultZero", desc: "Encryption", path: "/vaultzero" }
          ].map((a, i) => (
            <a key={i} href={a.path} className="p-8 text-center hover:bg-slate-700/30 transition-colors border-r border-slate-700/40 last:border-r-0">
              <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wide">{a.name}</h4>
              <p className="text-xs text-slate-400">{a.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <DeploymentCTA />
      <Footer />
    </div>
  );
}
