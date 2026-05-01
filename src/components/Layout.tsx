import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ReactNode } from 'react';
import { Home, Lightbulb, Globe, Wallet, Clock } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { name: 'Intelligence', path: '/intelligence', icon: <Lightbulb size={18} /> },
    { name: 'Universe', path: '/universe', icon: <Globe size={18} /> },
    { name: 'Money', path: '/money', icon: <Wallet size={18} /> },
    { name: 'Time', path: '/time', icon: <Clock size={18} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto px-6 py-12">
      <header className="mb-16">
        <Link 
          to="/" 
          id="nav-logo"
          className="inline-flex items-center gap-2 group transition-opacity"
        >
          <div className="bg-primary text-white p-1 rounded">
             <Home size={20} />
          </div>
          <span className="text-xl font-semibold tracking-tighter">Big Ideas Made Simple</span>
        </Link>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mt-24 pt-8 border-t border-gray-100">
        <nav className="flex flex-wrap gap-x-8 gap-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              id={`footer-nav-${item.name.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-black ${
                location.pathname === item.path ? 'text-black underline underline-offset-4' : 'text-gray-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
