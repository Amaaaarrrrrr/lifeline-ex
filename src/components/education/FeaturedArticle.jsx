import React from "react";
import { Link } from "react-router-dom";
import { Clock, User, ArrowRight, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

const FeaturedArticle = ({ article }) => {
  if (!article) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-full aspect-[21/9] min-h-[400px] rounded-3xl overflow-hidden group mb-12 shadow-2xl"
    >
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Featured Story
            </span>
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
              {article.category}
            </span>
          </div>

          <Link to={`/education/article/${article.slug}`}>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight hover:text-gray-200 transition-colors">
              {article.title}
            </h1>
          </Link>

          <p className="text-white/80 text-lg mb-8 line-clamp-2 font-medium max-w-xl">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              to={`/education/article/${article.slug}`}
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-100 transition-all active:scale-95 shadow-xl"
            >
              Read Full Article <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="flex items-center gap-6 text-white/60 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedArticle;
