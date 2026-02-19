import { motion } from 'framer-motion';
import { Code2, Package, Zap, ArrowRight } from 'lucide-react';

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

export default function APIPage() {
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
          <h1 className="text-5xl font-bold text-white mb-6">API Reference</h1>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Complete API documentation for Ethereal components: Forge, Pidgeon, and Nexus.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Forge API */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Forge Engine (v2.0)</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">PyTorchInference(quantization?, device?)</p>
                <p className="text-sm text-slate-300">Initialize inference engine. Quantization: "int8", "fp16", or None. Device: "cpu" or "cuda".</p>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">load_model(model_name, pretrained=True)</p>
                <p className="text-sm text-slate-300 mb-2">Load model from torchvision. Available: resnet50, resnet101, vgg16, mobilenet_v2, efficientnet_b0.</p>
                <p className="text-xs text-slate-400">Returns: Loaded PyTorch model in ephemeral buffer</p>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">infer(inputs, batch_size=32, return_probabilities=True)</p>
                <p className="text-sm text-slate-300 mb-2">Run batch inference with throughput tracking.</p>
                <p className="text-xs text-slate-400">Returns: {'{predictions, probabilities, logits, throughput_samples_per_sec, ...'}</p>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">cleanup_and_verify()</p>
                <p className="text-sm text-slate-300 mb-2">Force cleanup and verify zero residue (&lt;10MB).</p>
                <p className="text-xs text-slate-400">Returns: {'{residue_mb, zero_residue_achieved, baseline_mb, after_mb, ...'}</p>
              </div>
            </div>
          </motion.section>

          {/* Pidgeon API */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Package className="w-6 h-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Pidgeon Framework (v2.0)</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">FederatedLearner(model_path, learning_rate, aggregation_method)</p>
                <p className="text-sm text-slate-300 mb-2">Base class for distributed training on edge nodes.</p>
                <p className="text-xs text-slate-400">Aggregation: "fedavg", "fedprox", "fedadam"</p>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">train_epoch(dataset, epochs=1)</p>
                <p className="text-sm text-slate-300 mb-2">Local training on node's private dataset (never transmitted).</p>
                <p className="text-xs text-slate-400">Returns: Average loss</p>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">GradientSync(local_node_id, peer_nodes, encryption, compression)</p>
                <p className="text-sm text-slate-300 mb-2">P2P gradient synchronization with AES-256 encryption and sparsification.</p>
                <p className="text-xs text-slate-400">Encryption: "aes-256" (default), Compression: "sparsity-0.9" (90% reduction)</p>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">aggregate_gradients(local_gradients, timeout_sec=30)</p>
                <p className="text-sm text-slate-300 mb-2">Aggregate encrypted gradients from all peer nodes without central server.</p>
                <p className="text-xs text-slate-400">Returns: Aggregated gradient update</p>
              </div>
            </div>
          </motion.section>

          {/* Nexus API */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Nexus CLI (v2.0)</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">nexus infer [options]</p>
                <div className="text-sm text-slate-300 space-y-1">
                  <p>Options:</p>
                  <p className="ml-4">--model: Model name (resnet50, vgg16, etc.)</p>
                  <p className="ml-4">--input: Input data path</p>
                  <p className="ml-4">--quantize: int8 or fp16</p>
                  <p className="ml-4">--batch-size: Batch size (default: 128)</p>
                </div>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">nexus train [options]</p>
                <div className="text-sm text-slate-300 space-y-1">
                  <p>Options:</p>
                  <p className="ml-4">--strategy: federated (no central server)</p>
                  <p className="ml-4">--nodes: Comma-separated node list</p>
                  <p className="ml-4">--model: Model file path</p>
                  <p className="ml-4">--dataset: Training data path</p>
                  <p className="ml-4">--rounds: Number of federated rounds</p>
                </div>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">nexus experiment [options]</p>
                <div className="text-sm text-slate-300 space-y-1">
                  <p>Options:</p>
                  <p className="ml-4">--name: Experiment name</p>
                  <p className="ml-4">--track-mlflow: Auto-log to MLflow</p>
                  <p className="ml-4">--model: Model to benchmark</p>
                  <p className="ml-4">--metrics: Comma-separated metrics to track</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Memory Management API */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Memory Management</h2>
            <div className="space-y-4">
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">MemoryBaseline(name)</p>
                <p className="text-sm text-slate-300">Capture memory state before workload. Automatically tracks after cleanup.</p>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">MemoryManager()</p>
                <p className="text-sm text-slate-300">Manage ephemeral memory allocations across sessions. Verify cleanup for every baseline.</p>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">create_baseline(name)</p>
                <p className="text-sm text-slate-300">Start memory tracking for a session. Returns baseline object for later verification.</p>
              </div>
              <div className="bg-slate-900/30 rounded p-4">
                <p className="font-mono text-blue-300 mb-2">verify_cleanup(name)</p>
                <p className="text-sm text-slate-300 mb-2">Compare memory before/after workload. Verify residue &lt; 10MB.</p>
                <p className="text-xs text-slate-400">Returns: {'{ baseline_mb, after_mb, residue_mb, zero_residue_achieved }'}</p>
              </div>
            </div>
          </motion.section>

          {/* Example Code */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Python Example</h2>
            <pre className="bg-slate-900/50 text-blue-300 p-4 rounded overflow-x-auto text-sm">
{`from forge.ml.pytorch_backend import PyTorchInference

# Initialize with INT8 quantization
inference = PyTorchInference(quantization="int8", device="cpu")

# Create memory baseline
baseline = inference.memory_manager.create_baseline("inference")

# Load model and run inference
model = inference.load_model("resnet50", pretrained=True)
results = inference.infer(data, batch_size=128)

print(f"Throughput: {results['throughput_samples_per_sec']:.0f}")

# Verify zero-residue cleanup
cleanup = inference.cleanup_and_verify()
assert cleanup['zero_residue_achieved'], "Failed!"
print(f"Memory residue: {cleanup['residue_mb']:.1f} MB ✓")`}
            </pre>
          </motion.section>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">More Details?</h3>
            <p className="text-slate-300 mb-6">
              Check the full API on GitHub or read the implementation guides.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="https://github.com/torresjchristopher/forge"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all font-medium flex items-center gap-2"
              >
                View on GitHub <ArrowRight className="w-4 h-4" />
              </a>
              <button 
                onClick={() => window.location.href = '/docs'}
                className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all font-medium"
              >
                Back to Docs
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
