import React from "react";
import { Link } from "react-router-dom";
import { Clock, User, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const ArticleCard = ({ article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <Link to={`/education/article/${article.slug}`} className="relative block h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-lg shadow-sm border border-black/5 w-fit">
            {article.category}
          </span>
          {article.medicallyReviewed && (
            <span className="bg-green-500/90 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-lg shadow-sm flex items-center gap-1 w-fit">
              <ShieldCheck className="w-3 h-3" /> Reviewed
            </span>
          )}
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" /> {article.author}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
        </div>

        <Link to={`/education/article/${article.slug}`}>
          <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-black transition-colors">
            {article.title}
          </h3>
        </Link>
        
        <p className="text-gray-500 text-sm mb-6 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-gray-50">
          <Link
            to={`/education/article/${article.slug}`}
            className="flex items-center gap-2 text-sm font-bold group/btn"
          >
            Read Article
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
