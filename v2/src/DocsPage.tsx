import { motion } from 'framer-motion';
import { Zap, Layers, MessageSquare, Eye, ArrowRight } from 'lucide-react';

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
      className="absolute top-[-15%] right-[-15%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]"
    />
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-900/40 backdrop-blur-xl border-b border-slate-700/30">
    <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
      <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.location.href = '/'}>
        <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-indigo-600 rounded flex items-center justify-center group-hover:shadow-lg transition-all">
          <span className="text-white font-black text-sm">E</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white font-bold text-base">Ethereal</span>
          <span className="text-slate-400 text-xs">by Yukora AI Lab</span>
        </div>
      </div>
      <button 
        onClick={() => window.location.href = '/'}
        className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all font-medium text-sm"
      >
        Back to Home
      </button>
    </div>
  </nav>
);

export default function DocsPage() {
  return (
    <div className="min-h-screen relative selection:bg-blue-600 selection:text-white">
      <NeuralBackground />
      <Navbar />
      
      <div className="pt-32 pb-20 px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">Documentation</h1>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Complete guide to deploying and managing Ethereal ephemeral compute infrastructure.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Getting Started */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Getting Started</h2>
            </div>
            <div className="space-y-4 text-slate-300">
              <p>Deploy Ethereal in 3 minutes:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Install: <code className="bg-slate-900/50 px-2 py-1 rounded text-blue-300">pip install ethereal-cli</code></li>
                <li>Configure: Set up your ephemeral buffer pool size</li>
                <li>Deploy: <code className="bg-slate-900/50 px-2 py-1 rounded text-blue-300">ethereal deploy --model resnet50</code></li>
              </ol>
              <p className="pt-4 text-sm">
                Full installation guide available on{' '}
                <a href="https://github.com/torresjchristopher/forge" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  GitHub →
                </a>
              </p>
            </div>
          </motion.section>

          {/* Core Concepts */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-6 h-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Core Concepts</h2>
            </div>
            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-white font-semibold mb-2">Ephemeral Compute</h3>
                <p className="text-sm">Models load into ephemeral RAM buffers, execute inference, then completely disappear. Zero persistence, zero residue.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Zero-Residue Guarantee</h3>
                <p className="text-sm">Before/After memory baselines verify cleanup (&lt;10MB tolerance). Every session is auditable and reproducible.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Federated Learning</h3>
                <p className="text-sm">Train distributed models without central parameter servers. Gradients encrypted end-to-end (AES-256).</p>
              </div>
            </div>
          </motion.section>

          {/* Architecture */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Architecture</h2>
            </div>
            <div className="space-y-4 text-slate-300 text-sm">
              <p><strong className="text-white">Forge Engine:</strong> PyTorch/TensorFlow inference with quantization (INT8, FP16)</p>
              <p><strong className="text-white">Pidgeon Sync:</strong> P2P gradient synchronization with encryption</p>
              <p><strong className="text-white">Nexus OS:</strong> Unified CLI for inference, training, experiments</p>
              <p className="pt-4">
                All components are designed to work within ephemeral memory buffers with automatic cleanup and zero data persistence.
              </p>
            </div>
          </motion.section>

          {/* API Methods */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Common Tasks</h2>
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">$ nexus infer --model resnet50 --data ./images/</p>
                <p className="text-xs">Run batch inference with ephemeral cleanup verification</p>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">$ nexus train --strategy federated --nodes 3</p>
                <p className="text-xs">Distributed training without central parameter server</p>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">$ nexus experiment --track-mlflow</p>
                <p className="text-xs">Auto-log experiments to MLflow with zero persistence</p>
              </div>
            </div>
          </motion.section>

          {/* Enterprise Features */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Enterprise Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-2">✓ Security</h3>
                <p className="text-sm text-slate-300">GDPR/HIPAA compliance through ephemeral-only compute</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">✓ Privacy</h3>
                <p className="text-sm text-slate-300">No central servers, encrypted P2P gradients</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">✓ Scalability</h3>
                <p className="text-sm text-slate-300">Unlimited nodes, 5000+ samples/sec throughput</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">✓ Reliability</h3>
                <p className="text-sm text-slate-300">Zero-residue verification on every session</p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Deploy?</h3>
            <p className="text-slate-300 mb-6">
              Get started with Ethereal ephemeral compute for your enterprise workloads.
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all font-medium flex items-center gap-2"
              >
                Back to Home <ArrowRight className="w-4 h-4" />
              </button>
              <a 
                href="mailto:inquiries@yukora.org"
                className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-medium"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
