import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lightbulb, Globe, Wallet, Clock } from 'lucide-react';

export default function HomeView() {
  const categories = [
    { name: 'Intelligence', path: '/intelligence', icon: <Lightbulb className="mb-4" />, color: 'bg-blue-50' },
    { name: 'Universe', path: '/universe', icon: <Globe className="mb-4" />, color: 'bg-purple-50' },
    { name: 'Money', path: '/money', icon: <Wallet className="mb-4" />, color: 'bg-green-50' },
    { name: 'Time', path: '/time', icon: <Clock className="mb-4" />, color: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 id="home-title" className="text-4xl md:text-5xl tracking-tight leading-tight">
          Simple answers to the biggest questions.
        </h1>
        <p id="home-description" className="text-xl text-gray-500 max-w-lg leading-relaxed">
          This website explains complex ideas in a way that anyone can understand.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link
              to={cat.path}
              id={`home-btn-${cat.name.toLowerCase()}`}
              className="block p-8 border border-gray-100 rounded-2xl hover:border-black transition-all group h-full"
            >
              <div className="flex flex-col h-full text-primary">
                {cat.icon}
                <h2 className="text-xl font-medium">{cat.name}</h2>
                <span className="text-sm text-gray-400 mt-2 group-hover:text-black transition-colors">
                  Learn more &rarr;
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
