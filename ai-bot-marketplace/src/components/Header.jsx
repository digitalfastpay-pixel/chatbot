import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Search, ShoppingCart, User, Menu, X, Star, Zap, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">BotMarket</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/browse" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Browse Bots
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Categories
            </Link>
            <Link to="/sell" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Sell Bot
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2.5 hover:bg-gray-100 rounded-xl transition-colors relative">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button className="p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
              <User className="w-6 h-6 text-gray-700" />
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2.5 hover:bg-gray-100 rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              <Link to="/browse" className="text-gray-700 hover:text-primary-600 font-medium">Browse Bots</Link>
              <Link to="/categories" className="text-gray-700 hover:text-primary-600 font-medium">Categories</Link>
              <Link to="/sell" className="text-gray-700 hover:text-primary-600 font-medium">Sell Bot</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium">About</Link>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <button className="btn-primary flex-1">Get Started</button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
