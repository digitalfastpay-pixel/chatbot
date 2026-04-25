import { motion } from 'framer-motion';
import { Bot, Star, Zap, DollarSign } from 'lucide-react';

const bots = [
  {
    id: 1,
    name: "CustomerBot Pro",
    description: "AI-powered customer support bot with natural language processing",
    price: 49.99,
    rating: 4.8,
    reviews: 234,
    category: "Customer Support",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    features: ["24/7 Support", "Multi-language", "Analytics"],
    seller: "TechCorp AI"
  },
  {
    id: 2,
    name: "SalesBot Elite",
    description: "Automate your sales pipeline with intelligent lead qualification",
    price: 79.99,
    rating: 4.9,
    reviews: 189,
    category: "Sales",
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=400&h=300&fit=crop",
    features: ["Lead Scoring", "CRM Integration", "Email Automation"],
    seller: "SalesFlow Inc"
  },
  {
    id: 3,
    name: "DataBot Analytics",
    description: "Transform raw data into actionable insights automatically",
    price: 99.99,
    rating: 4.7,
    reviews: 156,
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1677442135137-8e0c6dc6c2ea?w=400&h=300&fit=crop",
    features: ["Real-time Analysis", "Custom Reports", "API Access"],
    seller: "DataMinds"
  },
  {
    id: 4,
    name: "ContentBot Writer",
    description: "Generate high-quality content for blogs, social media, and more",
    price: 39.99,
    rating: 4.6,
    reviews: 312,
    category: "Content",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    features: ["SEO Optimized", "Multiple Tones", "Plagiarism Check"],
    seller: "ContentAI Labs"
  },
];

const BotCard = ({ bot }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img 
          src={bot.image} 
          alt={bot.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-primary-700">${bot.price}/mo</span>
        </div>
        <div className="absolute top-3 left-3 bg-gradient-to-r from-primary-600 to-accent-600 px-3 py-1 rounded-full">
          <span className="text-xs font-medium text-white">{bot.category}</span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
            {bot.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{bot.rating}</span>
            <span className="text-xs text-gray-500">({bot.reviews})</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {bot.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {bot.features.map((feature, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {bot.seller.charAt(0)}
              </span>
            </div>
            <span className="text-sm text-gray-600">{bot.seller}</span>
          </div>
          <button className="btn-primary text-sm py-2 px-4">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedBots = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            <span className="gradient-text">Featured AI Bots</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover our handpicked selection of powerful AI bots to supercharge your business
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bots.map((bot, index) => (
            <motion.div
              key={bot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BotCard bot={bot} />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary inline-flex items-center space-x-2">
            <span>Browse All Bots</span>
            <Zap className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBots;
